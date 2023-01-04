import { useState, useEffect } from 'react';

function Countdown() {
  // Get current date and time
  const now = new Date().getTime();

  // Set the target date and time to May 1st at 00:00:00
  const target = new Date("Jan 25, 2023 10:00:00").getTime();

  // Calculate the remaining time in seconds
  const remaining = Math.floor((target - now) / 1000);

  // Set the state with the remaining time
  const [seconds, setSeconds] = useState(remaining);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds(seconds - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [seconds]);

  // Calculate the number of days, hours, minutes, and seconds remaining
  const days = Math.floor(seconds / (3600 * 24));
  const hours = Math.floor(seconds / 3600) % 24;
  const minutes = Math.floor(seconds / 60) % 60;
  const secs = seconds % 60;

  if (seconds === 0) {
    window.location.replace("/");
    return <div>Time's up!</div>;
  }

  return (
    <div>
    {days} days, {hours} hours, {minutes} minutes, and {secs} seconds <strong>till this should go to production!</strong>
    </div>
  );
}

export default function Timer() {
  return (
    <Countdown />
  );
}
