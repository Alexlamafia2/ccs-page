import AdvantagesSection from "./AdvantagesSection";
import "./LandingContent.css";

import WelcomeSection from "./WelcomeSection";

// import DarkButton from "../UI/DarkButton";
export default function LandingContent() {
  return (
    <div className="landing-page">
      <WelcomeSection />
      <AdvantagesSection />
    </div>
  );
}
