import "./Buttons.css";
export default function ButtonRandom({
  modeFN,
  modsFN,
  recentFN,
  moodes,
  recent,
  allMoods,
}: any) {
  return (
    <>
      <button
        className="random"
        onClick={() => {
          const num = Math.floor(Math.random() * 3);
          const moode = allMoods[num];
          const moodeKey = moode.split(" ")[0] as "Happy" | "Sad" | "Angry";
          modeFN(moode);
          modsFN({ ...moodes, [moodeKey]: moodes[moodeKey] + 1 });
          recentFN(() => {
            if (recent.length < 3) return [moode, ...recent];
            return [moode, ...recent.slice(0, 2)];
          });
        }}
      >
        Random
      </button>
    </>
  );
}
