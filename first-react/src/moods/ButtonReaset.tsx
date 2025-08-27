import "./Buttons.css"
export default function ButtonReaset({ modeFN, modsFN, recentFN }: any) {
  return (
    <>
      <button className="reaset"
        onClick={() => {
          modeFN("😐 Neutral");
          modsFN({
            Happy: 0,
            Sad: 0,
            Angry: 0,
          });
          recentFN([]);
        }}
      >
        Reaset
      </button>
    </>
  );
}
