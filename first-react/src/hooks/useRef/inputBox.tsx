import { useRef, useState } from "react";
import TextBox from "./exe2";

export default function InputBoxToRef() {
  const value = useRef(null);
  return (
    <div>
      <p>Exe 1: </p>
      <input type="text" ref={value} />
      <button
        onClick={() => {
          value.current.value = "";
        }}
      >
        Clear Input
      </button>
    </div>
  );
}

export function InputBoxToState() {
  const [value, setValue] = useState<string>("");
  return (
    <div>
      <input
        type="text"
        value={value!}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <button
        onClick={() => {
          setValue("");
        }}
      >
        Clear Input 2
      </button>
    </div>
  );
}
