import React from "react";

export default function ButtonToggleResults({
  showResults,
  setShowResults,
}: any) {
  return (
    <div className="btnT">
      <button
        className="btnToggle"
        onClick={() => setShowResults(!showResults)}
      >
        Toggle Results
      </button>
    </div>
  );
}
