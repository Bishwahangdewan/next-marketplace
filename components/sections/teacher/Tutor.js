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
//import breakpoints
import useBreakpoints from '../../../hooks/useBreakpoints'

const Tutor = () => {
  const { md } = useBreakpoints()
  return (
    <div className={styles.tutors__container}>
      <div className={styles.tutors__inner}>

        {/*---TUTORS CONTENT---*/}
        <div className={styles.tutors__left}>
          {md ? (
            <div>
              <h2 className={styles.tutors__header}>what our
                <span className={styles.tutors__header__blue}> tutor&apos;s</span>
              </h2>
              <h2 className={styles.tutors__header}>
                <span className={styles.tutors__header__blue}> say about edvi</span>
              </h2>
            </div>
          ):(
            <div>
              <h2 className={styles.tutors__header}>what our
                <span className={styles.tutors__header__blue}> tutor&apos;s say</span>
              </h2>
              <h2 className={styles.tutors__header}>
                <span className={styles.tutors__header__blue}>about edvi</span>
              </h2>
            </div>
          )}
          <div className={styles.para__container}>
            <p className={styles.tutors__para}>Teaching students from top cities in India,</p>
            <p className={styles.tutors__para}>Singapore, USA & UAE.</p>
          </div>
        </div>

        {/*---TUTORS-SLIDER---*/}
        <div className={styles.tutors__right}>
            <Swiper
              modules={[Navigation, Pagination, Scrollbar]}
              spaceBetween={md ? 50 : 20}
              slidesPerView={md ? 2 : 1}
              navigation={md ? true : false}
              className={styles.swiper__container}
            >
              <SwiperSlide >
                <TutorsCard 
                  name="Kanika Sehgal"
                  star="4.9"
                  sub="Maths"
                  grade="9th to 12th"
                  para="Expert in IGCSE curriculum"
                  videoLink="https://youtube.com/shorts/Fib1RJk19Cg?feature=share"
                />
              </SwiperSlide>
              <SwiperSlide >
                <TutorsCard 
                  name="Karan"
                  star="4.75"
                  sub="English"
                  grade="9th to 12th"
                  para="Expert in IGCSE & CBSE curriculum"
                  videoLink="https://youtu.be/_35GgiKRm4w"
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
  )
}

export default Tutor
