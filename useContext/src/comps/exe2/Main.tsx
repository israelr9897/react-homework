import { createContext, useEffect, useState } from "react";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import "./style.css";

export type ThemeType = {
  theme: "dark" | "light" | "high-contrast";
  setTheme: React.Dispatch<
    React.SetStateAction<"dark" | "light" | "high-contrast">
  >;
};

export const ThemeContext = createContext<ThemeType | null>(null);

export default function Main() {
  const [theme, setTheme] = useState<"dark" | "light" | "high-contrast">(
    "dark"
  );
  const objTheme: ThemeType = {
    theme: theme,
    setTheme: setTheme,
  };
  useEffect(() => {
    const stateTheme: string | null = localStorage.getItem("theme");
    if (stateTheme) setTheme(stateTheme as "dark" | "light" | "high-contrast");
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="main">
      <ThemeContext.Provider value={objTheme}>
        <Header />
        <Content />
        <Footer />
      </ThemeContext.Provider>
    </div>
  );
}
