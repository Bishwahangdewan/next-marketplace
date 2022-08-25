import Head from 'next/head'
import Image from 'next/image'
import styles from '../../../styles/Features.module.css'
//useBreakpoints
import useBreakpoints from '../../../hooks/useBreakpoints'

const Features = ({icon, header, para, specialCase, specialAboutCase}) => {
  const { md } = useBreakpoints()

  return (
    <div className={styles.container}>
      <div className={styles.left}>
          <div className={md ? styles.icon__container : styles.icon__container__mobile}>{icon}</div>
      </div>

      <div className={styles.right}>
        <h3 className={styles.header}>{header}</h3>

        {specialCase? (
          <p className={styles.para}>
            All classes are conducted online on&nbsp;
            <a
              className={specialAboutCase? styles.about__link : styles.link}
              href="https://live.edvi.app/"
              target="_blank"
              rel="noreferrer"
            > edvi Live- </a>
            &nbsp;our comprehensive digital classroom platform
          </p>
        ):(
          <p className={styles.para}>{para}</p>
        )}
      </div>
    </div>
  )
}

export default Features
