import { useContext } from "react";
import { ThemeContext } from "./Main";

export default function Content() {
  const Theme = useContext(ThemeContext);
  return (
    <div className="cards">
      <section className={Theme?.theme}>
        <p>abcd</p>
      </section>
      <section className={Theme?.theme}>
        <p>efgh</p>
      </section>
      <section className={Theme?.theme}>
        <p>ijkl</p>
      </section>
    </div>
  );
}
