import { useState } from "react";
import "./Button.css";

export default function Button(props: any) {
  const [text, setText] = useState("click");
  return (
    <button onClick={() => {setText("Wow")}}
      className={
        (props.type === "Friend" && "butoon-green") ||
        (props.type === "Teacher" && "butoon-blue") ||
        "button"
      }
    >
      {text}
    </button>
  );
}
