import "./LandingContent.css";
import mainImg from "../../images/team.jpg";
import { Link } from "react-router-dom";
import Button from "../UI/Button";
// import DarkButton from "../UI/DarkButton";
export default function LandingContent() {
  return (
    <div className="landing-page">
      <div className="intro">
        <h1 className="callout"> Empower Your Business with Cloud Consulting & Solutions</h1>
        <p >
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
          {/* <Link to="learn" className="contact-button">
            <DarkButton>Learn More</DarkButton>
          </Link> */}
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
      </div>
    </div>
  );
}
