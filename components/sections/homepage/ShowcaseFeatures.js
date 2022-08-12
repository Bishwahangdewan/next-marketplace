import Head from 'next/head'
import Image from 'next/image'
import styles from '../../../styles/ShowcaseFeatures.module.css'
import GreenTick from '../../../assets/icons/IconGreenCorrect.svg'

const ShowcaseFeatures = ({text}) => {
  return (
    <div className={styles.features__container}>
      <GreenTick />
      <p className={styles.features__text}>{text}</p>
    </div>
  )
}

export default ShowcaseFeatures
