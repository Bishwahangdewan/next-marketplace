import Head from 'next/head'
import Image from 'next/image'
import styles from '../../../styles/Faq.module.css'
//import components
import FaqAccordion from '../../accordion/FaqAccordion'

const Faq = () => {
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
      </div>

      <div className={styles.right}>
        <FaqAccordion />
      </div>
    </div>
  )
}

export default Faq
