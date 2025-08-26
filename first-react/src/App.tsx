import Cards from "./comps/Cards";
import Header from "./comps/Header";
import Footer from "./comps/Footer";

export default function App() {
  return (
    <div className="continer">
      <Header title="My Profile Page" />
      <div className="cards">
        <Cards />
      </div>
      <Footer title="© 2025 My App" />
    </div>
  );
}
