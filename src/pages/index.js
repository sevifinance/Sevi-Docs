import React, { useEffect } from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import Head from '@docusaurus/Head';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            start reading
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  useEffect(() => {
    // alert('Finished loading');
  }, []);


  const RunHeadScript = () => {

    function Chatwoot(d, t) {
      var BASE_URL = "https://app.chatwoot.com";
      var g = d.createElement(t), s = d.getElementsByTagName(t)[0];
      g.src = BASE_URL + "/packs/js/sdk.js";
      s.parentNode.insertBefore(g, s);
      g.onload = function () {
        window.chatwootSDK.run({
          websiteToken: 'GMuxr6usUmx4gsGyzaZoSQVG',
          baseUrl: BASE_URL
        })
      }
    }

    Chatwoot(document, "script")

  }

  return (

    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Learn about our platform">
      <Head>
        <script>
          {
            /* {RunHeadScript()}*/
            `(function(d,t) {
            var BASE_URL="https://app.chatwoot.com";
            var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
            g.src=BASE_URL+"/packs/js/sdk.js";
            s.parentNode.insertBefore(g,s);
            g.onload=function(){
              window.chatwootSDK.run({
                websiteToken: 'GMuxr6usUmx4gsGyzaZoSQVG',
                baseUrl: BASE_URL
              })
            }
          })(document,"script");`
          }
        </script>
      </Head>
      <HomepageHeader />
      <main>
        {/* <HomepageFeatures /> */}
      </main>
    </Layout>

  );
}
