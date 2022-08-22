import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Teacher.module.css'
//import componentsm
import Header from '../components/sections/global/Header'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Edvi</title>
        <meta name="description" content="edvi-Best Teachers now a click away!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/*--ABOUT SHOWCASE --*/}
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
          <h1 className={styles.showcase__header}>Teach from the</h1>
          <h1 className={styles.showcase__header__yellow}>comfort of your home</h1>
          <p className={styles.showcase__para}>Home, park, beach, or wherever you want. We take care of everything else.</p>
          <button className={styles.showcase__btn}>Register Now</button>
        </div>
      </div>
    </div>
  )
}
