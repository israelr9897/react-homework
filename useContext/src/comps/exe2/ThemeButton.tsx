import { useContext } from "react";
import { ThemeContext } from "./Main";

export default function ThemeButton() {
    const Theme = useContext(ThemeContext)
  return (
    <>
      <button
        className={Theme?.theme}
        onClick={() => {
          Theme?.setTheme("high-contrast");
        }}
      >
        high contrast
      </button>
    </>
  );
}
