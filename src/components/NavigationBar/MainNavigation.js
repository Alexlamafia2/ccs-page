import { Link, NavLink } from "react-router-dom";
import "./MainNavigation.css";
import logoImg from "../../images/logo.png";
import Button from "../UI/Button";

export default function MainNavigation() {
  return (
    <header className="header">
      <Link to="/"      end={true}>
        <img src={logoImg} className="logo-img" alt="CCS Logo"></img>
      </Link>

      <nav className="nav">
        {/* <img src={logoImg} className="logo-img" alt="CCS Logo"></img> */}
        <ul className="list">
          <li>
            <NavLink
              to="about"
              className={({ isActive }) => (isActive ? "active" : undefined)}
              end={true}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="contact"
              className={({ isActive }) => (isActive ? "active" : undefined)}
              end={true}
            >
              <Button>Contact Us</Button>
             
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
