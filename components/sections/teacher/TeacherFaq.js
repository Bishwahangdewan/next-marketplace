import Head from 'next/head'
import Image from 'next/image'
import styles from '../../../styles/Faq.module.css'
//import components
import TeacherFaqAccordion from '../../accordion/TeacherFaqAccordion'

const TeacherFaq = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <h2 className={styles.header}>Frequently Asked</h2>
        <h2 className={styles.header__blue}>Questions</h2>

        <div className={styles.para__container}>
          <p className={styles.para}>Still having query?</p>
          <a href="#" className={styles.link}>Contact Us</a>
        </div>

        <p className={styles.para}>Or call us at +918800-504-534</p>
        <button className={styles.teacher__btn}>Register Now</button>
      </div>

      <div className={styles.right}>
        <TeacherFaqAccordion />
      </div>
    </div>
  )
}

export default TeacherFaq
