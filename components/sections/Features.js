import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Features.module.css'
import GreenTick from '../../assets/icons/IconGreenCorrect.svg'

const Features = ({text}) => {
  return (
    <div className={styles.features__container}>
      <GreenTick />
      <p className={styles.features__text}>{text}</p>
    </div>
  )
}

export default Features
