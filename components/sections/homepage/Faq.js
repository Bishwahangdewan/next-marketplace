import Head from 'next/head'
import Image from 'next/image'
import styles from '../../../styles/Faq.module.css'
//import components
import FaqAccordion from '../../accordion/FaqAccordion'
//import breakpoints
import useBreakpoints from '../../../hooks/useBreakpoints'
//import Icons
import LaunchIcon from '@mui/icons-material/Launch';
import WhatsappIcon from '../../../public/icons/header-icons/whatsapp.svg'

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


        {md ?
          <div
            styles={{boxSizing:'content-box'}}
            className={md ? styles.para : styles.para__mobile}>
            <span>Or call us on </span>
            <WhatsappIcon style={{position:'relative',top:'3px'}} />
            <a href="tel:+918800504534"> at
              <span style={{color:'#3458a1'}}> +918800-504-534</span>
              <LaunchIcon sx={{position:'relative',top:'5px', fontSize:'20px', color:'#3458a1'}} />
            </a>
          </div> : ''}
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

        {md ? '' :
          <div>
            <p
              className={md ? styles.para : styles.para__mobile}>
                <span>Or call us on </span>
                <WhatsappIcon style={{position:'relative',top:'4px'}} />
                <span> at</span>
                <a href="tel:+918800504534">
                  <span style={{color:'#3458a1'}}> +918800-504-534</span>
                  <LaunchIcon sx={{position:'relative',top:'4px', fontSize:'20px', color:'#3458a1'}} />
                </a>
            </p>
          </div>}
      </div>
    </div>
  )
}

export default Faq
