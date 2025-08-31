import React, { useEffect, useState } from "react";

export default function Section1() {
  useEffect(() => {
    console.log("Mounted");
  });
  return (
    <div>
      <p>Hello Oparetor</p>
    </div>
  );
}

export function Section2() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log(count);
  }, [count]);
  return (
    <div>
      <p onClick={() => setCount(count + 1)}>Hello Oparetor:Section 2</p>
    </div>
  );
}
