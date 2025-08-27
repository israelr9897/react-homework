export default function Button({
  mode,
  modeFN,
  modsFN,
  recentFN,
  moodes,
  recent,
}: any) {
  const modeKey = mode.split(" ")[0];
  return (
    <>
      <button
        onClick={() => {
          modeFN(mode);
          modsFN({ ...moodes, [modeKey]: moodes[modeKey] + 1 });
          recentFN([...recent, mode].slice(-3));
          // recentFN(() => {
          //   if (recent.length < 3) return [mode, ...recent];
          //   return [mode, ...recent.slice(0, 2)];
          // });
        }}
      >
        {modeKey}
      </button>
    </>
  );
}
