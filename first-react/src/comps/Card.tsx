import "./Card.css";
import imgLogo from "./logo.png";
import Logo from "./Logo";
import Button from "./Button";

export default function Card(props: any) {
    return (
      <div className="card">
        <Logo path={imgLogo} />
        <p className="name">{props.name}</p>
        <p className="description">{props.description}</p>
        <Button type={props.name} />
      </div>
    );
  }