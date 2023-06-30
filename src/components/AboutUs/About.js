import { Fragment } from "react";
import "./About.css";
import aboutImg from "../../images/main-img.jpg";

export default function About() {
  return (
    <Fragment>
      <div className="about-page">
        <div className="about-page__text">
          <h1 className="about-page__callout">
            Great things are made by great people!
          </h1>
          <p className="about-page__callout-description">
            Vivamus venenatis, lectus a pellentesque placerat, felis tellus
            ultrices eros, et aliquam sapien nibh sed sem. Fusce ut ante eget
            purus viverra malesuada. Morbi eget mi maximus, ultricies urna eget,
            tristique lorem. Fusce cursus venenatis quam, a blandit lectus
            vulputate id. Praesent id interdum orci, vitae condimentum dui.
            Fusce pulvinar ante eget mattis semper. Suspendisse in diam massa.
          </p>
        </div>
        <img
          className="about-page__img"
          src={aboutImg}
          alt="Glasses with Code"
        ></img>
      </div>
    </Fragment>
  );
}
