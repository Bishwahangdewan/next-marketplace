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
import { useSwiper } from 'swiper/react';
//import assets
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
//import components
import TutorsCard from '../../cards/TutorsCard'
//import react components

const Tutor = () => {
  return (
    <div className={styles.tutors__container}>
      <div className={styles.tutors__inner}>

        {/*---TUTORS CONTENT---*/}
        <div className={styles.tutors__left}>
          <h2 className={styles.tutors__header}>what our
            <span className={styles.tutors__header__blue}> tutor&apos;s</span>
          </h2>
          <h2 className={styles.tutors__header}>
            <span className={styles.tutors__header__blue}> say about edvi</span>
          </h2>
          <p className={styles.tutors__para}>Teaching students from top cities in India,</p>
          <p className={styles.tutors__para}>Singapore, USA & UAE.</p>
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

export default Tutor
