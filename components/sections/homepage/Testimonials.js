import Head from 'next/head'
import Image from 'next/image'
import styles from '../../../styles/Blog.module.css'
//import components
import TestimonialCard from '../../cards/TestimonialCard'
//import Swiper components
import { Navigation, Pagination, Scrollbar } from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
//import breakpoints
import useBreakpoints from '../../../hooks/useBreakpoints'

const Testimonials = () => {
  const { md } = useBreakpoints()

  return (
    <div className={styles.container}>
      <h2 style={{
        fontSize: md ? '44px' : '36px',
        paddingBottom: '60px',
        width: '90%',
        margin: 'auto',
        textAlign: 'center',
      }}> What
        <span className={styles.header__blue}> Parents </span>
        say about us
      </h2>

      <div style={{
        position:'absolute',
        top: md? '150px':'190px',
        left:md?'5vh':'-4vh',
        zIndex:'0',
      }}>
        <Image
          src="/static-images/testimonial-left.webp"
          height={137}
          width={146}
          alt="testimonial-bg"
          loading="lazy"
        />
      </div>

      <div style={{
        display: md ? '':'none',
        position:'absolute',
        bottom: '-10px',
        right:'5vh',
        zIndex:'-10000 !important',
      }}>
        <Image
          src="/static-images/testimonial-right.webp"
          height={137}
          width={146}
          alt="testimonial-bg"
          loading="lazy"
        />
      </div>


      <Swiper
        modules={[Navigation, Pagination, Scrollbar]}
        spaceBetween={ md ? 55 : 18 }
        slidesPerView={ md ? 3 : 1 }
        navigation = { md ? true : false }
        pagination = {md ? false : true}
        className={styles.swiper__container}
      >
        {testimonialData.map((data) => (
          <SwiperSlide key={data.link} className={styles.swiper__slide}><TestimonialCard data={data} /></SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

const testimonialData=[
  {
    name: 'Mamta Singh',
    city: 'Lucknow',
    info: 'Maths & Science - Grade 10 - ICSE',
    link: 'https://youtu.be/F5elxFhyTfI',
  },
  {
    name: 'Vyomesh Bhawsar',
    city: 'Mumbai',
    info: 'Chemistry & Biology - Grade 10 - CBSE',
    link: 'https://youtu.be/wJxx0aHQ7Nk',
  },
  {
    name: 'Mamta Singh',
    city: 'Lucknow',
    info: 'Maths & Science - Grade 10 - ICSE',
    link: 'https://youtu.be/F5elxFhyTfI',
  },
  {
    name: 'Ajay Kumar',
    city: 'New Delhi',
    info: 'PCM & English - Grade 12 - IGCSE',
    link: 'https://youtu.be/GT96cav35tY',
  },
]

export default Testimonials;
