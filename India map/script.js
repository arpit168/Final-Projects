const stateData = {
  "andhra pradesh": { top: "71%", left: "40%", capital: "Amaravati" },
  "arunachal pradesh": { top: "27%", left: "87%", capital: "Itanagar" },
  assam: { top: "33%", left: "81%", capital: "Dispur" },
  bihar: { top: "38%", left: "61%", capital: "Patna" },
  chhattisgarh: { top: "49%", left: "52%", capital: "Raipur" },
  goa: { top: "70%", left: "22%", capital: "Panaji" },
  gujarat: { top: "46%", left: "18%", capital: "Gandhinagar" },
  haryana: { top: "27%", left: "31%", capital: "Chandigarh" },
  "himachal pradesh": { top: "19%", left: "34%", capital: "Shimla" },
  jharkhand: { top: "44%", left: "60%", capital: "Ranchi" },
  karnataka: { top: "72%", left: "30%", capital: "Bengaluru" },
  kerala: { top: "85%", left: "29%", capital: "Thiruvananthapuram" },
  "madhya pradesh": { top: "46%", left: "40%", capital: "Bhopal" },
  maharashtra: { top: "56%", left: "28%", capital: "Mumbai" },
  manipur: { top: "39%", left: "87%", capital: "Imphal" },
  meghalaya: { top: "36%", left: "79%", capital: "Shillong" },
  mizoram: { top: "43%", left: "85%", capital: "Aizawl" },
  nagaland: { top: "34%", left: "88%", capital: "Kohima" },
  odisha: { top: "54%", left: "61%", capital: "Bhubaneswar" },
  punjab: { top: "22%", left: "29%", capital: "Chandigarh" },
  rajasthan: { top: "34%", left: "23%", capital: "Jaipur" },
  sikkim: { top: "33%", left: "68%", capital: "Gangtok" },
  "tamil nadu": { top: "83%", left: "38%", capital: "Chennai" },
  telangana: { top: "62%", left: "40%", capital: "Hyderabad" },
  tripura: { top: "42%", left: "82%", capital: "Agartala" },
  "uttar pradesh": { top: "35%", left: "48%", capital: "Lucknow" },
  uttarakhand: { top: "24%", left: "39%", capital: "Dehradun" },
  "west bengal": { top: "45%", left: "68%", capital: "Kolkata" },
  chandigarh: { top: "23%", left: "30%", capital: "Chandigarh" },
  delhi: { top: "30%", left: "33%", capital: "New Delhi" },
  "jammu and kashmir": { top: "13%", left: "28%", capital: "Srinagar" },
  ladakh: { top: "10%", left: "34%", capital: "Leh" }
};

const templatePin = document.getElementById("mapPin");
const input = document.getElementById("stateInput");
const message = document.getElementById("message");
const mapContainer = document.getElementById("mapContainer");
const suggestionsBox = document.getElementById("suggestions-list");

const tooltip = document.createElement("div");
tooltip.className = "map-tooltip";
document.body.appendChild(tooltip);

const pinnedStates = new Set();

function findState() {
  const query = input.value.toLowerCase();

  if (!query) {
    message.textContent = "";
    return;
  }

  if (stateData[query]) {
    if (pinnedStates.has(query)) {
      message.textContent = "You have already pinned " + query;
      select.value = "";
      suggestionsBox.style.display = "none";
      return;
    }

    const data = stateData[query];
    const newPin = templatePin.cloneNode(true);
    newPin.removeAttribute("id");

    newPin.style.top = data.top;
    newPin.style.left = data.left;
    newPin.style.display = "block";

    newPin.addEventListener("mouseenter", () => {
      const displayName = query
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");

      tooltip.innerHTML = `<strong>${displayName}</strong><br>Capital: ${data.capital}`;
      tooltip.style.display = "block";
    });

    newPin.addEventListener("mousemove", (e) => {
      tooltip.style.left = e.pageX + 15 + "px";
      tooltip.style.top = e.pageY + 15 + "px";
    });

    newPin.addEventListener("mouseleave", () => {
      tooltip.style.display = "none";
    });

    mapContainer.appendChild(newPin);
    pinnedStates.add(query);

    message.textContent = "";
    input.value = "";
    suggestionsBox.style.display = "none";
  } else {
    message.textContent = "State not found or check spelling.";
  }
}

input.addEventListener("input", function () {
  const val = this.value.toLowerCase();
  suggestionsBox.innerHTML ;

  if (!val) {
    suggestionsBox.style.display = "none";
    return;
  }

  const allStates = Object.keys(stateData);
  const matches = allStates.filter((state) => state.startsWith(val));

  if (matches.length > 0) {
    matches.forEach((state) => {
      const div = document.createElement("div");
      div.classList.add("suggestion-item");
      div.textContent = state;

      div.onclick = function () {
        input.value = state;
        suggestionsBox.style.display = "none";
      };

      suggestionsBox.appendChild(div);
    });
    suggestionsBox.style.display = "block";
  } else {
    suggestionsBox.style.display = "none";
  }
});

document.getElementById("reloadBtn").addEventListener("click", function () {
  location.reload();
});
