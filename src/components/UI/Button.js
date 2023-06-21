import "./Button.css";

export default function Button(props) {
  return <button className="button-ui">{props.children}</button>;
}
