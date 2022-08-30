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
        ):''}


        {md ? <p className={md ? styles.para : styles.para__mobile}>Or call us at +918800-504-534</p> : ''}
      </div>

      <div className={styles.right}>
        <FaqAccordion />
      </div>
      
      <div className={styles.mobile__bottom__container}>
        {md ? '' : (
          <div className={styles.para__container}>
            <p className={styles.para}>Still having query?
              <a href="#" className={styles.link}> Contact Us</a>
            </p>
          </div>
        )}

        {md ? '' : <p className={md ? styles.para : styles.para__mobile}>Or call us at +918800-504-534</p>}
      </div>
    </div>
  )
}

export default Faq
