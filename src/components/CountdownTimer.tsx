"use client";

import React, { useEffect, useState } from 'react'

const formatTime = (time: number) => time.toString().padStart(2, '0');

function CountdownTimer() {
  const targetDate = new Date('2025-12-31T23:59:59'); 

  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();

    return difference > 0 ? {
      d: Math.floor(difference / (1000 * 60 * 60 * 24)),
      h: Math.floor((difference / (1000 * 60 * 60)) % 24),
      m: Math.floor((difference / (1000 * 60)) % 60),
      s: Math.floor((difference / 1000) % 60),
    } : { d: 0, h: 0, m: 0, s: 0 };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const { d, h, m, s } = timeLeft;

  return (
    <div className="font-bold text-5xl text-yellow-300 text-center mt-10">
      {formatTime(d)}d :{formatTime(h)}h : {formatTime(m)}m:{formatTime(s)}s
    </div>
  );
}

export default CountdownTimer;
