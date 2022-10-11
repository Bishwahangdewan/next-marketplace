import styles from '../../styles/TeacherProfile.module.css';
import Link from 'next/link';
import {useRouter} from 'next/router';
import {useEffect} from 'react';

//import assets
import ProfileImg from '../../public/static-images/teacher-profile.webp';
import IconStar from '../../public/icons/IconStar.svg';
import IconProfileClass from '../../public/icons/IconProfileClass.svg';
import IconProfileStudent from '../../public/icons/IconProfileStudent.svg';
import IconProfileWork from '../../public/icons/IconProfileWork.svg';
import IconProfileShare from '../../public/icons/IconProfileShare.svg';

//import mui components
import {TextField} from '@mui/material';
import {styled} from '@mui/system';

//import breakpoints
import useBreakpoints from '../../hooks/useBreakpoints'

const TeacherProfile = ({ url }) => {
  const { md } = useBreakpoints()
  const router = useRouter()

  useEffect(()=>{
    const fetchProfileData = async () =>{
      try{
        const res = await fetch(`${url}/teacher-profile/${router.query.profile}`);
        const resData = await res.json()
        console.log(resData)

      }catch(err){
        return err;
      }
    }
    console.log(url)
    fetchProfileData();
  },[]);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Link href="/">
          <a><img src="/icons/LogoWhite.svg" className={styles.showcase__navbar__logo} alt="logo" /></a>
        </Link>
        <IconProfileShare />
      </div>
      <div className={styles.blue__bg} />
      <div className={styles.profile__img__container}>
        <img src={ProfileImg.src} className={styles.profile__img}  />
      </div>
      <div className={styles.profile__name__container}>
        <p className={styles.profile__name}>Divyaansh Kumar</p>
        <p className={styles.profile__subject}>Teaches English & Science</p>
      </div>

      <div className={styles.center}>
      <div className={styles.pricing__container}>
          <div className={styles.pricing__content}>
            <p className={styles.pricing__label}>Fees Starts from</p>
            <p className={styles.pricing__blue}>4000 per month</p>
          </div>
          <div className={styles.badge}>
            <IconStar style={{
              color: '#fff',
              marginRight: '3px',
            }} />
            <p className={styles.batch__point}>5.0</p>
          </div>
      </div>

      <div className={styles.classes__container}>
        <IconProfileClass />
        <p className={styles.classes__text}>Classes : V, VII & VIII</p>
      </div>

      <div className={styles.student__container}>
        <IconProfileStudent />
        <p className={styles.student__text}>450+ Students Taught</p>
      </div>

      <div className={styles.about__container}>
        <p className={styles.about__title}>About Divyaansh</p>
        <p className={styles.about__para}>Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum</p>
      </div>

      <div className={styles.experience__container}>
          <p className={styles.experience__title}>Work Experience</p>

          <div style={{
            borderBottom: 'solid 1px #d9d9d9'
          }} className={styles.work__container}>
            <IconProfileWork />
            <div className={styles.work__content}>
              <p className={styles.workplace}>Google</p>
              <p className={styles.worklength}>8 years</p>
            </div>
          </div>

          <div className={styles.work__container}>
            <IconProfileWork />
            <div className={styles.work__content}>
              <p className={styles.workplace}>Microsoft</p>
              <p className={styles.worklength}>8 years</p>
            </div>
          </div>
      </div>

      <div className={styles.qualification__container}>
          <p className={styles.qualification__title}>Qualification</p>

          <div style={{
            borderBottom: 'solid 1px #d9d9d9'
          }} className={styles.qualified__container}>
            <IconProfileWork />
            <div className={styles.qualified__content}>
              <p className={styles.qualifiedplace}>Master of Commerce</p>
              <p className={styles.qualifiedlength}>Delhi University</p>
            </div>
          </div>

          <div className={styles.qualified__container}>
            <IconProfileWork />
            <div className={styles.qualified__content}>
              <p className={styles.qualifiedplace}>Master of Business administration</p>
              <p className={styles.qualifiedlength}>Indian Institute Of Management–Rohtak</p>
            </div>
          </div>
      </div>

      <div className={styles.needhelp__container}>
        <p className={styles.needhelp__title}>Need help from our expert?</p>
        <p className={styles.needhelp__para}>Please enter your details, our team will</p>
        <p className={styles.needhelp__para}>help you find a perfect teacher</p>

        <div className={styles.form__container}>

          <TextInputSquare
            type="text"
            placeholder="Enter Name"
          />

          <TextInputSquare
            type="text"
            placeholder="Enter Name"
          />

          <button className={styles.btn__green}>Request Callback</button>
        </div>
      </div>

      <div className={styles.schedule__container}>
        <button className={styles.schedule__btn}>Schedule a Free Demo</button>
      </div>

      </div>
    </div>
  )
}

const TextInputSquare = styled(TextField)({
  width: '100%',
  marginTop:'7px',

  '& .MuiOutlinedInput-root': {
    color: '#000',
    fontSize: '1.1rem',
    margin: '0.313rem 0rem',
    backgroundColor:'#fff',
    borderRadius:'5px',

    '& input': {
      padding: '10px 14px',
    },

    '& fieldset': {
      borderColor: 'rgba(0, 0, 0, 0.1)',
      // borderRadius: '32px',
      transition: '0.2s ease',
    },

    '&.Mui-focused fieldset': {
      borderColor: 'rgba(0, 0, 0, 0.5)',
      borderWidth: '1px',
    },

    '& svg': {
      color: '#000',
    },
  },
});

export default TeacherProfile

export async function getServerSideProps() {
  const url = process.env.REACT_APP_BASE_URL
	return {
		props: {
			url,
		}
	}
}
