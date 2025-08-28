import React, { useState } from "react";

export default function AddOptin({
  options,
  setOptions,
  optionList,
  setOptionList,
}: any) {
  const [value, setValue] = useState<string>("");
  return (
    <div>
      <label htmlFor="addOptin"> Add Optin</label>
      <input
        placeholder="Enter Optin"
        id="addOptin"
        onChange={(e) => setValue(e.target.value)}
      ></input>
      <button
        className="addOptin"
        onClick={() => {
          if (value) {
            setOptions({ ...options, [value]: 0 });
            setOptionList([...optionList, value]);
            setValue("");
          } 
        }}
      >
        Add
      </button>
    </div>
  );
}
