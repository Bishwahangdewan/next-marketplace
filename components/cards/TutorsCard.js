import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/TutorsCard.module.css'
//import assets
import StarIcon from '@mui/icons-material/Star';
import VerifiedIcon from '../../public/icons/IconVerified.svg';

const TutorsCard = () => {
  return (
    <div className={styles.tutorsCard__container}>
      <div className={styles.tutorsCard__img__container}>
        <img className={styles.tutorsCard__img} src="/static-images/dummy-card-img.png" />
      </div>

      <div className={styles.tutorsCard__content__container}>
        <div className={styles.tutorsCard__header}>

          <div className={styles.tutorsCard__header__content}>
            <h3 className={styles.tutorsCard__header__text}>Kavya Singh
              <VerifiedIcon className={styles.verifiedIcon} />
            </h3>
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
