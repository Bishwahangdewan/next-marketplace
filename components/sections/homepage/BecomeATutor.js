import Head from 'next/head'
import Image from 'next/image'
import styles from '../../../styles/BecomeATutor.module.css'

const BecomeATutor = () => {
  return (
    <div className={styles.container}>
      <div className={styles.img__container}>
        <Image
          src='/static-images/become-a-teacher.png'
          width={620}
          height={446}
          className={styles.image}
        />
      </div>

      <div className={styles.content__container}>
        <h2 className={styles.header}>Become an </h2>
        <h2 className={styles.header__blue}>edvi tutor</h2>
        <p className={styles.para}>Making money from online classes</p>
        <p className={styles.para}> is easy with edvi</p>
        <button className={styles.btn}>Apply Now</button>
      </div>
    </div>
  )
}

export default BecomeATutor
