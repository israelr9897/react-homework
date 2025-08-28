import { useState } from "react";
import ButtonCount from "./ButtonCount";
import ButtonShow from "./ButtonShow";
import ButtonToggleResults from "./ButtonToggleResults";
import AddOptin from "./AddOptin";
import "./buttons.css";

export default function Poll() {
  const [showResults, setShowResults] = useState(true);
  const optList = ["React", "Vue", "Svelte"];
  const [optionList, setOptionList] = useState(optList);
  const optionsObj: Record<string, number> = {
    React: 0,
    Vue: 0,
    Svelte: 0,
  };
  const [options, setOptions] = useState(optionsObj);
  const maxValue = Math.max(...Object.values(options));
  const key = Object.keys(options).find(k => options[k] === maxValue);

  return (
    <div id="continer">
      <div>{showResults && <h1>The leading option: {key} ({maxValue})</h1>}</div>
      <ol className="list">
        {optionList.map((type) => (
          <li>
            {type}
            <ButtonCount
              options={options}
              type={type}
              setOptions={setOptions}
            />
            <ButtonShow showResults={showResults} amount={options[type]} />
          </li>
        ))}
      </ol>
      <ButtonToggleResults
        setShowResults={setShowResults}
        showResults={showResults}
      />
      <AddOptin
        options={options}
        setOptions={setOptions}
        setOptionList={setOptionList}
        optionList={optionList}
      />
      <button
        onClick={() => {
          for (const key in options) {
            options[key] = 0;
          }
          setOptions({ ...options });
        }}
      >
        Reaset
      </button>
    </div>
  );
}
