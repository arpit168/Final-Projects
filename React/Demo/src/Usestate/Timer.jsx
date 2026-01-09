import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";


const defaultTarget = new Date(new Date().getFullYear(), 11, 31, 23, 59, 59);

const Timer = () => {
  const [targetDate, setTargetDate] = useState(defaultTarget);
  const [timeLeft, setTimeLeft] = useState(getTimeRemaining(defaultTarget));
  const [message] = useState("COUNTDOWN TIMER");

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeRemaining(targetDate));
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-950">
      <div className="w-full max-w-xl backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl shadow-2xl px-8 py-8 text-center">
        <h1 className="text-white text-2xl font-bold mb-6 tracking-widest">
          {message}
        </h1>

        <div className="flex flex-wrap justify-center gap-6 text-white font-mono">
          <TimeBox label="Days" value={timeLeft.days} />
          <TimeBox label="Hours" value={timeLeft.hours} />
          <TimeBox label="Minutes" value={timeLeft.minutes} />
          <TimeBox label="Seconds" value={timeLeft.seconds} />
        </div>
      </div>
    </div>
  );
};


const TimeBox = ({ label, value }) => {
  return (
    <div className="flex flex-col items-center bg-indigo-600 rounded-xl shadow-xl h-28 w-28 overflow-hidden">
      <div className="relative h-full w-full flex items-center justify-center text-5xl font-bold">
        <AnimatePresence mode=" sync">
          <motion.div
            key={value}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0 , opacity: 1 }}
            exit={{ x:-50, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute"
          >
            {String(value).padStart(2, "0")}
          </motion.div>
        </AnimatePresence>
      </div>
      <span className="text-white/70 text-sm pb-2">{label}</span>
    </div>
  );
};


function getTimeRemaining(endDate) {
  const now = new Date();
  const diff = endDate - now;

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  const totalSeconds = Math.floor(diff / 1000);

  return {
    days: Math.floor(totalSeconds / (3600 * 24)),
    hours: Math.floor((totalSeconds % (3600 * 24)) / 3600),
    minutes: Math.floor((totalSeconds % 3600) / 60),
    seconds: totalSeconds % 60,
  };
}

export default Timer;
