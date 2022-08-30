import styles from '../../../styles/MenuContent.module.css'
import Link from 'next/link'
//import assets
import CircleIcon from '@mui/icons-material/Circle';
import Twitter from '../../../public/icons/header-menu-icons/twitter.svg'
import Facebook from '../../../public/icons/header-menu-icons/facebook.svg'
import Instagram from '../../../public/icons/header-menu-icons/instagram.svg'
import Linkedin from '../../../public/icons/header-menu-icons/linkedin.svg'
import Youtube from '../../../public/icons/header-menu-icons/youtube.svg'

const MenuContent = () => {
    return (
        <div className={styles.menu__content__container}>
            <div className={styles.links__container}>
                <CircleIcon className={styles.dot} />
                <Link href="/">
                    <a className={styles.header__mobile__links}>Home</a>
                </Link>
            </div>

            <div className={styles.links__container}>
                <CircleIcon className={styles.dot} />
                <Link href="/teacher">
                    <a className={styles.header__mobile__links}>Become a tutor</a>
                </Link>
            </div>

            <div className={styles.links__container}>
                <CircleIcon className={styles.dot} />
                    <a href="https://live.edvi.app/" target="_blank" rel="noreferrer" className={styles.header__mobile__links}>edvi Live</a>
            </div>

            <div className={styles.links__container}>
                <CircleIcon className={styles.dot} />
                <Link href="/about">
                    <a className={styles.header__mobile__links}>About Us</a>
                </Link>
            </div>

            {/* <div className={styles.links__container}>
                <CircleIcon className={styles.dot} />
                <Link href="/">
                    <a className={styles.header__mobile__links}>Blogs</a>
                </Link>
            </div> */}

            <div className={styles.bottom__container}>
                <hr className={styles.white__line} />
                <div className={styles.social__links__container}>
                    <p className={styles.social__links__para}>Follow us</p>

                    <div className={styles.icons__container}>
                        <div>
                            <a href="https://twitter.com/edviapp" target="_blank" rel="noreferrer" className={styles.footer__bottom__link}>
                                <Twitter className={styles.icons} />
                            </a>
                            <a href="https://www.instagram.com/edvi.app/" target="_blank" rel="noreferrer" className={styles.footer__bottom__link}>
                                <Instagram className={styles.icons}/>
                            </a>
                            <a href="https://www.facebook.com/edviapp" target="_blank" rel="noreferrer" className={styles.footer__bottom__link}>
                                <Facebook className={styles.icons}/>
                            </a>
                            <a href="https://www.linkedin.com/company/edviapp" target="_blank" rel="noreferrer" className={styles.footer__bottom__link}>
                                <Linkedin className={styles.icons}/>
                            </a>
                            <a href="https://www.youtube.com/channel/UCztEK6nvVM2bWXm7t4tH4NQ" rel="noreferrer" target="_blank"  className={styles.footer__bottom__link}>
                                <Youtube className={styles.icons}/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.need__help}>
                <p className={styles.need__help__para}>Need Help from out expert?</p>
                <a href="#" className={styles.menu__btn}>Request Callback</a>
            </div>
        </div>
    )
}

export default MenuContent