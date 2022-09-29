import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/TutorsCard.module.css'
//import assets
import StarIcon from '@mui/icons-material/Star';
import VerifiedIcon from '../../public/icons/IconVerified.svg';
import PlayIcon from '../../public/icons/IconPlay.svg'
import TutorPlayIcon from '../../public/icons/IconVideoPlay.svg'
import VideoDialog from '../dialogs/VideoDialog'
//import react-player
import ReactPlayer from 'react-player';
import {useState} from 'react';

const TutorsCard = ({name, star, sub, grade, para, videoLink, homepage_tutorsCard, img}) => {
  const [openVideoDialog, setOpenVideoDialog] = useState(false)

  const closeVideoDialog = () => {
      setOpenVideoDialog(false)
  }

  return (
    <div className={styles.tutorsCard__container}>
      <div className={styles.tutorsCard__img__container}>
        {homepage_tutorsCard ? (
            <div style={{textAlign:'center'}} className={styles.blog__img}>
              <Image
                src={img.src}
                height={420}
                width={700}
              />
              <TutorPlayIcon style={{
                position:'relative',
                marginTop:'-40px',
                cursor:'pointer',
                zIndex:'1000',
              }}
              onClick={() => setOpenVideoDialog(true)}
               />
          </div>
        ):(
          <ReactPlayer
              width="100%"
              height="170px"
              url={videoLink}
              light={true}
              playing={true}
              playIcon={<PlayIcon />}
          />
        )}
      </div>

      <div className={styles.tutorsCard__content__container}>
        <div className={styles.tutorsCard__header}>

          <div className={styles.tutorsCard__header__content}>
            <h3 className={styles.tutorsCard__header__text}>{name}
              <VerifiedIcon className={styles.verifiedIcon} />
            </h3>
            <p className={styles.tutorsCard__header__para}>{sub} {grade? `, Grade ${grade}`:''}</p>
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

      <VideoDialog
        open={openVideoDialog}
        handleClose={closeVideoDialog}
        videoLink = {videoLink}
      />
    </div>
  )
}

export default TutorsCard
