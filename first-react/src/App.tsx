import Header, { Card, Footer } from "./comps/Mypage";

export default function App() {
  return (
    <div className="continer">
        <Header title="My Profile Page" />
      <div className="cards">
        <Card description="dvjhlirhtvtih" name="Teacher" />
        <Card description="dvjhlirhtvtih" name="Friend" />
        <Card description="dvjhlirhtvtih" name="Friend" />
        <Card description="dvjhlirhtvtih" name="Teacher" />
        <Card description="dvjhlirhtvtih" name="Friend" />
        <Card description="dvjhlirhtvtih" name="Teacher" />
      </div>
        <Footer title="© 2025 My App"/>
    </div>
  );
}
