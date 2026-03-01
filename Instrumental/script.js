
        // Audio Context
        let audioContext = null;
        let masterGain = null;
        let currentVolume = 75;
        let currentReed = 2.0;
        let currentBank = 'classical';
        
        // Map to store active notes with their oscillators and gain nodes
        const activeNotes = new Map(); // key -> { oscillators, gainNode }

        // Note frequencies (Indian Classical)
        const noteFrequencies = {
            'सा': 261.63,  // C4
            'रे': 293.66,  // D4
            'ग': 329.63,   // E4
            'म': 349.23,   // F4
            'प': 392.00,   // G4
            'ध': 440.00,   // A4
            'नि': 493.88,   // B4
            'सां': 523.25   // C5
        };

        // Key mappings for both rows
        const keyMappings = {
            // Upper Row (Q to P)
            upper: [
                { key: 'Q', note: 'सा', freq: 261.63, swar: 'सा', western: 'C' },
                { key: 'W', note: 'रे', freq: 293.66, swar: 'रे', western: 'D' },
                { key: 'E', note: 'ग', freq: 329.63, swar: 'ग', western: 'E' },
                { key: 'R', note: 'म', freq: 349.23, swar: 'म', western: 'F' },
                { key: 'T', note: 'प', freq: 392.00, swar: 'प', western: 'G' },
                { key: 'Y', note: 'ध', freq: 440.00, swar: 'ध', western: 'A' },
                { key: 'U', note: 'नि', freq: 493.88, swar: 'नि', western: 'B' },
                { key: 'I', note: 'सां', freq: 523.25, swar: 'सां', western: 'C5' }
            ],
            // Lower Row (A to L)
            lower: [
                { key: 'A', note: 'सा', freq: 261.63, swar: 'सा', western: 'C', octave: -1 },
                { key: 'S', note: 'रे', freq: 293.66, swar: 'रे', western: 'D', octave: -1 },
                { key: 'D', note: 'ग', freq: 329.63, swar: 'ग', western: 'E', octave: -1 },
                { key: 'F', note: 'म', freq: 349.23, swar: 'म', western: 'F', octave: -1 },
                { key: 'G', note: 'प', freq: 392.00, swar: 'प', western: 'G', octave: -1 },
                { key: 'H', note: 'ध', freq: 440.00, swar: 'ध', western: 'A', octave: -1 },
                { key: 'J', note: 'नि', freq: 493.88, swar: 'नि', western: 'B', octave: -1 },
                { key: 'K', note: 'सां', freq: 523.25, swar: 'सां', western: 'C5', octave: -1 },
                { key: 'L', note: 'रे', freq: 587.33, swar: 'रे', western: 'D5', octave: +1 }
            ]
        };

        // Sound bank configurations
        const soundBanks = {
            classical: { name: 'क्लासिकल', wave: 'sine', attack: 0.05, release: 0.2 },
            modern: { name: 'मॉडर्न', wave: 'triangle', attack: 0.02, release: 0.15 },
            flute: { name: 'बांसुरी', wave: 'sine', attack: 0.1, release: 0.3 },
            santoor: { name: 'संतूर', wave: 'sawtooth', attack: 0.01, release: 0.25 },
            organ: { name: 'चर्च ऑर्गन', wave: 'square', attack: 0.03, release: 0.2 },
            accordion: { name: 'अकॉर्डियन', wave: 'triangle', attack: 0.04, release: 0.18 }
        };

        // Initialize Audio
        function initAudio() {
            if (!audioContext) {
                audioContext = new (window.AudioContext || window.webkitAudioContext)();
                masterGain = audioContext.createGain();
                masterGain.connect(audioContext.destination);
                updateVolume(currentVolume);
            }
            if (audioContext.state === 'suspended') {
                audioContext.resume();
            }
        }

        // Start Note (continuous sound)
        function startNote(keyData, row) {
            initAudio();
            
            // Don't restart if already playing
            if (activeNotes.has(keyData.key)) {
                return;
            }
            
            const bank = soundBanks[currentBank];
            const freq = keyData.freq * (row === 'lower' ? 0.5 : 1) * currentReed;
            
            // Create gain node for this note
            const gainNode = audioContext.createGain();
            gainNode.connect(masterGain);
            
            // Create oscillators for rich sound
            const oscillators = [];
            
            // Main oscillator
            const osc1 = audioContext.createOscillator();
            osc1.type = bank.wave;
            osc1.frequency.value = freq;
            osc1.connect(gainNode);
            oscillators.push(osc1);
            
            // Second oscillator for harmonium effect
            const osc2 = audioContext.createOscillator();
            osc2.type = bank.wave === 'sine' ? 'triangle' : 'sine';
            osc2.frequency.value = freq * 1.005; // Slight detune for richness
            osc2.connect(gainNode);
            oscillators.push(osc2);
            
            // Third oscillator for bass
            const osc3 = audioContext.createOscillator();
            osc3.type = 'sine';
            osc3.frequency.value = freq * 0.5; // Sub-octave
            osc3.connect(gainNode);
            oscillators.push(osc3);
            
            // Set gain with smooth attack
            const now = audioContext.currentTime;
            gainNode.gain.setValueAtTime(0, now);
            gainNode.gain.linearRampToValueAtTime(0.3, now + bank.attack);
            
            // Start all oscillators
            oscillators.forEach(osc => osc.start());
            
            // Store in active notes
            activeNotes.set(keyData.key, {
                oscillators,
                gainNode,
                row,
                keyData
            });
            
            // Visual feedback
            const keyElement = document.querySelector(`[data-key="${keyData.key}"][data-row="${row}"]`);
            if (keyElement) {
                keyElement.classList.add('pressed');
            }
            
            // Activate bellows
            document.getElementById('bellows').classList.add('active');
            
            // Update display
            updatePressedKeysDisplay();
            document.getElementById('currentNote').textContent = 
                `${keyData.swar} (${keyData.western}) - ${keyData.note}`;
        }

        // Stop Note
        function stopNote(key) {
            const noteData = activeNotes.get(key);
            if (!noteData) return;
            
            const bank = soundBanks[currentBank];
            const { oscillators, gainNode } = noteData;
            
            // Smooth release
            const now = audioContext.currentTime;
            gainNode.gain.cancelScheduledValues(now);
            gainNode.gain.setValueAtTime(gainNode.gain.value, now);
            gainNode.gain.linearRampToValueAtTime(0, now + bank.release);
            
            // Stop oscillators after release
            oscillators.forEach(osc => {
                osc.stop(now + bank.release);
            });
            
            // Remove from active notes
            activeNotes.delete(key);
            
            // Visual feedback
            const keyElement = document.querySelector(`[data-key="${noteData.keyData.key}"][data-row="${noteData.row}"]`);
            if (keyElement) {
                keyElement.classList.remove('pressed');
            }
            
            // Deactivate bellows if no keys pressed
            if (activeNotes.size === 0) {
                document.getElementById('bellows').classList.remove('active');
            }
            
            // Update display
            updatePressedKeysDisplay();
        }

        // Stop all notes
        function stopAllNotes() {
            activeNotes.forEach((_, key) => {
                stopNote(key);
            });
        }

        // Update pressed keys display
        function updatePressedKeysDisplay() {
            const container = document.getElementById('pressedKeys');
            container.innerHTML = '';
            
            activeNotes.forEach((noteData, key) => {
                const badge = document.createElement('span');
                badge.className = 'pressed-key-badge';
                badge.textContent = `${key} (${noteData.keyData.swar})`;
                container.appendChild(badge);
            });
            
            if (activeNotes.size === 0) {
                container.innerHTML = '<span style="color: rgba(255,255,255,0.5);">कोई नहीं</span>';
            }
        }

        // Generate Keys
        function generateKeys() {
            const upperRow = document.getElementById('upperRow');
            const lowerRow = document.getElementById('lowerRow');
            const shortcutGrid = document.getElementById('shortcutGrid');
            
            upperRow.innerHTML = '';
            lowerRow.innerHTML = '';
            shortcutGrid.innerHTML = '';
            
            // Generate upper row keys (Q to P)
            keyMappings.upper.forEach((keyData, index) => {
                const keyElement = createKeyElement(keyData, 'upper', index);
                upperRow.appendChild(keyElement);
                
                // Add to shortcuts
                addShortcut(keyData);
            });
            
            // Generate lower row keys (A to L)
            keyMappings.lower.forEach((keyData, index) => {
                const keyElement = createKeyElement(keyData, 'lower', index);
                lowerRow.appendChild(keyElement);
                
                // Add to shortcuts
                addShortcut(keyData);
            });
        }

        // Create Key Element with press and release handlers
        function createKeyElement(keyData, row, index) {
            const key = document.createElement('div');
            key.className = 'key';
            key.setAttribute('data-key', keyData.key);
            key.setAttribute('data-row', row);
            key.setAttribute('data-note', keyData.note);
            
            key.innerHTML = `
                <span class="key-hint">${keyData.key}</span>
                <span class="key-char">${keyData.swar}</span>
                <span class="key-note">${keyData.western}</span>
                <span class="key-swar">${keyData.note}</span>
            `;
            
            // Mouse events for press and hold
            key.addEventListener('mousedown', (e) => {
                e.preventDefault();
                startNote(keyData, row);
            });
            
            key.addEventListener('mouseup', () => {
                stopNote(keyData.key);
            });
            
            key.addEventListener('mouseleave', () => {
                stopNote(keyData.key);
            });
            
            // Touch events for mobile
            key.addEventListener('touchstart', (e) => {
                e.preventDefault();
                startNote(keyData, row);
            });
            
            key.addEventListener('touchend', (e) => {
                e.preventDefault();
                stopNote(keyData.key);
            });
            
            key.addEventListener('touchcancel', (e) => {
                e.preventDefault();
                stopNote(keyData.key);
            });
            
            return key;
        }

        // Add Shortcut
        function addShortcut(keyData) {
            const shortcutGrid = document.getElementById('shortcutGrid');
            const item = document.createElement('div');
            item.className = 'shortcut-item';
            item.innerHTML = `
                <span class="shortcut-key">${keyData.key}</span>
                <span>${keyData.swar} (${keyData.western})</span>
            `;
            shortcutGrid.appendChild(item);
        }

        // Theme Management
        function setTheme(theme) {
            document.body.setAttribute('data-theme', theme);
            document.querySelectorAll('.theme-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            event.target.classList.add('active');
        }

        // Volume Control
        function updateVolume(value) {
            currentVolume = value;
            document.getElementById('volumeDisplay').textContent = value + '%';
            if (masterGain) {
                masterGain.gain.value = value / 100;
            }
        }

        // Reed Setting
        function updateReed(value) {
            currentReed = parseFloat(value);
            document.getElementById('reedDisplay').textContent = value + 'x';
            
            // Update frequency of active notes
            activeNotes.forEach((noteData, key) => {
                const { oscillators, keyData, row } = noteData;
                const newFreq = keyData.freq * (row === 'lower' ? 0.5 : 1) * currentReed;
                oscillators.forEach(osc => {
                    osc.frequency.setValueAtTime(newFreq, audioContext.currentTime);
                });
            });
        }

        // Change Sound Bank
        function changeSoundBank(bank) {
            currentBank = bank;
            document.getElementById('currentNote').textContent = 
                `${soundBanks[bank].name} साउंड चालू`;
            
            // Restart all active notes with new sound
            const activeNotesCopy = new Map(activeNotes);
            activeNotesCopy.forEach((noteData, key) => {
                stopNote(key);
                setTimeout(() => {
                    startNote(noteData.keyData, noteData.row);
                }, 50);
            });
        }

        // Keyboard Handler
        function handleKeyDown(event) {
            const key = event.key.toUpperCase();
            
            // Prevent default for letter keys
            if (/[A-Z]/.test(key)) {
                event.preventDefault();
            }
            
            // Check if key is already pressed
            if (activeNotes.has(key)) {
                return;
            }
            
            // Check upper row
            const upperKey = keyMappings.upper.find(k => k.key === key);
            if (upperKey) {
                startNote(upperKey, 'upper');
                return;
            }
            
            // Check lower row
            const lowerKey = keyMappings.lower.find(k => k.key === key);
            if (lowerKey) {
                startNote(lowerKey, 'lower');
                return;
            }
        }

        function handleKeyUp(event) {
            const key = event.key.toUpperCase();
            
            // Prevent default for letter keys
            if (/[A-Z]/.test(key)) {
                event.preventDefault();
            }
            
            stopNote(key);
        }

        // Initialize
        window.onload = () => {
            generateKeys();
            
            // Keyboard events
            document.addEventListener('keydown', handleKeyDown);
            document.addEventListener('keyup', handleKeyUp);
            
            // Prevent key repeats from causing issues
            document.addEventListener('keydown', (e) => {
                if (e.repeat) {
                    e.preventDefault();
                }
            });
            
            // Initialize audio on first interaction
            document.body.addEventListener('click', () => {
                initAudio();
            }, { once: true });
            
            // Clean up on page hide
            document.addEventListener('visibilitychange', () => {
                if (document.hidden) {
                    stopAllNotes();
                }
            });
            
            // Stop all notes when window loses focus
            window.addEventListener('blur', () => {
                stopAllNotes();
            });
        };
    