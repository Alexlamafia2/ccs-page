import "./Contact.css";
import React, { Fragment } from "react";

import { Form } from "react-router-dom";
import Button from "../UI/Button";

export default function Contact(props) {
  return (
    <Fragment>
      <Form method="post" className="contact-form">
        <h1 className="contact-form__title">Contact Us!</h1>
        <input
          className="contact-form__input"
          type="text"
          id="fname"
          placeholder="First Name"
        />
        <input
          className="contact-form__input"
          type="text"
          id="lname"
          placeholder="Last Name"
        />

        <input
          className="contact-form__input"
          type="email"
          id="email"
          name="email"
          placeholder="Email"
        />
        <input
          className="contact-form__input"
          type="tel"
          id="tel"
          name="tel"
          placeholder="Phone Number"
        />
        <textarea
          className="contact-form__input"
          name="body"
          rows="10"
        ></textarea>
        <div className="submit-button">
          <Button>Submit</Button>
        </div>
      </Form>
    </Fragment>
  );
}
