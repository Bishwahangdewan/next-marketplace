import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/TestimonialCard.module.css'
import PlayIcon from '../../public/icons/IconVideoPlay.svg'
//import react-player
import ReactPlayer from 'react-player';
//import react components
import {useState} from 'react'
import VideoDialog from '../dialogs/VideoDialog'

const TestimonialCard = ({data}) => {
  const [openVideoDialog, setOpenVideoDialog] = useState(false)

  const closeVideoDialog = () => {
      setOpenVideoDialog(false)
  }

  return (
    <div className={styles.container}>
      <div className={styles.img__container}>
        <div className={styles.blog__img}>
          <Image
            src={data.imgLink}
            height={400}
            width={700}
          />
          <PlayIcon style={{
            position:'absolute',
            left:'45%',
            bottom:'-20px',
            cursor:'pointer',
          }}
          onClick={() => setOpenVideoDialog(true)}
           />
        </div>
      </div>

      <div className={styles.content__container}>
        <h3 className={styles.header}>{data.name}</h3>
        <p className={styles.para}>{data.city}</p>

        <hr className={styles.line}/>
        <p className={styles.para__small}>{data.infoTop}</p>
        <p className={styles.para__small}>{data.info}</p>
      </div>

      <VideoDialog
        open={openVideoDialog}
        handleClose={closeVideoDialog}
        data={data}
      />
    </div>
  )
}

export default TestimonialCard
