import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import styles from '../styles/Register.module.css'
//import components
import Header from '../components/sections/global/Header'
import RegisterForm from '../components/forms/RegisterForm'
//import useBreakpoints
import useBreakpoints from '../hooks/useBreakpoints'
//import frehchat
import FreshChat from 'react-freshchat'
//import react-components
import { useState, useEffect } from 'react'

const Register = ({url}) => {
  const { md } = useBreakpoints()
  const date = new Date();
  const timestamp = date.setDate(date.getDate() + 5)
  const newDate = new Date(timestamp)
  const day = newDate.getDate()
  const month = newDate.getMonth()
  const year = newDate.getFullYear()
  const [freshchatCompatible , setFreshchatCompatible] = useState()
  const router = useRouter()

  console.log()

  useEffect(() => {
    if (typeof window !== 'undefined') {
      console.log('You are on the browser,You are good to go')
      setFreshchatCompatible(true)
      } else {
      console.log('You are on the server,Cannot execute')
      setFreshchatCompatible(false)
     }
  })

  return (
    <div>
      {freshchatCompatible && router.asPath === '/register' && (
        <div style={{visibility:'hidden'}}>
            <FreshChat
              token="f8a7a186-ebd8-4e00-8f1e-650e54a3b1b8"
              host="https://wchat.in.freshchat.com"
              style={{visibility: router.asPath === '/register' ? 'hidden': 'visible'}}
            />
        </div>
      )}
      {/*---SHOWCASE---*/}
      <div className={styles.showcase__container}>
        <Header />

        {/*--RROUNDED-BG-IMAGE--*/}
        <div className={styles.showcase__bgImg}>
          <Image
            src="/static-images/HomePageShowcaseBg.png"
            width={500}
            height={500}
            alt="showcaseBg"
            loading="lazy"
          />
        </div>

        <div className={styles.showcase__content}>
          <h1 className={styles.showcase__header}>Apply to become a top edvi tutor</h1>
          <p className={styles.showcase__para}>Applications closing on {day}, {months[month]} {year}</p>
        </div>
      </div>

      <RegisterForm url={url} />
    </div>
  )
}

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

export default Register

export async function getServerSideProps() {
  const url = process.env.REACT_APP_BASE_URL
	return {
		props: {
			url,
		}
	}
}
