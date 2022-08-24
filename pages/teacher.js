import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Teacher.module.css'
//import componentsm
import Header from '../components/sections/global/Header'
import WhyConsider from '../components/sections/teacher/WhyConsider'
import TeacherFeatures from '../components/sections/teacher/TeacherFeatures'
import Tutor from '../components/sections/teacher/Tutor'
import TeacherVideo from '../components/sections/teacher/TeacherVideo'
import TeacherFaq from '../components/sections/teacher/TeacherFaq'
import Footer from '../components/sections/global/Footer'
//import assets
import ThreeDropIcon from '../public/icons/ClickAway.svg'
import FeatureImg from '../public/static-images/teachers/features-img.png'
import DotLine from '../public/static-images/teachers/dotted-lines.svg'

export default function Teacher() {
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
          <div className={styles.left}>
            <h1 className={styles.showcase__header}>Teach from the</h1>
            <h1 className={styles.showcase__header__yellow}>comfort of your home
              <span className={styles.click__away__img__container}>
                <ThreeDropIcon className={styles.click__away__icon}/>
              </span>
            </h1>
            <p className={styles.showcase__para}>Home, park, beach, or wherever you want. We take care of everything else.</p>
            <button className={styles.showcase__btn}>Register Now</button>
          </div>

          <div className={styles.right}>
            <div className={styles.img__container}>
              <Image
                src="/static-images/teachers/showcase.png"
                layout="responsive"
                width={552}
                height={350}
              />
            </div>
          </div>
        </div>
      </div>

      {/*---WHY CONSIDER---*/}
      <WhyConsider />

      {/*---FEATURES---*/}
      <div className={styles.features__container}>
        <img src={FeatureImg.src} className={styles.features__bg__img} />
        <div className={styles.features__inner}>
          <h2 className={styles.features__header}>How to become an Online Tutor with edvi</h2>
          <div className={styles.features__content}>
            <DotLine className={styles.dot__line} />
            <DotLine className={styles.dot__line2} />
            <TeacherFeatures
              number="01"
              header="Apply to become a tutor"
              para="Visit teachers.edvi.app and fill out the form"
            />
            <TeacherFeatures
              number="02"
              header="Wait for our team to call you back"
              para="Once we receive your application, our team will get in touch with you and schedule"
              para2="a personal screening with the academic teams. We take up to 7 days to revert."
            />
            <TeacherFeatures
              number="03"
              header="Attend your personal screening"
              para="We host personal screenings to meet our tutors and understand how they stand out"
              para2="from the rest. (approx. 15 minutes long)"
            />
            <TeacherFeatures
              number="04"
              header="Attend your onboarding session"
              para="Once you clear the interview, we ask you to attend an online onboarding session"
              para2="where we tell you how to use edvi’s platform to give live classes and we brief you"
              para3="on a few other important details as well."
            />
            <TeacherFeatures
              number="05"
              header="Start teaching & earning"
              para="You are now an edvi tutor and can start teaching with us."
              para2="Welcome aboard & happy teaching"
              boldPara
            />
          </div>
        </div>
      </div>

      {/*---TUTOR SECTION---*/}
      <Tutor />

      {/*--TEACHER-VIDEO---*/}
      <TeacherVideo />

      {/*---TEACHER FAQ ---*/}
      <TeacherFaq />

      {/*---FOOTER ---*/}
      <Footer />
    </div>
  )
}
