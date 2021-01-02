import React from "react";
import Link from "@docusaurus/Link";
import Head from "@docusaurus/Head";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Image from "@theme/IdealImage";
import Footer from "@theme/Footer";

import styles from "./index.module.css";
import { Live } from "../components/live";
import { Contact } from "../components/contact";
import { Feature } from "../components/feature";
import { Highlights } from "../components/highlights";
import { Nav } from "../components/nav";

const Header = () => {
  return (
    <div id="main-header">
      <div className="top-section">
        <div className='intro-section'>
          <h1>
            <span>The telegram bot client.</span>
            <br />
          </h1>
          <h2>
            Create virtual bot identities for your business and interact with your
            customers.
          </h2>
          <Link
            to="/docs"
            className="main-button"
            title="Documentation | GraphQL Inspector"
          >
            GET STARTED
          </Link>
        </div>
        <div className='cover-section'>
          <img
            style={{height: 350}}
            src="/img/cover.svg"
            alt="GitHub App and Action"
          />
        </div>
      </div>
    </div>
  );
};

function Index() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  const { title, tagline, url, favicon } = siteConfig;

  return (
    <div>
      <Head>
        <meta property="og:description" content={tagline} />
        <meta charSet="utf-8" />
        <meta name="twitter:image:alt" content="Image for GraphQL Inspector" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:title" content={`${title} - ${tagline}`} />
        <meta name="description" content={tagline} />
        <meta property="og:description" content={tagline} />
        <meta property="og:url" content={url} />
        <link rel="shortcut icon" href={favicon}></link>
        <title>
          {title} - {tagline}
        </title>
      </Head>
      <div className="mainContainer">
        <Nav />
        <Header />
      </div>

      <Highlights
        highlights={[
          {
            title: "Own your data",
            text: (
              <p>
                Directly create a new bot with Telegram and connect with
                Telebooth. No vendor lock-in. You fully own your bot identity as
                well as all of your contacts and messages.
              </p>
            ),
            img: (
              <img
                src="/img/own-data.svg"
                alt="GitHub App and Action"
              />
            )
          },
          {
            title: "Free and Open Source",
            text: (
              <p>
                Our codebase is publicly available on GitHub. All contributions
                are welcome.
              </p>
            ),
            link: (
              <a
                href="https://github.com/aksanoble/telebooth"
                title="Visit Telebooth repository"
              >
                Source code
              </a>
            ),
            img: (
              <img
                src="/img/open-source.svg"
                alt="Entirely Open-Source"
              />
            )
          }
        ]}
      />

      <div className='image-container'>
        <img src={'/img/realtime-telebooth-640.gif'} alt="realtime image" />
      </div>

      <Feature
        img={
          <img
            src="/img/coming-soon.svg"
            alt="Notifications"
            style={{height: 150}}
          />
        }
        title="Coming soon"
        text={
          <ul>
            <li>Broadcast messages to unlimited contacts</li>
            <li>Canned responses</li>
            <li>Support for multimedia messages</li>
          </ul>
        }
      />

      <Contact />
      <Footer />
    </div>
  );
}

export default Index;
