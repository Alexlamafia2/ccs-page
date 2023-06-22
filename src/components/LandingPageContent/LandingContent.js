import "./LandingContent.css";
import mainImg from "../../images/main-img.jpg";
import { Link } from "react-router-dom";
import Button from "../UI/Button";
export default function LandingContent() {
  return (
    <div className="landing-page">
      <div className="intro">
        <h1 className="callout"> Empower Your Business with Cloud Consulting & Solutions</h1>
        <p className="callout-subparagraph">
          Our expert team is here to guide you on your journey to digital
          transformation. Whether you're seeking cost-effective cloud
          infrastructure, seamless migration strategies, or innovative
          cloud-based solutions, we will make it happen. Step into a future of
          scalability, agility, and competitive advantage.
        </p>
        <div className="contact-button">
          <Link to="learn">
            <Button>Learn More</Button>
          </Link>
        </div>
      </div>
      <div className="advantages">
        <img className="main-img" src={mainImg} alt="Glasses and Code"></img>
      </div>
      <div className="advantages-list">
        <h3>Ipsum Lorem</h3>
        <h3>Ipsum Lorem</h3>
        <h3>Ipsum Lorem</h3>
        <h3>Ipsum Lorem</h3>
        <h3>Ipsum Lorem</h3>
      </div>
    </div>
  );
}
