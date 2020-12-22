import React from "react";
import Link from "@docusaurus/Link";
import { GitHub, Twitter } from "react-feather";

export const Nav = ({ link }) => {
  return (
    <div id="main-nav">
      <a href="/" className="logo">
        <img src="/img/logo.svg" alt="GraphQL Inspector Logo" />
      </a>
      <div className="links">
        <div className="sep" />
        <Link to="/docs" title="Telebooth setup">
          Setup
        </Link>
        <div className="sep" />
        <a
          href="#contact-us"
          title="GraphQL Inspector - Contact us"
          className="scroll-to"
        >
          Contact Us
        </a>
        <div className="social-links">
          <a
            href="https://github.com/aksanoble/telebooth"
            title="GitHub Repository"
          >
            <GitHub />
          </a>
          <a href="https://twitter.com/aksanoble" title="Twitter Profile">
            <Twitter />
          </a>
        </div>
      </div>
    </div>
  );
};
