import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/BlogCard.module.css'

const BlogCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.img__container}>
        <img src="/static-images/dummy-blog.png" className={styles.blog__img} />
      </div>

      <div className={styles.content__container}>
        <p className={styles.para}>5 min read</p>
        <h3 className={styles.header}>Lorem ipsum dolor sit amet, consectetur adipiscing</h3>
        <button className={styles.btn}>Read Now</button>
      </div>
    </div>
  )
}

export default BlogCard
