import Cards from "./comps/Cards";
import Header from "./comps/Header";
import Footer from "./comps/Footer";
import Mode from "./moods/mainPage";
import Poll from "./miniPoll/Poll";
import InputBoxToRef, {InputBoxToState} from "./hooks/inputBox";
import TextBoxMain  from "./hooks/exe2";
import CounterHistory from "./hooks/exe3";
import Timers from "./hooks/Timers";
import CountButton from "./hooks/countButton";

export default function App() {
  return (
    // <div className="continer">
    //   <Header title="My Profile Page" />
    //   <div className="cards">
    //     <Cards />
    //   </div>
    //   <Footer title="© 2025 My App" />
    // </div>
    //  <div>
    //  <Mode/>
    //    </div>
    //  <>
    //  <Poll/>
    //    </>
    <>
    <InputBoxToRef />
    <InputBoxToState />
    <TextBoxMain/>
    <CounterHistory />
    <Timers />
    <CountButton />
    </>
  );
}
