import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../../../styles/Header.module.css'
//import assets
import BackImg from '../../../public/static-images/HomePageShowcaseBg.png'

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.showcase__navbar}>
        <Link href="/">
          <a><img src="/icons/LogoWhite.svg" className={styles.showcase__navbar__logo} /></a>
        </Link>

        <div className={styles.showcase__navlinks__container}>
          <a href="https://teachers.edvi.app/" target="_blank" rel="noreferrer" className={styles.showcase__navlinks}>Become a tutor</a>
          <Link href="/about">
            <a className={styles.showcase__navlinks}>About Us</a>
          </Link>
          <a href="https://live.edvi.app/" target="_blank" rel="noreferrer" className={styles.showcase__btn__black}>edvi Live</a>
        </div>
      </div>
    </div>
  )
}

export default Header
