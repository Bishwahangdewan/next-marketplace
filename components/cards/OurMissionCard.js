import Image from 'next/image'
import styles from '../../styles/OurMissionCard.module.css'

const OurMissionCard = ({header, label, color}) => {
  return (
    <div className={styles.container}>
      <h2
        style={{
          color: color,
        }}
        className={styles.header}
      >
        {header}
      </h2>
      <p className={styles.para}>{label}</p>
    </div>
  )
}

export default OurMissionCard
