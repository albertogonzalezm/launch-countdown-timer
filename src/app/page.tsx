"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const countDownDate = new Date("12-31-2023").getTime();
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    var today = new Date().getTime();
    var dist = countDownDate - today;
    const d = Math.floor(dist / (1000 * 60 * 60 * 24));
    const h = Math.floor((dist % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((dist % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((dist % (1000 * 60)) / 1000);
    if (days >= 0) {
      setTimeout(() => {
        setDays(d);
        setHours(h);
        setMinutes(m);
        setSeconds(s);
      }, 1000);
    }
  }, [countDownDate, days, hours, minutes, seconds]);

  return (
    <main>
      <div className="h-full flex flex-col justify-center items-center">
        <h1>{"WE'RE LAUNCHING SOON"}</h1>
        <div id="countdown">
          <div id="days" className="time">
            <p id="number">{days}</p>
            <h2>DAYS</h2>
          </div>
          <div id="hours" className="time">
            <p id="number">{hours}</p>
            <h2>HOURS</h2>
          </div>
          <div id="minutes" className="time">
            <p id="number">{minutes}</p>
            <h2>MINUTES</h2>
          </div>
          <div id="seconds" className="time">
            <p id="number">{seconds}</p>
            <h2>SECONDS</h2>
          </div>
        </div>
      </div>
    </main>
  );
}
