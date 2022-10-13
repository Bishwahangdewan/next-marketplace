import styles from '../../styles/TeacherProfile.module.css';
import Link from 'next/link';
import {useRouter} from 'next/router';
import { useState, useEffect } from 'react';

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

//import functions and components
import {list, teachesClass, teachesSubject} from '../../globals/GlobalFunctions'
import BookDemo from '../../components/dialogs/BookDemo/BookDemo'

const TeacherProfile = ({ url }) => {
  const [teacher, setTeacher] = useState({})
  const [openBookDemo, setOpenBookDemo] = useState(false)
  const { md } = useBreakpoints()
  const router = useRouter()
  console.log(router)

  useEffect(()=>{
    const fetchProfileData = async () =>{
      try{
        const res = await fetch(`${url}/teacher-profile/${router.query.profile}`);
        const resData = await res.json()
        console.log(resData)
        setTeacher(resData)
      }catch(err){
        return err;
      }
    }
    console.log(url)
    fetchProfileData();
  },[]);

  const handleShare = async () => {
      if (window.navigator.share) {
          try {
              await window.navigator.share({
                  title: 'Edvi',
                  text: `Check out important classes ${teacher.name} on edvi`,
                  url: `${window.location.origin}${router.asPath}`,
              });
          } catch (error) {
              alert('Error sharing');
          }
      }
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Link href="/">
          <a><img src="/icons/LogoWhite.svg" className={styles.showcase__navbar__logo} alt="logo" /></a>
        </Link>
        <IconProfileShare onClick={handleShare} />
      </div>
      <div className={styles.blue__bg} />
      <div className={styles.profile__img__container}>
        <img src={teacher.display_picture} className={styles.profile__img}  />
      </div>
      <div className={styles.profile__name__container}>
        <p className={styles.profile__name}>{teacher.name}</p>
        <p className={styles.profile__subject}>Teaches {list(teachesSubject(teacher?.promised_batches))}</p>
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
            <p className={styles.batch__point}>{teacher.rating}</p>
          </div>
      </div>

      <div className={styles.classes__container}>
        <IconProfileClass />
        <p className={styles.classes__text}>Classes : {list(teachesClass(teacher?.promised_batches))}</p>
      </div>

      <div className={styles.student__container}>
        <IconProfileStudent />
        <p className={styles.student__text}>{teacher.students_taught}+ Students Taught</p>
      </div>

      <div className={styles.about__container}>
        <p className={styles.about__title}>About {teacher.alias}</p>
        <p className={styles.about__para}>{teacher.bio}</p>
      </div>

      <div className={styles.experience__container}>
          <p className={styles.experience__title}>Work Experience</p>

          {teacher?.work_experiences?.map((work) => (
            <div key={work.company} style={{
              borderBottom: 'solid 1px #d9d9d9'
            }} className={styles.work__container}>
              <IconProfileWork />
              <div className={styles.work__content}>
                <p className={styles.workplace}>{work.company}</p>
                <p className={styles.worklength}>{work.number_of_years} years</p>
              </div>
            </div>
          ))}
      </div>

      <div className={styles.qualification__container}>
          <p className={styles.qualification__title}>Qualification</p>

          {teacher?.education?.map((edu) => (
            <div key={edu.degree} style={{
              borderBottom: 'solid 1px #d9d9d9'
            }} className={styles.qualified__container}>
              <IconProfileWork />
              <div className={styles.qualified__content}>
                <p className={styles.qualifiedplace}>{edu.degree}</p>
                <p className={styles.qualifiedlength}>{edu.institute}</p>
              </div>
            </div>
          ))}
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
      </div>

      {openBookDemo && (
        <BookDemo
          open={openBookDemo}
          setOpen={setOpenBookDemo}
          teacher={teacher}
          url={url}
        />
      )}

      <div className={styles.schedule__container}>
        <button
          className={styles.schedule__btn}
          onClick={() => setOpenBookDemo(true)}
        >Schedule a Free Demo</button>
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
