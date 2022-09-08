import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
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
//import breakpoints
import useBreakpoints from '../hooks/useBreakpoints'

export default function Teacher() {
  const { md } = useBreakpoints()

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
            alt="showcaseBg"
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
            {md ? (
              <p className={styles.showcase__para}>Home, park, beach, or wherever you want. We take care of everything else.</p>
            ):(
              <div className={styles.showcase__para__container}>
                <p className={styles.showcase__para}>Home, park, beach, or wherever you want.</p>
                <p className={styles.showcase__para}> We take care of everything else.</p>
              </div>
            )}

            <Link href="/register">
              <button className={styles.showcase__btn}>Register Now</button>
            </Link>
          </div>

          <div className={styles.right}>
            <div className={styles.img__container}>
              <Image
                src="/static-images/teachers/showcase.webp"
                layout="responsive"
                width={552}
                height={350}
                alt="teacher-showcase-img"
                priority={true}
              />
            </div>
          </div>
        </div>
      </div>

      {/*---WHY CONSIDER---*/}
      <WhyConsider />

      {/*---FEATURES---*/}
      <div className={styles.features__container}>
        <div className={styles.features__bg__img}>
          <Image
            src="/static-images/teachers/features-img.webp"
            width= {541}
            height= {706}
            alt="features-img"
          />
        </div>
        <div className={styles.features__inner}>
          {md ? (
            <h2 className={styles.features__header}>How to become an Online Tutor with edvi</h2>
          ):(
            <div className={styles.fetures__header__container}>
              <h2 className={styles.features__header}>How to become an</h2>
              <h2 className={styles.features__header}>Online Tutor with edvi</h2>
            </div>
          )}
          <div className={styles.features__content}>
            <DotLine className={styles.dot__line} />
            <DotLine className={styles.dot__line2} />
            {md ? (
              <div>
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
            ):(
              <div className={styles.features__mobile__container}>
                <TeacherFeatures
                  number="01"
                  header="Apply to become a tutor"
                  para3="Visit teachers.edvi.app and fill out the form"
                />
                <TeacherFeatures
                  number="02"
                  header="Wait for our team to call you back"
                  para3="Once we receive your application, our team"
                  para4="will get in touch with you and schedule a"
                  para5="personal screening with the academic"
                  para6="teams. We take up to 7 days to revert."
                />
                <TeacherFeatures
                  number="03"
                  header="Attend your personal screening"
                  para3="We host personal screenings to meet our"
                  para4="tutors and understand how they stand"
                  para5="out from the rest. (approx. 15 minutes long)"
                />
                <TeacherFeatures
                  number="04"
                  header="Attend your onboarding session"
                  para3="Once you clear the interview, we ask"
                  para4="you to attend an online onboarding session"
                  para5="where we tell you how to use edvi’s platform to "
                  para6="give live classes and we brief you on a few"
                  para7="other important details as well."
                />
                <TeacherFeatures
                  number="05"
                  header="Start teaching & earning"
                  para3="You are now an edvi tutor and can start"
                  para4="teaching with us."
                  boldPara
                />

                <p className={styles.welcome__text}>Welcome aboard &</p>
                <p className={styles.welcome__text}>happy teaching</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/*---CERTIFIRD TUTORS----*/}
      <Tutor />

      {/*--TEACHER-VIDEO---*/}
      <TeacherVideo />

      {/*---TEACHER FAQ ---*/}
      <TeacherFaq />

      {/*---FOOTER ---*/}
      <div className={styles.footer__container}>
        <Footer />
      </div>

      <div className={styles.mobile__register__btn__container}>
        <Link href="/register">
            <button className={styles.showcase__btn__mobile}>Register Now</button>
        </Link>
      </div>
    </div>
  )
}
