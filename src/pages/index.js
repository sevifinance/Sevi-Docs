import Head from "@docusaurus/Head";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import clsx from "clsx";
import React from "react";
import styles from "./index.module.css";

// import './style.css'

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <p className={styles.heroDescription}>
          Sell more products with the 'Order now, Pay later' option. Hassle-free
          credit line and payment follow-ups by Sevi. Get paid upfront while
          selling on credit.
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
          >
            Learn More
          </Link>
          <Link
            className="button button--primary button--lg"
            to="https://sevi.io/app"
          >
            Apply Now
          </Link>
        </div>
      </div>
    </header>
  );
}

function SeviIntegrationSection() {
  return (
    <section className={styles.seviIntegration}>
      <div className="container">
        <h2>Sevi Integration</h2>
        <p>
          Sevi offers a user-friendly app for sales agents and customers,
          simplifying credit-based sales. Our open API seamlessly integrates
          into your ERP system or eCommerce website, complemented by a
          comprehensive dashboard for order and credit management.
        </p>
      </div>
    </section>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={`Welcome to ${siteConfig.title}`}
      description="Explore our 'Order now, Pay later' options"
    >
      <Head>{/* Additional Head elements can be added here */}</Head>
      <HomepageHeader />
      <main>
        <SeviIntegrationSection />
        {/* Additional sections can be added here */}
      </main>
    </Layout>
  );
}
