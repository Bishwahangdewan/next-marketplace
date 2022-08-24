import styles from '../../../styles/TeacherVideo.module.css'
//import react-player
import ReactPlayer from 'react-player/lazy';
//import assets
import PlayIcon from '../../../public/icons/IconPlay.svg'
import Dummy from '../../../public/static-images/dummy-card-img.png'

const TeacherVideo = () => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.inner}>
          <h2 className={styles.header}>Teach in the most Efficient Way</h2>
          <p className={styles.para}>Become an Online Tutor with edvi</p>
        </div>
      </div>
      <div className={styles.video__container}>
        <ReactPlayer
          width="959px"
          height="510px"
          url="https://www.youtube.com/watch?v=tNeTbKTkhy4"
          light={true}
          playing={true}
          playIcon={<PlayIcon />}
          style={{
            borderRadius:'10px',
          }}
        />
      </div>
    </div>
  )
}

export default TeacherVideo
