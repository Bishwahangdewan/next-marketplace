import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/TestimonialCard.module.css'
import PlayIcon from '../../public/icons/IconPlay.svg'
//import react-player
import ReactPlayer from 'react-player';

const TestimonialCard = ({data}) => {
  return (
    <div className={styles.container}>
      <div className={styles.img__container}>
        <div className={styles.blog__img}>
          <ReactPlayer
              width="100%"
              height="170px"
              url={data.link}
              light={true}
              playing={true}
              playIcon={<PlayIcon />}
          />
        </div>
      </div>

      <div className={styles.content__container}>
        <h3 className={styles.header}>{data.name}</h3>
        <p className={styles.para}>{data.city}</p>

        <hr className={styles.line}/>
        <p className={styles.para__small}>Her daughter is taking private tuitions for</p>
        <p className={styles.para__small}>{data.info}</p>
      </div>
    </div>
  )
}

export default TestimonialCard
