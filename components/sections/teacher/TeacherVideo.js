import styles from '../../../styles/TeacherVideo.module.css'
//import react-player
import ReactPlayer from 'react-player';
//import assets
import PlayIcon from '../../../public/icons/IconPlay.svg'
import Dummy from '../../../public/static-images/dummy-card-img.png'
import BlueBg from '../../../public/static-images/teachers/blue-bg.png'
import Thumb from '../../../public/static-images/video-thumb.webp'
//import breakpoints
import useBreakpoints from '../../../hooks/useBreakpoints'

const TeacherVideo = () => {
  const { md } = useBreakpoints()

  return (
    <div>
      <div className={styles.container} style={{
        backgroundImage: `url(${BlueBg.src})`,
        backgroundSize:'cover',
        backgroundPosition: 'bottom center',
        width: '100%',
      }}>
        <div className={styles.inner}>
          {md ? (
            <h2 className={styles.header}>Teach in the most Efficient Way</h2>
          ):(
            <div>
              <h2 className={styles.header}>Teach in the most</h2>
              <h2 className={styles.header}>Efficient Way</h2>
            </div>
          )}
          <p className={styles.para}>Become an Online Tutor with edvi</p>
        </div>
      </div>
      <div className={styles.video__container}>
        <ReactPlayer
          width={md? "959px" : '90%'}
          height={md? "510px" : '199px'}
          url="https://www.youtube.com/watch?v=tNeTbKTkhy4"
          light="https://raw.githubusercontent.com/Apptowntechnologies/NextJS-Marketplace/main/public/static-images/video-thumb.webp"
          playing={true}
          playIcon={<PlayIcon />}
        />
      </div>
    </div>
  )
}

export default TeacherVideo
