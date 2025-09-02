import { useContext } from "react";
import { ThemeContext } from "./Main";
import ThemeButton from "./ThemeButton";

export default function Header() {
  const Theme = useContext(ThemeContext);
  return (
    <div className="header">
      <h1>Welcome</h1>
      <button
        onClick={() => {
          if (Theme?.theme === "dark") Theme.setTheme("light");
          else Theme?.setTheme("dark");
        }}
      >
        Toggle
      </button>
      <ThemeButton/>
    </div>
  );
}
