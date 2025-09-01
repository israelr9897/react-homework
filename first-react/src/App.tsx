import Cards from "./comps/Cards";
import Header from "./comps/Header";
import Footer from "./comps/Footer";
import Mode from "./moods/mainPage";
import Poll from "./miniPoll/Poll";
import InputBoxToRef, {InputBoxToState} from "./hooks/useRef/inputBox";
import TextBoxMain  from "./hooks/useRef/exe2";
import CounterHistory from "./hooks/useRef/exe3";
import Timers from "./hooks/useRef/Timers";
import CountButton from "./hooks/useRef/countButton";
import Section1 from "./hooks/useEffect/Section1";
import Section2 from "./hooks/useEffect/Section2";
import FetchData from "./hooks/useEffect/FetchData";
import Client from "./hooks/useEffect/server/client";
import Section4 from "./hooks/useEffect/Section4";
import Section5 from "./hooks/useEffect/Section5";

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
    // <>
    // <InputBoxToRef />
    // <InputBoxToState />
    // <TextBoxMain/>
    // <CounterHistory />
    // <Timers />
    // <CountButton />
    // </>
    <>
    {/* <Section1 />
    <Section2 />
    <FetchData /> */}
    {/* <Client/> */}
    <Section4 />
    <Section5/>
    </>
  );
}
