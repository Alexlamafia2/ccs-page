import "./WelcomeSection.css";

import mainImg from "../../images/team.jpg";

import { Fragment } from "react";
import { Link } from "react-router-dom";
import Button from "../UI/Button";

export default function WelcomeSection() {
  return (
    <Fragment>
      <div className="intro">
        <h1 className="callout">
          Empower Your Business with Cloud Consulting & Solutions
        </h1>
        <p>
          Our expert team is here to guide you on your journey to digital
          transformation. Whether you're seeking cost-effective cloud
          infrastructure, seamless migration strategies, or innovative
          cloud-based solutions, we will make it happen. Step into a future of
          scalability, agility, and competitive advantage.
        </p>
        <div className="contact-buttons">
          <Link to="contact" className="contact-button">
            <Button>Get Free Consultation</Button>
          </Link>
        </div>
      </div>
      <div className="advantages">
        <img className="main-img" src={mainImg} alt="Glasses and Code"></img>
      </div>
    </Fragment>
  );
}
