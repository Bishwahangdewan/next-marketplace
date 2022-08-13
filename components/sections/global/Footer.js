import Head from 'next/head'
import Image from 'next/image'
import styles from '../../../styles/Footer.module.css'
//import assets
import LogoBlue from '../../../public/icons/logo.svg'
import FacebookIcon from '../../../public/icons/footer-icons/facebook-icon.svg';
import InstagramIcon from '../../../public/icons/footer-icons/instagram-icon.svg'
import YoutubeIcon from '../../../public/icons/footer-icons/youtube-icon.svg';
import LinkedInIcon from '../../../public/icons/footer-icons/linkedin-icon.svg';
import TwitterIcon from '../../../public/icons/footer-icons/twitter-icon.svg';

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.footer__top}>
        <div className={styles.footer__top__left}>
          <Image
            src="/static-images/edvi-logo-blue.png"
            height={43}
            width={105}
          />
          <p className={styles.para}>The largest private tutoring company</p>
        </div>
        <div className={styles.footer__top__right}>
          <div className={styles.column}>
            <a href="#" className={styles.footer__link__top}>About Us</a>
            <a href="#" className={styles.footer__link}>Why Us?</a>
            <a href="#" className={styles.footer__link}>Register as Tutors</a>
          </div>
          <div className={styles.column}>
            <a href="#" className={styles.footer__link__top}>edvi live</a>
            <a href="#" className={styles.footer__link}>Request a callback</a>
            <a href="#" className={styles.footer__link}>Contact Us</a>
          </div>
          <div className={styles.column}>
            <a href="#" className={styles.footer__link__top}>Privacy Policy</a>
            <a href="#" className={styles.footer__link}>Terms and Conditions</a>
          </div>
        </div>
      </div>

      <div className={styles.footer__bottom}>
        <div className={styles.footer__bottom__inner}>
          <div className={styles.footer__bottom__left}>
            <p className={styles.footer__bottom__para}>Copyright © 2022 Yellow Lambda Technologies Pvt Ltd. All Rights Reserved</p>
          </div>

          <div className={styles.footer__bottom__right}>
              <a href="#" className={styles.footer__bottom__link}><TwitterIcon /></a>
              <a href="#" className={styles.footer__bottom__link}><InstagramIcon /></a>
              <a href="#" className={styles.footer__bottom__link}><FacebookIcon /></a>
              <a href="#" className={styles.footer__bottom__link}><LinkedInIcon /></a>
              <a href="#" className={styles.footer__bottom__link}><YoutubeIcon /></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;
