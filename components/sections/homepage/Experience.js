import Head from 'next/head'
import Image from 'next/image'
import styles from '../../../styles/Experience.module.css'
//import assets
import ExperienceIcon1 from '../../../public/icons/experience-icons/one.svg'
import ExperienceIcon2 from '../../../public/icons/experience-icons/two.svg'
import ExperienceIcon3 from '../../../public/icons/experience-icons/three.svg'
import ExperienceIcon4 from '../../../public/icons/experience-icons/four.svg'
import ExperienceIcon5 from '../../../public/icons/experience-icons/five.svg'
import ExperienceIcon6 from '../../../public/icons/experience-icons/six.svg'

const Experience = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.experience__text}>Worldclass
        <span className={styles.text__blue}> private tutoring </span>
      experience</h2>

      <div className={styles.flex__container}>
        {experienceData.map((data) => (
          <div key={data.header} className={styles.flex__item}>
            <ExperienceCard
              icon={data.icon}
              header={data.header}
              para={data.para}
              para2={data.para2}
            />
          </div>
        ))}
      </div>

      <div className={styles.flex__container}>
        {experienceData2.map((data) => (
          <div key={data.header} className={styles.flex__item}>
            <ExperienceCard
              icon={data.icon}
              header={data.header}
              para={data.para}
              para2={data.para2}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

const ExperienceCard = ({icon, header, para, para2}) => {
  return (
    <div className={styles.card__container}>
      <div className={styles.icon__container}>
        {icon}
      </div>
      <h3 className={styles.card__header}>{header}</h3>
      <p className={styles.card__para}>{para}</p>
      <p className={styles.card__para}>{para2}</p>
    </div>
  )
}

const experienceData = [
  {
    icon: <ExperienceIcon1 className={styles.icon} />,
    header: "Free Demo Classes",
    para: "Free trial classes to help you find",
    para2: "the best tutor",
  },
  {
    icon: <ExperienceIcon2 className={styles.icon} />,
    header: "Rescheduling",
    para: "Easy rescheduling of classes",
    para2: "without extra charges",
  },
  {
    icon: <ExperienceIcon3 className={styles.icon} />,
    header: "Regular Feedbacks",
    para: "Easy rescheduling of classes",
    para3: "without extra charges",
  },
]

const experienceData2 = [
  {
    icon: <ExperienceIcon4 className={styles.icon} />,
    header: "Quality control",
    para: "Live classroom audit, before-class/",
    para2: "after-class automated feedback",
  },
  {
    icon: <ExperienceIcon5 className={styles.icon} />,
    header: "Payment",
    para: "Pay only Monthly fees",
    para2: "digitally"
  },
  {
    icon: <ExperienceIcon6 className={styles.icon} />,
    header: "Doubt Resolution",
    para: "During class & post-class",
    para2: "doubt resolution",
  },
]

export default Experience
