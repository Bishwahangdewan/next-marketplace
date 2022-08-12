import Head from 'next/head'
import Image from 'next/image'
import styles from '../../../styles/CertifiedTutors.module.css'
//import swiper library - for slider
import { Navigation, Pagination, Scrollbar } from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
//import components
import TutorsCard from '../../cards/TutorsCard'

const CertifiedTutors = () => {
  return (
    <div className={styles.tutors__container}>
      <div className={styles.tutors__inner}>

        {/*---TUTORS CONTENT---*/}
        <div className={styles.tutors__left}>
          <h2 className={styles.tutors__header}>Only Certified</h2>
          <h2 className={styles.tutors__header}>and
            <span className={styles.tutors__header__blue}> highly-rated</span>
          </h2>
          <h2 className={styles.tutors__header}>tutors</h2>
          <p className={styles.tutors__para}>Teaching students from top cities in India, Singapore, USA and UAE.</p>
        </div>

        {/*---TUTORS-SLIDER---*/}
        <div className={styles.tutors__right}>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar]}
            spaceBetween={50}
            slidesPerView={2}
            navigation
            className={styles.swiper__container}
          >
            <SwiperSlide ><TutorsCard /></SwiperSlide>
            <SwiperSlide ><TutorsCard /></SwiperSlide>
            <SwiperSlide ><TutorsCard /></SwiperSlide>
            <SwiperSlide ><TutorsCard /></SwiperSlide>
            <SwiperSlide ><TutorsCard /></SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default CertifiedTutors
