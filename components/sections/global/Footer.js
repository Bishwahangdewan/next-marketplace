import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../../../styles/Footer.module.css'
//import assets
import LogoWhite from '../../../public/icons/LogoWhite2.svg'
import FacebookIcon from '../../../public/icons/footer-icons/facebook-icon.svg';
import InstagramIcon from '../../../public/icons/footer-icons/instagram-icon.svg'
import YoutubeIcon from '../../../public/icons/footer-icons/youtube-icon.svg';
import LinkedInIcon from '../../../public/icons/footer-icons/linkedin-icon.svg';
import TwitterIcon from '../../../public/icons/footer-icons/twitter-icon.svg';
//IMPORT BREAKPOINTS
import useBreakpoints from '../../../hooks/useBreakpoints'

const Footer = ({noTopBorder}) => {
  const { md } = useBreakpoints()

  return (
    <div className={noTopBorder? styles.noTopBorder__container : styles.container}>
      <div className={styles.footer__top}>
        <div className={styles.footer__top__left}>
          <div className={styles.logo__container}>
            <LogoWhite className={styles.logo__blue}/>
          </div>
          <p className={styles.para}>The largest private tutoring company</p>
        </div>

        {/*--- FOR SCREEN ABOVE MEDIUM SIZE ELSE SMALL SIZE----*/}
        {md ? (
          <div className={styles.footer__top__right}>
            <div className={styles.column}>
              <div>
                <Link href="/about">
                  <a className={styles.footer__link__top}>About Us</a>
                </Link>
              </div>
              {/*<div>
                <a href="#" className={styles.footer__link}>Why Us?</a>
                </div>*/}
              <div>
                <Link href="/teacher">
                  <a className={styles.footer__link}>Register as Tutors</a>
                </Link>
              </div>
            </div>

            <div className={styles.column}>
              <div><a href="https://live.edvi.app/" target="_blank" rel="noreferrer" className={styles.footer__link__top}>edvi live</a></div>
              {/*<div><a href="#" className={styles.footer__link}>Request a callback</a></div>
              <div><a href="#Showcase" className={styles.footer__link}>Contact Us</a></div> */}
            </div>

            <div className={styles.column}>
              <div>
                <Link href="/privacy-policy">
                  <a className={styles.footer__link__top}>Privacy Policy</a>
                </Link>
              </div>
              <div>
                <Link href="/terms-and-conditions">
                  <a className={styles.footer__link}>Terms and Conditions</a>
                </Link>
              </div>
            </div>
          </div>
        ):(
          <div className={styles.mobile__links__container}>
            {/*--- FOR MOBILE DEVICE----*/}
            <div className={styles.column}>
              <div>
                <Link href="/about">
                  <a className={styles.footer__link}>• About Us</a>
                </Link>
              </div>
              <div>
                <a href="https://live.edvi.app/" target="_blank" rel="noreferrer" className={styles.footer__link}>• edvi Live?</a>
              </div>
              <div>
                <Link href="/teacher">
                  <a className={styles.footer__link}>• Register as Tutors</a>
                </Link>
              </div>
            </div>

            <div className={styles.column}>
              <div>
                <Link href="/privacy-policy">
                  <a className={styles.footer__link}>• Privacy Policy</a>
                </Link>
              </div>
              <div>
                <Link href="/terms-and-conditions">
                  <a href="#" className={styles.footer__link}>• Terms & Conditions</a>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className={styles.footer__bottom}>
        <div className={styles.footer__bottom__inner}>
          <div className={styles.footer__bottom__left}>
            <p className={styles.footer__bottom__para}>
             {md ? 'Copyright © 2022 Yellow Lambda Technologies Pvt Ltd. All Rights Reserved' : 'Copyright © 2022. edvi. All Rights Reserved'}
            </p>
          </div>

          <div className={styles.footer__bottom__right}>
              <a href="https://twitter.com/edviapp" target="_blank" rel="noreferrer" className={styles.footer__bottom__link}><TwitterIcon /></a>
              <a href="https://www.instagram.com/edvi.app/" target="_blank" rel="noreferrer" className={styles.footer__bottom__link}><InstagramIcon /></a>
              <a href="https://www.facebook.com/edviapp" target="_blank" rel="noreferrer" className={styles.footer__bottom__link}><FacebookIcon /></a>
              <a href="https://www.linkedin.com/company/edviapp" target="_blank" rel="noreferrer" className={styles.footer__bottom__link}><LinkedInIcon /></a>
              <a href="https://www.youtube.com/channel/UCztEK6nvVM2bWXm7t4tH4NQ" rel="noreferrer" target="_blank"  className={styles.footer__bottom__link}><YoutubeIcon /></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;
