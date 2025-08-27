import { useState } from "react";
import "./mode.css";
import Button from "./ButtonBasic";
import ButtonRandom from "./ButtonRandom";
import ButtonReaset from "./ButtonReaset";

export default function Mode() {
  const allMoods = ["Happy 😀", "Sad 😢", "Angry 😡"];
  const moodes = {
    Happy: 0,
    Sad: 0,
    Angry: 0,
  };
  const [mode, setMoode] = useState("😐 Neutral");
  const [Moodes, setMoodes] = useState(moodes);
  const [recent, setRecent] = useState<String[]>([]);
  return (
    <div className="mainPage">
      <h1>moode: {mode}</h1>
      <div className="buttons">
        <Button
          mode={"Happy 😀"}
          modeFN={setMoode}
          modsFN={setMoodes}
          recentFN={setRecent}
          moodes={Moodes}
          recent={recent}
        />
        <Button
          mode={"Sad 😢"}
          modeFN={setMoode}
          modsFN={setMoodes}
          recentFN={setRecent}
          moodes={Moodes}
          recent={recent}
        />
        <Button
          mode={"Angry 😡"}
          modeFN={setMoode}
          modsFN={setMoodes}
          recentFN={setRecent}
          moodes={Moodes}
          recent={recent}
        />
      </div>
        <h2>Moode Counter:</h2>
        <p>Happy 😀: {Moodes.Happy}</p>
        <p> Sad 😢: {Moodes.Sad}</p>
        <p>Angry 😡: {Moodes.Angry}</p>
      <div className="buttons">
        <ButtonReaset
          modeFN={setMoode}
          modsFN={setMoodes}
          recentFN={setRecent}
        />
        <ButtonRandom
          modeFN={setMoode}
          modsFN={setMoodes}
          recentFN={setRecent}
          moodes={Moodes}
          recent={recent}
          allMoods={allMoods}
        />
        </div>
        <h2>The last three moods:</h2>
        {recent.map((mode, i) => (
          <ol>
            {i + 1}. {mode}
          </ol>
        ))}
    </div>
  );
}
