import Image from 'next/image'
import styles from '../../../styles/OurMission.module.css'
//import components
import OurMissionCard from '../../cards/OurMissionCard'

const OurMission = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <h3 className={styles.label}>OUR MISSION & IMPACT</h3>
        <div className={styles.label__underline} />

        <h2 className={styles.header}>Enable access to best </h2>
        <h2 className={styles.header}>quality online education to </h2>
        <h2 className={styles.header}>everyone, everywhere.</h2>
        <p className={styles.para}>Half a million minutes of live classes have been conducted on the platform in the last 3 months</p>
      </div>

      <div className={styles.right}>
        <div className={styles.top__right__container}>
          <div className={styles.top__cards__container}>
            <OurMissionCard
              header="2600+"
              label="Active Teachers"
              color="#0bbd80"
            />
            <OurMissionCard
              header="3100+"
              label="Active Students"
              color="#3081f7"
            />
          </div>
        </div>

        <div className={styles.bottom__left__container}>
          <div className={styles.bottom__cards__container}>
            <OurMissionCard
              header="1M +"
              label="Minutes of classes"
              color="#eb5758"
            />
            <OurMissionCard
              header="37% WoW"
              label="Growth"
              color="#ffaf3a"
            />
          </div>
        </div>

      </div>
    </div>
  )
}

export default OurMission
