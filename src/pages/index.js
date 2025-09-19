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
            to="/docs/about/intro"
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
      <div className="container text-center">
        <h2 style={{ textAlign: 'center', marginTop: 30 }}>Sevi Integration</h2>
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

function DocsTypeSection() {
  const docTypes = [
    {
      title: "Buyers",
      icon: "🛍️",
      description: "Get flexible payment terms and manage your purchases",
      link: "/docs/buyer/introbuyer"
    },
    {
      title: "Sellers",
      icon: "🏪",
      description: "Boost your sales with credit offerings",
      link: "/docs/seller/start"
    },
    {
      title: "Agents",
      icon: "👥",
      description: "Manage your sales and customer relationships",
      link: "/docs/agent/intro"
    },
    {
      title: "Developers",
      icon: "💻",
      description: "Integrate Sevi into your applications",
      link: "/docs/developer/intro"
    }
  ];

  return (
    <section style={{ padding: '2rem 0' }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem',
          padding: '1rem'
        }}>
          {docTypes.map((type, index) => (
            <div 
              key={index} 
              style={{
                padding: '2rem',
                borderRadius: '8px',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                backgroundColor: 'white'
              }}
            >
              <span style={{ fontSize: '2rem', marginBottom: '1rem' }}>{type.icon}</span>
              <h3 style={{ marginBottom: '1rem' }}>{type.title}</h3>
              <p style={{ marginBottom: '1.5rem', flex: 1 }}>{type.description}</p>
              <Link
                className="button button--secondary button--md"
                to={type.link}
              >
                Learn More
              </Link>
            </div>
          ))}
        </div>
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
        {/* <SeviIntegrationSection /> */}
        <DocsTypeSection />
      </main>
    </Layout>
  );
}
