import React, { useEffect, useState } from "react";

import "./countdown.css";

function CountDown() {
  const calculateTimeLeft = () => {
    let year = new Date().getFullYear();
    //  the last day of sale will be fixed
    const difference = +new Date(`06/1/${year}`) - +new Date();

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [year] = useState(new Date().getFullYear());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span>
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });

  return (
    <div className="rightbar">
      {timerComponents.length ? (
        <div className=" Hsection1_count_down">
          <div className="Hsection1_count_down_flex_item">
            <div className="day">{timeLeft.days} </div>
            <p>Days</p>
          </div>

          <div className="Hsection1_count_down_flex_item">
            <div className="hour">{timeLeft.hours} </div>
            <p>hours</p>
          </div>

          <div className="Hsection1_count_down_flex_item">
            <div className="minute">{timeLeft.minutes} </div>
            <p>minute</p>
          </div>

          <div className="Hsection1_count_down_flex_item">
            <div className="second">{timeLeft.seconds}</div>
            <p>Seconds</p>
          </div>
        </div>
      ) : (
        <div className="timeUp">Time's up! </div>
      )}
    </div>
  );
}

export default CountDown;
