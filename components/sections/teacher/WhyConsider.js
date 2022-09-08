import Head from 'next/head'
import Image from 'next/image'
import styles from '../../../styles/WhyConsider.module.css'
//import breakpoints
import useBreakpoints from '../../../hooks/useBreakpoints'

export default function WhyConsider() {
  const { md } = useBreakpoints()
  return (
    <div className={styles.container}>
      <div className={styles.header__container}>
        {md ? (
          <div>
            <h2 className={styles.header__main}>Why you should consider being an</h2>
            <h2 className={styles.header__main}>Online Tutor with
              <span className={styles.blue__text}> edvi</span>
            </h2>
          </div>
        ):(
          <div>
            <h2 className={styles.header__main}>Why you should consider</h2>
            <h2 className={styles.header__main}>being an Online Tutor</h2>
            <h2 className={styles.header__main}>with
              <span className={styles.blue__text}> edvi</span>
            </h2>
          </div>
        )}
        <hr className={styles.blue__line} />
      </div>

      <div className={styles.content__container}>
        <div className={styles.content}>
          {md ? (
            <div className={styles.content__header__container}>
              <h2 className={styles.content__header}>Marketing is best left to Marketers</h2>
              <h2 className={styles.content__header}>and Teaching to Teachers</h2>
            </div>
          ):(
            <div className={styles.content__header__container}>
              <h2 className={styles.content__header}>Marketing is best left to</h2>
              <h2 className={styles.content__header}>Marketers and Teaching to</h2>
              <h2 className={styles.content__header}>Teachers</h2>
            </div>
          )}

          {md ? (
            <div className={styles.content__para__container}>
              <p className={styles.content__para}>You are skilled at teaching, and we are skilled at finding new students.</p>
              <p className={styles.content__para}>We’ll go through the student-selection process for you so that you</p>
              <p className={styles.content__para}>focus on teaching</p>
            </div>
          ):(
            <div className={styles.content__para__container}>
              <p className={styles.content__para}>You are skilled at teaching, and we are skilled</p>
              <p className={styles.content__para}>at finding new students. We’ll go through the</p>
              <p className={styles.content__para}>student-selection process for you so that you</p>
              <p className={styles.content__para}>focus on teaching</p>
            </div>
          )}
        </div>

        <div className={styles.image}>
          <div className={styles.image__container}>
            <Image
              src="/static-images/teachers/why-consider-img-1.png"
              layout="responsive"
              width={600}
              height={350}
              alt="why-consider-1"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      <div className={styles.content__container2}>
        <div className={styles.image2}>
          <div className={styles.image__container}>
            <Image
              src="/static-images/teachers/why-consider-img-2.webp"
              layout="responsive"
              width={600}
              height={350}
              alt="why-consider-2"
              loading="lazy"
            />
          </div>
        </div>

        <div className={styles.content2}>
          <div className={styles.content__header__container}>
            <h2 className={styles.content__header}>edvi is your Partner in Success</h2>
          </div>

          {md ? (
            <div className={styles.content__para__container}>
              <p className={styles.content__para}>You can rely on us for CONNECTING YOU WITH new students,</p>
              <p className={styles.content__para}>maximise your earnings, and handling all administrative matters. edvi</p>
              <p className={styles.content__para}>provides you with everything you need to teach online.</p>
            </div>
          ):(
            <div className={styles.content__para__container}>
              <p className={styles.content__para}>You can rely on us for CONNECTING YOU WITH</p>
              <p className={styles.content__para}>new students, maximise your earnings, and</p>
              <p className={styles.content__para}>handling all administrative matters. edvi</p>
              <p className={styles.content__para}>provides you with everything you need to</p>
              <p className={styles.content__para}>teach online.</p>
            </div>
          )}
        </div>
      </div>
    </div>


  )
}
