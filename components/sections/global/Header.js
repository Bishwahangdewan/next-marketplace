import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../../../styles/Header.module.css'
//import assets
import BackImg from '../../../public/static-images/HomePageShowcaseBg.png'
import HamburgerMenu from '../../../public/icons/header-icons/hamburger.svg'
import IconCross from '../../../public/icons/IconCross.svg'
import Whatsapp from '../../../public/icons/header-icons/whatsapp.svg'
//import breakpoints
import useBreakpoints from '../../../hooks/useBreakpoints'
//import react hooks
import { useEffect, useState } from 'react'
//import components
import MenuContentDialog from '../../dialogs/MenuContentDialog'

const Header = ({borderBottom, bgBlue}) => {
  const { md } = useBreakpoints()
  const [sticky, setSticky] = useState(false)
  const [openMenu, setOpenMenu] = useState(false)

  useEffect(() => {
    window.onscroll = () => {
      if (window.pageYOffset > 0) {
        setSticky(true)
      } else {
        setSticky(false)
      }
    }
  }, [])

  useEffect(()=>{

  },[openMenu])

  const handleCloseDialog = () =>{
      setOpenMenu(false)
  }

  return (
    <div className={styles.container} style={{
        borderBottom: borderBottom? '1px solid #5471AB':'',
        backgroundColor: bgBlue ? '#3458a1' : sticky ? '#3458a1' : 'transparent',
        position: sticky ? 'fixed' : 'relative',
        width: '100%',
        zIndex: 11,
    }}>
      <div className={styles.showcase__navbar}>
        <Link href="/">
          <a><img src="/icons/LogoWhite.svg" className={styles.showcase__navbar__logo} alt="logo" /></a>
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
            <a
              href="https://live.edvi.app/"
              target="_blank"
              rel="noreferrer"
              className={styles.showcase__btn__black}>
                edvi Live
            </a>
          </div>
        ):(
          <div className={styles.showcase__navlinks__container}>
            <div>
              <div className={styles.whatsapp__bg}>
                <a href="https://wa.me/918800504534" target="_blank" rel="noreferrer" >
                 <Whatsapp className={styles.whatsapp}/>
                </a>
              </div>
            </div>
              <HamburgerMenu
                onClick={() => setOpenMenu(true)}
                className={styles.hamburgerMenu}
              />
          </div>
        )}
      </div>

      <MenuContentDialog
        open={openMenu}
        handleClose={handleCloseDialog}
      />
    </div>
  )
}

export default Header
