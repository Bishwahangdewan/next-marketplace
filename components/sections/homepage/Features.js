import Head from 'next/head'
import Image from 'next/image'
import styles from '../../../styles/Features.module.css'

const Features = ({icon, header, para, specialCase}) => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.icon__container}>{icon}</div>
      </div>

      <div className={styles.right}>
        <h3 className={styles.header}>{header}</h3>

        {specialCase? (
          <p className={styles.para}>
            All classes are conducted online on&nbsp;
            <a
              className={styles.link}
              href="https://live.edvi.app/"
              target="_blank"
              rel="noreferrer"
            > edvi live </a>
            &nbsp;our comprehensive digital classroom platform.
          </p>
        ):(
          <p className={styles.para}>{para}</p>
        )}
      </div>
    </div>
  )
}

export default Features
