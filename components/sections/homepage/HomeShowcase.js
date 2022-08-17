import Head from 'next/head'
import Image from 'next/image'
import styles from '../../../styles/HomeShowcase.module.css'
//import components
import ShowcaseFeatures from './ShowcaseFeatures'
import MainForm from '../../forms/MainForm'
import Header from '../global/Header'
//import assets
import ClickAway from '../../../public/icons/ClickAway.svg'

const HomeShowcase = () => {
  return (
    <div id="Showcase" className={styles.showcase__container}>

      {/*--HEADER-NAVBAR--*/}
      <Header />

      {/*--RROUNDED-BG-IMAGE--*/}
      <div className={styles.showcase__bgImg}>
        <Image
          src="/static-images/HomePageShowcaseBg.png"
          width={500}
          height={500}
        />
      </div>

      <div className={styles.showcase__content__container}>
        <div className={styles.showcase__content__left}>
          <h1 className={styles.showcase__header__small}>Best teachers</h1>
          <h1 className={styles.showcase__header__big}>Now a
            <span className={styles.showcase__header__colored}> click away</span>
            <span className={styles.click__away__img__container}>
              <ClickAway className={styles.click__away__icon}/>
            </span>
          </h1>
          <h2 className={styles.showcase__header__thin}>1:1 online tutoring</h2>

          <div className={styles.showcase__features__container}>
            <ShowcaseFeatures text="All classes - all subjects - all boards" />
            <ShowcaseFeatures text="3000+ experienced and qualified tutors" />
            <ShowcaseFeatures text="We match your tutors to your child needs" />
            <ShowcaseFeatures text="Classes focused on academic excellence" />
          </div>
        </div>

        <div className={styles.showcase__content__right}>
          <div className={styles.showcase__landingForm__container}>
            <MainForm />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeShowcase;
