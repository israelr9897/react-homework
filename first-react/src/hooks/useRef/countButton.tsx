import React, { useRef } from "react";

export default function CountButton() {
  const count = useRef(0);
  return (
    <div>
      <p>Count Button Clicks:</p>
      <button onClick={() => count.current++}>Click Me</button>
      <button onClick={() => alert("Total clicks: " + count.current)}>
        Show Total Clicks
      </button>
    </div>
  );
}
