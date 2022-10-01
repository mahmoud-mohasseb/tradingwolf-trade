import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Slidercustomer from '@site/src/components/Slidercustomer';
import Testimonials from "@site/src/components/Testimonials";
import HeroSection from "@site/src/components/HeroSection";
import Realtime from "@site/src/components/Realtime";
import styles from './index.module.css';

// function HomepageHeader() {
//   const {siteConfig} = useDocusaurusContext();
//   return (
//     <header className={clsx('hero hero--primary', styles.heroBanner)}>
//       <div data-aos="flip-right" className="container">
//         <h1 className="hero__title">{siteConfig.title}</h1>
//         <p className="hero__subtitle">{siteConfig.tagline}</p>
//         <div className={styles.buttons}>
//           <Link
//             className="button button--secondary button--lg"
//             to="/docs/intro">
//             Docusaurus Tutorial - 5min ⏱️
//           </Link>
//         </div>
//       </div>
//     </header>
//   );
// }

const frontpageData =[
  {
    title : "🏁 Getting Started",
    desc:"Learn the basics of Tradingwolf and the platforms we support.",
    link :"/docs/category/-getting-started"
  },
  {
    title : "📈 TradingWolf Premium Indicators",
    desc:"In depth guides & information about our tools & features.",
    link :"/docs/category/-technical-analytics",
  },
  {
    title : "🎯 Popular Strategies",
    desc:"Easy ways to use our features together & find trades.",
    link :"/docs/category/-fqa"
  },
  {
    title : "🚀 How To Setup ?",
    desc:"Learn how to setup TradingWolf on TradingView & Discord",
    link :"docs/category/-fqa"
  },
  {
    title : "❓ FQA",
    desc:"Get answers to frequently asked questions.",
    link :"/docs/category/-fqa"
  },
  {
    title : "📊 Technical Analysis",
    desc:"Useful information about technical analysis & markets.",
    link :"docs/category/-technical-analytics"
  },
]

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      {/* <HomepageHeader /> */}
      <main className="container">
       <div className={styles.gridflow}>
        {frontpageData.map((item)=> {
          return (
          <div className={styles.card}>
            <Link
            style={{textDecoration:"none"}}
            //  className="button button--secondary button--lg"
             to={item.link}>
             <h1>{item.title}</h1>
             <h2 style={{fontWeight:"bold"}}>{item.desc}</h2>
             </Link>
           </div>
          )
        })}
        </div>
        {/* <HeroSection/> */}
        {/* <Testimonials/> */}
        {/* <Realtime/> */}
        {/* <HomepageFeatures /> */}
        {/* <Slidercustomer /> */}
      </main>
    </Layout>
  );
}
