import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../../../styles/BecomeATutor.module.css'
//import mui components
import { Button } from '@mui/material'
import { styled } from '@mui/system'
//import breakpoints
import useBreakpoints from '../../../hooks/useBreakpoints'

const BecomeATutor = () => {
  const { md } = useBreakpoints()
  return (
    <div className={styles.container}>
      <div className={styles.img__container}>
        <Image
          src='/static-images/become-a-teacher.png'
          width={620}
          height={446}
          className={styles.image}
        />
      </div>

      <div className={styles.content__container}>
        <h2 className={styles.header}>Become an </h2>
        <h2 className={styles.header__blue}>edvi tutor</h2>
        <p className={styles.para}>Making money from online classes</p>
        <p className={styles.para}> is easy with edvi</p>
        <Link href="/register">
          <TutorButton style={{
             width: md ? '308px':'90%',
          }} className={styles.btn}>Apply Now</TutorButton>
        </Link>
      </div>
    </div>
  )
}

const TutorButton = styled(Button)({
  backgroundColor: '#3458a1',
  padding: '12px !important',
  border: 'none',
  borderRadius: '30px',
  fontSize: '20px',
  color: '#fff',
  marginTop: '20px',
  cursor: 'pointer',
  borderBottom: '5px solid #203e7a',
  textTransform: 'capitalize',
  fontFamily: 'Lato',
  fontWeight:'bold',

  '&:hover':{
    backgroundColor: '#3458a1',
  }
}) 

export default BecomeATutor
