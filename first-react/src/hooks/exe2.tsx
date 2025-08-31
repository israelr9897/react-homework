import { useRef, useState } from "react";

export default function TextBoxMain() {
  const [value, setValue] = useState<string>("");
  const value2 = useRef("0");
  return (
    <div>
      <p>Exe 2: </p>
      <TextBox value={value2} showValue={value} />
      <button
        onClick={() => {
          setValue(value2.current.value);
        }}
      >
        Show value
      </button>
    </div>
  );
}

export function TextBox({ value, showValue }: any) {
  return (
    <>
      <input type="text" placeholder="enter num" ref={value} />
      {showValue && alert(showValue)}
    </>
  );
}
 