import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/TutorsCard.module.css'
//import assets
import StarIcon from '@mui/icons-material/Star';
import VerifiedIcon from '../../public/icons/IconVerified.svg';
import PlayIcon from '../../public/icons/IconPlay.svg'
//import react-player
import ReactPlayer from 'react-player';

const TutorsCard = ({name, star, sub, grade, para, videoLink}) => {
  return (
    <div className={styles.tutorsCard__container}>
      <div className={styles.tutorsCard__img__container}>
        <ReactPlayer
            width="100%"
            height="170px"
            url={videoLink}
            light={true}
            playing={true}
            playIcon={<PlayIcon />}
        />
      </div>

      <div className={styles.tutorsCard__content__container}>
        <div className={styles.tutorsCard__header}>

          <div className={styles.tutorsCard__header__content}>
            <h3 className={styles.tutorsCard__header__text}>{name}
              <VerifiedIcon className={styles.verifiedIcon} />
            </h3>
            <p className={styles.tutorsCard__header__para}>{sub}, Grade {grade}</p>
          </div>

          <div className={styles.tutorsCard__badge__container}>
            <div className={styles.tutorsCard__badge}>
              <StarIcon className={styles.starIcon} />
              <p className={styles.tutorsCard__badge__para}>{star}</p>
            </div>
          </div>
        </div>

        <div className={styles.tutorsCard__para}>
          <p className={styles.tutorsCard__para__text}>{para}</p>
        </div>
      </div>
    </div>
  )
}

export default TutorsCard
