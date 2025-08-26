import "./Button.css";

export default function Button(props: any) {
  return (
    <button
      className={
        (props.type === "Friend" && "butoon-green") ||
        (props.type === "Teacher" && "butoon-blue") ||
        "button"
      }
    >
      click
    </button>
  );
}
