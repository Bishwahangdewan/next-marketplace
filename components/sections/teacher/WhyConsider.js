import Head from 'next/head'
import Image from 'next/image'
import styles from '../../../styles/WhyConsider.module.css'

export default function WhyConsider() {
  return (
    <div className={styles.container}>
      <div className={styles.header__container}>
        <h2 className={styles.header__main}>Why you should consider being an</h2>
        <h2 className={styles.header__main}>Online Tutor with
          <span className={styles.blue__text}> edvi</span>
        </h2>
        <hr className={styles.blue__line} />
      </div>

      <div className={styles.content__container}>
        <div className={styles.content}>
          <div className={styles.content__header__container}>
            <h2 className={styles.content__header}>Marketing is best left to Marketers</h2>
            <h2 className={styles.content__header}>and Teaching to Teachers</h2>
          </div>

          <div className={styles.content__para__container}>
            <p className={styles.content__para}>You are skilled at teaching, and we are skilled at finding new students.</p>
            <p className={styles.content__para}>We’ll go through the student-selection process for you so that you</p>
            <p className={styles.content__para}>focus on teaching</p>
          </div>
        </div>

        <div className={styles.image}>
          <div className={styles.image__container}>
            <Image
              src="/static-images/teachers/why-consider-img-1.png"
              layout="responsive"
              width={600}
              height={350}
            />
          </div>
        </div>
      </div>

      <div className={styles.content__container2}>
        <div className={styles.image2}>
          <div className={styles.image__container}>
            <Image
              src="/static-images/teachers/why-consider-img-2.png"
              layout="responsive"
              width={600}
              height={350}
            />
          </div>
        </div>

        <div className={styles.content2}>
          <div className={styles.content__header__container}>
            <h2 className={styles.content__header}>edvi is your Partner in Success</h2>
          </div>

          <div className={styles.content__para__container}>
            <p className={styles.content__para}>You can rely on us for CONNECTING YOU WITH new students,</p>
            <p className={styles.content__para}>maximise your earnings, and handling all administrative matters. edvi</p>
            <p className={styles.content__para}>provides you with everything you need to teach online.</p>
          </div>
        </div>
      </div>
    </div>


  )
}
