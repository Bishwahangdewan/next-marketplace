import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/BlogCard.module.css'

const BlogCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.img__container}>
        <div className={styles.blog__img}>
          <Image
            src="/static-images/dummy-blog.png"
            layout="fill"
            alt="blog"
          />
        </div>
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
