import Head from 'next/head'
import Image from 'next/image'
import styles from '../../../styles/Header.module.css'
//import assets
import BackImg from '../../../public/static-images/HomePageShowcaseBg.png'

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.showcase__navbar}>
        <img src="/icons/LogoWhite.svg" className={styles.showcase__navbar__logo} />

        <div className={styles.showcase__navlinks__container}>
          <a href="https://teachers.edvi.app/" target="_blank" rel="noreferrer" className={styles.showcase__navlinks}>Become a tutor</a>
          <a href="https://live.edvi.app/about-us" target="_blank" rel="noreferrer" className={styles.showcase__navlinks}>About Us</a>
          <a href="https://live.edvi.app/" target="_blank" rel="noreferrer" className={styles.showcase__btn__black}>edvi Live</a>
        </div>
      </div>
    </div>
  )
}

export default Header
