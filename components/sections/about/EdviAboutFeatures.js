import Head from 'next/head'
import Image from 'next/image'
import styles from '../../../styles/EdviFeatures.module.css'
//import components
import Features from '../homepage/Features'
//import assets
import Feature1Icon from '../../../public/icons/features-icons/one.svg'
import Feature2Icon from '../../../public/icons/features-icons/four.svg'
import Feature3Icon from '../../../public/icons/features-icons/two.svg'
import Feature4Icon from '../../../public/icons/features-icons/three.svg'
import MobileFeature1Icon from '../../../public/icons/features-icons/mobile/one.svg'
import MobileFeature2Icon from '../../../public/icons/features-icons/mobile/two.svg'
import MobileFeature3Icon from '../../../public/icons/features-icons/mobile/three.svg'
import MobileFeature4Icon from '../../../public/icons/features-icons/mobile/four.svg'
//import breakpoints
import useBreakpoints from '../../../hooks/useBreakpoints'

const EdviAboutFeatures = () => {
  const { md } = useBreakpoints()

  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <h2 className={md ? styles.header__main : styles.header__main__responsive}>Problems solved by
            <span className={styles.text__blue}> edvi </span>
          </h2>

          <div className={styles.features__container}>
            <Features
              icon={md ? <Feature1Icon /> : <MobileFeature1Icon />}
              header="Rigorous screening of all Tutors "
              para="We select only the best. Less than 6% tutors are selected through screening process"
            />
            <Features
              icon={md ? <Feature3Icon /> : <MobileFeature2Icon />}
              header="Well crafted digital classroom experience"
              para=""
              specialCase
              specialAboutCase
            />
            <Features
              icon={md ? <Feature4Icon /> : <MobileFeature3Icon />}
              header="Top Tutors"
              para="Graduates from top colleges such as IITs, NITs and experienced teachers"
            />
            <Features
              icon={md ? <Feature2Icon /> : <MobileFeature4Icon />}
              header="Personalised 1 to 1 classes"
              para="Our well trained tutors take care of the learning ability of student"
            />
          </div>
        </div>
        <div className={styles.right}>
          <Image
            src="/static-images/features.png"
            width={370}
            height={520}
            alt="features-img"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  )
}

export default EdviAboutFeatures
