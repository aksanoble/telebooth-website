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
import RealTimeUpdateImage from "../../static/img/realtime-telebooth-640.gif";

const Header = () => {
  return (
    <div id="main-header">
      <div className="container">
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
    </div>
  );
};

function Index() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  const { title, tagline, url, favicon } = siteConfig;

  const ogImage = `${url}/img/github/app-action.jpg`;

  return (
    <div>
      <Head>
        <meta property="og:description" content={tagline} />
        <meta charSet="utf-8" />
        <meta property="og:image" content={ogImage} />
        <meta property="twitter:image" content={ogImage} />
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
              <Image
                img={require("../../static/img/illustrations/github.png")}
                alt="GitHub App and Action"
              />
            )
          },
          {
            title: "Self-host",
            text: (
              <p>
                Setup easily using our documentation. Self-hosting allows you to
                scale as per your needs. No limits on the number of contacts or
                messages.
              </p>
            ),
            link: (
              <a
                href="https://telebooth.kanthi.io/docs"
                title="Telebooth setup guide"
              >
                Setup
              </a>
            ),
            img: (
              <Image
                img={require("../../static/img/illustrations/hacker-mindset.png")}
                alt="Entirely Open-Source"
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
              <Image
                img={require("../../static/img/illustrations/hacker-mindset.png")}
                alt="Entirely Open-Source"
              />
            )
          }
        ]}
      />

      <Feature
        img={<img src={RealTimeUpdateImage} alt="realtime image" />}
        title="Familiar interface"
        text={
          <>
            <p>
              View and manage all incoming messages to your bot with the
              familiar web interface.
            </p>
          </>
        }
      />

      <Feature
        reversed={true}
        img={
          <Image
            img={require("../../static/img/ui/features/notifications.png")}
            alt="Notifications"
          />
        }
        title="Real-time"
        text={
          <>
            Messages instantly delivered via the Telegram Bot API while saving a
            copy in your database.
          </>
        }
      />
      <Feature
        img={
          <Image
            img={require("../../static/img/ui/features/notifications.png")}
            alt="Notifications"
          />
        }
        title="Coming soon"
        text={
          <>
            Bulk send —> Sending bulk messages to unlimited contacts. <br />
            Automated replies
          </>
        }
      />

      <Live />
      <Contact />
      <Footer />
    </div>
  );
}

export default Index;
