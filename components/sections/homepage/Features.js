import Head from 'next/head'
import Image from 'next/image'
import styles from '../../../styles/Features.module.css'

const Features = ({icon, header, para}) => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.icon__container}>{icon}</div>
      </div>

      <div className={styles.right}>
        <h3 className={styles.header}>{header}</h3>
        <p className={styles.para}>{para}</p>
      </div>
    </div>
  )
}

export default Features
