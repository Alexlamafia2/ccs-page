import "./LandingContent.css";
import mainImg from "../../images/team.jpg";
import { Link } from "react-router-dom";
import Button from "../UI/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpWideShort,
  faDollarSign,
  faArrowsSplitUpAndLeft,
  faLock,
  faLightbulb,
  faArrowsRotate,
} from "@fortawesome/free-solid-svg-icons";

// import DarkButton from "../UI/DarkButton";
export default function LandingContent() {
  return (
    <div className="landing-page">
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
      <h1 className="services-header">Open your business to a world of possibilities.</h1>

      <div className="grid-container">
        <div className="grid-service">
          <FontAwesomeIcon className="grid-icon" icon={faArrowUpWideShort} />
          <h3>Scalability</h3>
          <p className="grid-icon_description">
            We offer businesses the ability to scale their resources up or down
            based on their needs. Whether you need additional storage, computing
            power, or software licenses, the cloud allows you to easily adjust
            your resources without significant upfront investments.
          </p>
        </div>
        <div className="grid-service">
          <FontAwesomeIcon className="grid-icon" icon={faDollarSign} />
          <h3>Cost Efficiency</h3>
          <p className="grid-icon_description">
            Pay-as-you-go, where you only pay for the resources you actually
            use. Eliminates the need for large upfront infrastructure
            investments and allow your business/businesses to reduce hardware
            and maintenance costs. Additionally, achieve lower costs compared to
            on-premises solutions.
          </p>
        </div>

        <div className="grid-service">
          <FontAwesomeIcon
            className="grid-icon"
            icon={faArrowsSplitUpAndLeft}
          />
          <h3 className="grid-service_item">Flexibility</h3>
          <p className="grid-icon_description">
            Access your applications and data from anywhere with an internet
            connection. This flexibility enables remote work and collaboration,
            allowing employees to work seamlessly from different locations and
            devices. It also facilitates real-time data sharing and updates
            among teams, leading to improved productivity and efficiency.
          </p>
        </div>
        <div className="grid-service">
          <FontAwesomeIcon className="grid-icon" icon={faLock} />
          <h3 className="grid-service_item">Data Security</h3>
          <p className="grid-icon_description">
            Storing data in the cloud ensures that critical business information
            is protected even in the event of hardware failures, natural
            disasters, or other unforeseen circumstances. We invest heavily in
            security measures, providing businesses with a higher level of data
            security compared to many on-premises solutions.
          </p>
        </div>
        <div className="grid-service">
          <FontAwesomeIcon className="grid-icon" icon={faLightbulb} />
          <h3 className="grid-service_item">Innovation and Integration</h3>
          <p className="grid-icon_description">
            We offer a wide range of tools, services, and APIs that enable
            businesses to develop and deploy innovative applications quickly. We
            support integration with other cloud-based services and
            technologies, facilitating the development of hybrid solutions that
            combine on-premises and cloud resources. By leveraging the cloud's
            capabilities, we help your business to stay ahead of the
            competition, experiment with new ideas, and quickly adapt to
            changing market demands.
          </p>
        </div>
        <div className="grid-service">
          <FontAwesomeIcon className="grid-icon" icon={faArrowsRotate} />
          <h3 className="grid-service_item">Maintenance and Updates</h3>
          <p className="grid-icon_description">
            We handle the maintenance and updates of the underlying
            infrastructure and software, reducing the burden on businesses' IT
            teams. This allows your organization to focus more on your core
            competencies and strategic initiatives, rather than spending time
            and resources on routine maintenance tasks.
          </p>
        </div>
      </div>
    </div>
  );
}
