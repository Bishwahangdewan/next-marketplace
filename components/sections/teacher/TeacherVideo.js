import styles from '../../../styles/TeacherVideo.module.css'
//import react-player
import ReactPlayer from 'react-player';
//import assets
import PlayIcon from '../../../public/icons/IconPlay.svg'
import Dummy from '../../../public/static-images/dummy-card-img.png'
import BlueBg from '../../../public/static-images/teachers/blue-bg.png'

const TeacherVideo = () => {
  return (
    <div>
      <div className={styles.container} style={{
        backgroundImage: `url(${BlueBg.src})`,
        backgroundSize:'cover',
        backgroundPosition: 'bottom center',
        width: '100%',
      }}>
        <div className={styles.inner}>
          <h2 className={styles.header}>Teach in the most Efficient Way</h2>
          <p className={styles.para}>Become an Online Tutor with edvi</p>
        </div>
      </div>
      <div className={styles.video__container}>
        <ReactPlayer
          width="959px"
          height="510px"
          url="https://youtu.be/v1OV_P96SCE"
          light={true}
          playing={true}
          playIcon={<PlayIcon />}
        />
      </div>
    </div>
  )
}

export default TeacherVideo
