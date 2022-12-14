import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/About.module.css'
//import components
import Header from '../components/sections/global/Header'
import OurMission from '../components/sections/about/OurMission'
import AboutFeatures from '../components/sections/about/EdviAboutFeatures'
import Experience from '../components/sections/homepage/Experience'
import BecomeATutor from '../components/sections/homepage/BecomeATutor'
import NeedHelp from '../components/sections/homepage/NeedHelp'
import Footer from '../components/sections/global/Footer'

export default function About() {
  return (
    <div>
      <Head>
        <title>About</title>
        <meta name="description" content="edvi-Best Teachers now a click away" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/*--ABOUT SHOWCASE --*/}
      <div className={styles.showcase__container}>
        <Header />

        {/*--RROUNDED-BG-IMAGE--*/}
        <div className={styles.showcase__bgImg}>
          <Image
            src="/static-images/HomePageShowcaseBg.png"
            width={500}
            height={500}
            alt="showcaseBg"
            loading="lazy"
          />
        </div>

        <div className={styles.showcase__content}>
          <h1 className={styles.showcase__header}>About Us</h1>
          <p className={styles.showcase__para}>The largest private tutoring company</p>
        </div>
      </div>

      {/*---OUR MISSION---*/}
      <OurMission />
      {/*---ABOUT FEATURES---*/}
      <AboutFeatures />
      {/*---EXPERIENCE SECTION---*/}
      <Experience />
      {/*---BECOME A TUTOR SECTION ---*/}
      <BecomeATutor />
      {/*---NEED HELP SECTION---*/}
      <NeedHelp />
      {/*---BLOG SECTION --*/}
      <Footer noTopBorder />

    </div>
  )
}
