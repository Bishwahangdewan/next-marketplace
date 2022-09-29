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
    <footer className={noTopBorder? styles.noTopBorder__container : styles.container}>
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
            <div className={styles.column__sm}>
              <div>
                <p className={styles.footer__link__header}>Quick Links</p>
              </div>

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
                  <a className={styles.footer__link}>Become a Tutor</a>
                </Link>
              </div>

                <div>
                  <a
                    href="https://live.edvi.app/"
                    target="_blank"
                    rel="noreferrer"
                    className={styles.footer__link}>
                      edvi live
                  </a>
                </div>
            </div>

            <div className={styles.column__sm}>
              <div>
                <p className={styles.footer__link__header}>Policies</p>
              </div>
              <div>
                <Link href="/policies">
                  <a className={styles.footer__link__top}>Privacy Policy</a>
                </Link>
              </div>
              <div>
                <Link href="/terms-and-conditions">
                  <a className={styles.footer__link}>Terms and Conditions</a>
                </Link>
              </div>
            </div>

            <div className={styles.column__lg}>
              <div>
                <p className={styles.footer__link__header}>Address</p>
              </div>
              <div>
                  <p className={styles.footer__address}>ABL Workspaces</p>
                  <p className={styles.footer__address}>M 130-131, Second Floor, Connaught Place, </p>
                  <p className={styles.footer__address}>New Delhi, Delhi 110001</p>
              </div>
            </div>
          </div>
        ):(
          <div>
            <div className={styles.mobile__links__container}>
              {/*--- FOR MOBILE DEVICE----*/}
              <div className={styles.column}>
                <div>
                  <p style={{margin:0}} className={styles.footer__link__header}>Quick Links</p>
                </div>
                <div>
                  <Link href="/about">
                    <a className={styles.footer__link}>About Us</a>
                  </Link>
                </div>
                <div>
                  <a
                    href="https://live.edvi.app/"
                    target="_blank"
                    rel="noreferrer"
                    className={styles.footer__link}
                  >
                    edvi Live
                  </a>
                </div>
                <div>
                  <Link href="/teacher">
                    <a className={styles.footer__link}>Become a Tutor</a>
                  </Link>
                </div>
              </div>

              <div className={styles.column}>
                <div>
                  <p style={{margin:0}} className={styles.footer__link__header}>Policies</p>
                </div>
                <div>
                  <Link href="/policies">
                    <a className={styles.footer__link}>Privacy Policy</a>
                  </Link>
                </div>
                <div>
                  <Link href="/terms-and-conditions">
                    <a href="#" className={styles.footer__link}>Terms & Conditions</a>
                  </Link>
                </div>
              </div>
            </div>

            <div className={styles.mobile__links__container}>
              {/*--- FOR MOBILE DEVICE----*/}
              <div className={styles.column__full}>
                <div style={{marginTop:'15px'}}>
                  <p style={{margin:0}} className={styles.footer__link__header}>Address</p>
                </div>
                <div style={{marginTop:'20px'}}>
                  <p className={styles.footer__address}>ABL Workspaces</p>
                  <p className={styles.footer__address}>M 130-131, Second Floor, Connaught Place, </p>
                  <p className={styles.footer__address}>New Delhi, Delhi 110001</p>
                </div>
              </div>
            </div>
          </div>
          )}
        </div>

      <div className={styles.footer__bottom}>
        <div className={styles.footer__bottom__inner}>
          <div className={styles.footer__bottom__left}>
            <p className={styles.footer__bottom__para}>
             Copyright © 2022 Yellow Lambda Technologies Pvt Ltd. All Rights Reserved
            </p>
          </div>

          <div className={styles.footer__bottom__right}>
              <a
                href="https://www.instagram.com/edvi.app/"
                target="_blank"
                rel="noreferrer"
                className={styles.footer__bottom__link}>
                  <InstagramIcon />
              </a>
              <a
                href="https://www.facebook.com/edviapp"
                target="_blank"
                rel="noreferrer"
                className={styles.footer__bottom__link}>
                  <FacebookIcon />
              </a>
              <a
                href="https://www.linkedin.com/company/edviapp"
                target="_blank"
                rel="noreferrer"
                className={styles.footer__bottom__link}>
                  <LinkedInIcon />
              </a>
              <a
                href="https://twitter.com/edviapp"
                target="_blank"
                rel="noreferrer"
                className={styles.footer__bottom__link}>
                  <TwitterIcon />
              </a>
              <a
                href="https://www.youtube.com/channel/UCztEK6nvVM2bWXm7t4tH4NQ"
                rel="noreferrer"
                target="_blank"
                className={styles.footer__bottom__link}>
                  <YoutubeIcon />
              </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
