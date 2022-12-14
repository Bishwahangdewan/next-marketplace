import Head from 'next/head'
import Image from 'next/image'
import styles from '../../../styles/Blog.module.css'
//import components
import BlogCard from '../../cards/BlogCard'
//import Swiper components
import { Navigation, Pagination, Scrollbar } from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
//import breakpoints
import useBreakpoints from '../../../hooks/useBreakpoints'

const Blog = () => {
  const { md } = useBreakpoints()

  return (
    <div className={styles.container}>
      <h2 className={styles.header}>
        <span className={styles.header__blue}>edvi </span>
        Blogs
      </h2>

      <Swiper
        modules={[Navigation, Pagination, Scrollbar]}
        spaceBetween={ md ? 55 : 18 }
        slidesPerView={ md ? 3 : 1 }
        navigation = { md ? true : false }
        className={styles.swiper__container}
      >
        <SwiperSlide ><BlogCard /></SwiperSlide>
        <SwiperSlide ><BlogCard /></SwiperSlide>
        <SwiperSlide ><BlogCard /></SwiperSlide>
        <SwiperSlide ><BlogCard /></SwiperSlide>
        <SwiperSlide ><BlogCard /></SwiperSlide>
        <SwiperSlide ><BlogCard /></SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Blog;
