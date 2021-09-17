import { useState } from "react";
let first = true;

export default function ClockComponentF() {
  const [clock, updateClock] = useState({ time: new Date() });

  if (first === true) {
    setInterval(() => {
      updateClock({ time: new Date() });
    }, 1000);
    first = false;
  }

  return <time>Es ist jetzt {clock.time.toLocaleTimeString()} Uhr.</time>;
}
