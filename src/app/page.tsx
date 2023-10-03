"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [days, setDays] = useState(8);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(1);
  const [seconds, setSeconds] = useState(10);
  useEffect(() => {
    if (days > 0) {
      setTimeout(() => {
        setSeconds(seconds - 1);
        if (seconds <= 0) {
          setSeconds(59);
          setMinutes(minutes - 1);
        }

        if (minutes <= 0 && seconds <= 0) {
          setMinutes(59);
          setHours(hours - 1);
        }

        if (minutes <= 0 && seconds <= 0 && hours <= 0) {
          setHours(23);
          setDays(days - 1);
        }
      }, 1000);
    }
  });

  return (
    <main className="h-[75%]">
      <h1>{"WE'RE LAUNCHING SOON"}</h1>
      <div id="countdown" className="flex items-center justify-center h-full">
        <div id="days" className="m-8 font-bold">
          <div id="number" className="text-7xl text-[#fb6087] text-center bg-[#343650]">
            {days}
          </div>
          <h2 className="text-[#8486a9]">DAYS</h2>
        </div>
        <div id="hours" className="m-8 font-bold">
          <div id="number" className="text-7xl text-[#fb6087] text-center bg-[#343650]">
            {hours}
          </div>
          <h2 className="text-[#8486a9]">HOURS</h2>
        </div>
        <div id="minutes" className="m-8 font-bold">
          <div id="number" className="text-7xl text-[#fb6087] text-center bg-[#343650]">
            {minutes}
          </div>
          <h2 className="text-[#8486a9]">MINUTES</h2>
        </div>
        <div id="seconds" className="m-8 font-bold">
          <div id="number" className="text-7xl text-[#fb6087] text-center bg-[#343650]">
            {seconds}
          </div>
          <h2 className="text-[#8486a9]">SECONDS</h2>
        </div>
      </div>
    </main>
  );
}
