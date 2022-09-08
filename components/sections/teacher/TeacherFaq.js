import Head from 'next/head'
import Image from 'next/image'
import useBreakpoints from '../../../hooks/useBreakpoints'
import styles from '../../../styles/Faq.module.css'
//import components
import TeacherFaqAccordion from '../../accordion/TeacherFaqAccordion'
import LaunchIcon from '@mui/icons-material/Launch';


const TeacherFaq = () => {
  const { md } = useBreakpoints()
  return (
    <div style={{marginTop:'70px'}} className={styles.container}>
      <div className={styles.left}>
        <h2 className={styles.header}>Frequently Asked</h2>
        <h2 className={styles.header__blue}>Questions</h2>

        {md? (
          <div className={styles.para__container}>
            <p className={styles.para}>Still having query?</p>
            <a href="#" className={styles.link}>Contact Us</a>
          </div>
        ):''}

        {md ? <p className={md ? styles.para : styles.para__mobile}>Or call us at <a href="tel:+918800504534"><span style={{color:'#3458a1'}}>+918800-504-534</span><LaunchIcon sx={{position:'relative',top:'4px', fontSize:'20px', color:'#3458a1'}} /></a></p> : ''}
      </div>

      <div className={styles.right}>
        <TeacherFaqAccordion />
      </div>

      <div className={styles.mobile__bottom__container}>
        {md ? '' : (
          <div className={styles.para__container}>
            <p className={styles.para}>Still having query?
              <a href="#" className={styles.link}> Contact Us</a>
            </p>
          </div>
        )}

        {md ? '' : <p className={md ? styles.para : styles.para__mobile}>Or call us at <a href="tel:+918800504534"><span style={{color:'#3458a1'}}>+918800-504-534</span><LaunchIcon sx={{position:'relative',top:'4px', fontSize:'20px', color:'#3458a1'}} /></a></p>}
      </div>
    </div>
  )
}

export default TeacherFaq
