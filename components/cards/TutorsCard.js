import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/TutorsCard.module.css'
//import assets
import StarIcon from '@mui/icons-material/Star';

const TutorsCard = () => {
  return (
    <div className={styles.tutorsCard__container}>
      <div className={styles.tutorsCard__img__container}>
        <Image
          src="/static-images/dummy-card-img.png"
          alt="dummy"
          width={350}
          height={200}
        />
      </div>

      <div className={styles.tutorsCard__content__container}>
        <div className={styles.tutorsCard__header}>

          <div className={styles.tutorsCard__header__content}>
            <h3 className={styles.tutorsCard__header__text}>Kavya Singh</h3>
            <p className={styles.tutorsCard__header__para}>C.B.S.E</p>
          </div>

          <div className={styles.tutorsCard__badge__container}>
            <div className={styles.tutorsCard__badge}>
              <StarIcon className={styles.starIcon} />
              <p className={styles.tutorsCard__badge__para}>4.8</p>
            </div>
          </div>
        </div>

        <div className={styles.tutorsCard__para}>
          <p className={styles.tutorsCard__para__text}>Over 1 million students gave a review of 5 stars to their teachers!</p>
        </div>
      </div>
    </div>
  )
}

export default TutorsCard
