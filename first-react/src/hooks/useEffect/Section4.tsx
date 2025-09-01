import React, { useEffect, useState } from "react";

export default function Section4() {
  const [timer, setTimer] = useState<number>(0);
  useEffect(() => {
    const Id = setInterval(() => {
      setTimer(timer + 1);
    }, 1000);
    return () => clearInterval(Id);
  }, [timer]);
  return <div>Timer: {timer} Sec</div>;
}
