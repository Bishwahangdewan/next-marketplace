import Head from 'next/head'
import Image from 'next/image'
import styles from '../../../styles/Faq.module.css'
//import components
import FaqAccordion from '../../accordion/FaqAccordion'
//import breakpoints
import useBreakpoints from '../../../hooks/useBreakpoints'

const Faq = () => {
  const { md } = useBreakpoints()

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <h2 className={styles.header}>Frequently Asked</h2>
        <h2 className={styles.header__blue}>Questions</h2>

        {md? (
          <div className={styles.para__container}>
            <p className={styles.para}>Still having query?</p>
            <a href="#" className={styles.link}>Contact Us</a>
          </div>
        ):(
          <div className={styles.para__container}>
            <p className={styles.para}>Still having query?
              <a href="#" className={styles.link}> Contact Us</a>
            </p>
          </div>
        )}


        <p className={md ? styles.para : styles.para__mobile}>Or call us at +918800-504-534</p>
      </div>

      <div className={styles.right}>
        <FaqAccordion />
      </div>
    </div>
  )
}

export default Faq
