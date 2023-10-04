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
    <main>
      <div className="h-full flex flex-col justify-center items-center">
        <h1>{"WE'RE LAUNCHING SOON"}</h1>

        <div id="countdown">
          <div id="days" className="time">
            <div id="number">{days < 10 ? "0" + days : days}</div>
            <h2>DAYS</h2>
          </div>
          <div id="hours" className="time">
            <div id="number">{hours < 10 ? "0" + hours : hours}</div>
            <h2>HOURS</h2>
          </div>
          <div id="minutes" className="time">
            <div id="number">{minutes < 10 ? "0" + minutes : minutes}</div>
            <h2>MINUTES</h2>
          </div>
          <div id="seconds" className="time">
            <div id="number">{seconds < 10 ? "0" + seconds : seconds}</div>
            <h2>SECONDS</h2>
          </div>
        </div>
      </div>
    </main>
  );
}
