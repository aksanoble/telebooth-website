import React, { useState, useCallback, useEffect } from "react";
import Image from "@theme/IdealImage";
import { Send } from "react-feather";
import styles from "./contact.module.css";

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

const ContactForm = () => {
  const [contactDetails, setContactDetails] = useState({});
  const target = "/";
  const handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...contactDetails })
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error));

    e.preventDefault();
  };

  const handleChange = e => {
    setContactDetails(
      Object.assign(contactDetails, { [e.target.name]: e.target.value })
    );
  };
  return (
    <form name="contact" data-netlify="true" onSubmit={handleSubmit}>
      <p>
        <label>
          Your Name:{" "}
          <input
            type="text"
            name="name"
            value={contactDetails.name}
            onChange={handleChange}
          />
        </label>
      </p>
      <p>
        <label>
          Your Email:{" "}
          <input
            type="email"
            name="email"
            value={contactDetails.email}
            onChange={handleChange}
          />
        </label>
      </p>
      <p>
        <label>
          Message:{" "}
          <textarea
            name="message"
            value={contactDetails.message}
            onChange={handleChange}
          />
        </label>
      </p>
      <p>
        <button type="submit">Send</button>
      </p>
    </form>
  );
};

export const Contact = () => {
  return (
    <div className={styles.contactUsBackground} id="contact-us">
      <div className={`${styles.contactContainer} container`}>
        <div className={styles.contactSideBySide}>
          <div className={styles.contactMainPart}>
            <h3 className={styles.contactTitle}>Get in touch!</h3>
            <div className={styles.contactLimitContainer}>
              <p className={styles.contactDetails}>
                Need help in setting up or need a managed service?
                <br /> We would love to help you and hear how you use Telebooth.
              </p>
              <div className="contact-wrapper">
                <ContactForm />
              </div>
            </div>
          </div>
          <div className={styles.contactMailBox}>
            <Image
              img={require("../../static/img/illustrations/mail-box.png")}
              alt="Mail Box"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
