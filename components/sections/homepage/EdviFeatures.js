import Head from 'next/head'
import Image from 'next/image'
import styles from '../../../styles/EdviFeatures.module.css'
//import components
import Features from './Features'
//import assets
import Feature1Icon from '../../../public/icons/features-icons/one.svg'
import Feature2Icon from '../../../public/icons/features-icons/four.svg'
import Feature3Icon from '../../../public/icons/features-icons/two.svg'
import Feature4Icon from '../../../public/icons/features-icons/three.svg'

const EdviFeatures = () => {
  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <h2 className={styles.header__main}>What makes
            <span className={styles.text__blue}> edvi </span>
          so different?</h2>

          <div className={styles.features__container}>
            <Features
              icon={<Feature1Icon />}
              header="Rigorous screening of all Tutors "
              para="We select only the best. Less than 6% tutors are selected through screening process"
            />
            <Features
              icon={<Feature2Icon />}
              header="Well crafted digital classroom experience"
              para=""
              specialCase
            />
            <Features
              icon={<Feature3Icon />}
              header="Top Tutors"
              para="Graduates from top colleges such as IITs, NITs and experienced teachers"
            />
            <Features
              icon={<Feature4Icon />}
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
          />
        </div>
      </div>
    </div>
  )
}

export default EdviFeatures
