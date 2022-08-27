import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Register.module.css'
//import components
import Header from '../components/sections/global/Header'
import RegisterForm from '../components/forms/RegisterForm'
//import useBreakpoints
import useBreakpoints from '../hooks/useBreakpoints'

const Register = () => {
  const { md } = useBreakpoints()
  const date = new Date();
  const timestamp = date.setDate(date.getDate() + 5)
  const newDate = new Date(timestamp)
  const day = newDate.getDate()
  const month = newDate.getMonth()
  const year = newDate.getFullYear()

  return (
    <div>
      {/*---SHOWCASE---*/}
      <div className={styles.showcase__container}>
        <Header />

        {/*--RROUNDED-BG-IMAGE--*/}
        <div className={styles.showcase__bgImg}>
          <Image
            src="/static-images/HomePageShowcaseBg.png"
            width={500}
            height={500}
          />
        </div>

        <div className={styles.showcase__content}>
          <h1 className={styles.showcase__header}>Apply to become a top edvi tutor</h1>
          <p className={styles.showcase__para}>Applications closing on {day}, {months[month]} {year}</p>
        </div>
      </div>

      <RegisterForm />
    </div>
  )
}

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

export default Register
