import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../../../styles/Header.module.css'
//import assets
import BackImg from '../../../public/static-images/HomePageShowcaseBg.png'
import HamburgerMenu from '../../../public/icons/header-icons/hamburger.svg'
import WhatsappBg from '../../../public/icons/header-icons/WhatsappBg.svg'
import Whatsapp from '../../../public/icons/header-icons/whatsapp.svg'
//import breakpoints
import useBreakpoints from '../../../hooks/useBreakpoints'

const Header = ({borderBottom}) => {
  const { md } = useBreakpoints()

  return (
    <div className={styles.container} style={{
        borderBottom: borderBottom? '1px solid #5471AB':'',
    }}>
      <div className={styles.showcase__navbar}>
        <Link href="/">
          <a><img src="/icons/LogoWhite.svg" className={styles.showcase__navbar__logo} /></a>
        </Link>

        {/*--- FOR SCREEN ABOVE MEDIUM SIZE ELSE SMALL SIZE----*/}
        {md ? (
          <div className={styles.showcase__navlinks__container}>
            <Link href="/teacher">
              <a className={styles.showcase__navlinks}>Become a tutor</a>
            </Link>
            <Link href="/about">
              <a className={styles.showcase__navlinks}>About Us</a>
            </Link>
            <a href="https://live.edvi.app/" target="_blank" rel="noreferrer" className={styles.showcase__btn__black}>edvi Live</a>
          </div>
        ):(
          <div className={styles.showcase__navlinks__container}>
            <div>
              <div className={styles.whatsapp__bg}>
                <Whatsapp className={styles.whatsapp}/>
              </div>
            </div>
            <HamburgerMenu className={styles.hamburgerMenu} />
          </div>
        )}
      </div>
    </div>
  )
}

export default Header
