import "./Button.css";

export default function DarkButton(props) {
  return <button className="dark-button">{props.children}</button>;
}