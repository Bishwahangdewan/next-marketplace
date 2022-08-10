import Head from 'next/head'
import Image from 'next/image'
import styles from '../../../styles/HomeShowcase.module.css'
//import components
import Features from './Features'
import MainForm from '../../forms/MainForm'

const HomeShowcase = () => {
  return (
    <div className={styles.showcase__container}>
      <div className={styles.showcase__bgImg}>
        <Image
          src="/static-images/HomePageShowcaseBg.png"
          width={500}
          height={500}
        />
      </div>

      <div className={styles.showcase__navbar}>
        <img src="/icons/LogoWhite.svg" className={styles.showcase__navbar__logo} />

        <div className={styles.showcase__navlinks__container}>
          <a href="#" className={styles.showcase__navlinks}>Become a tutor</a>
          <a href="#" className={styles.showcase__navlinks}>About Us</a>
          <button className={styles.showcase__btn__black}>edvi Live</button>
        </div>
      </div>

      <div className={styles.showcase__content__container}>
        <div className={styles.showcase__content__left}>
          <h1 className={styles.showcase__header__small}>Best teachers</h1>
          <h1 className={styles.showcase__header__big}>Now a
            <span className={styles.showcase__header__colored}> click away</span>
          </h1>
          <h2 className={styles.showcase__header__thin}>1:1 online tutoring</h2>

          <div className={styles.showcase__features__container}>
            <Features text="All classes - all subjects - all boards" />
            <Features text="3000+ experienced and qualified tutors" />
            <Features text="We match your tutors to your child needs" />
            <Features text="Classes focused on academic excellence" />
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
