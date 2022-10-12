import { useState, useContext, useEffect } from 'react';
import { Dialog, Box, IconButton, Typography, Divider } from '@mui/material';
import { SlideTransition, SButton } from '../../../globals/GlobalStyles.js';
import { MdClose } from 'react-icons/md';
import { BsFillPatchCheckFill } from 'react-icons/bs';
import { BiArrowBack } from 'react-icons/bi';
import Step1 from './Step1';
import Step2 from './Step2';
import Congrats from './Congrats';
import dayjs from 'dayjs';
// import { TeacherContext } from '../../../Context/TeacherContext';

import { getLowestPrice } from '../../../globals/GlobalFunctions';
//import {useLocation} from 'react-router-dom';
// import { trackTeacherDetails } from '../../../firebase/analytics';

const validate = (values) => {
  const errors = {};

  let regEmail =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (values.standard === '') {
    errors.standard = 'Required';
  } else if (values.standard === 'Select Class') {
    errors.standard = 'Please Select Class';
  }

  if (values.subject === '') {
    errors.subject = 'Required';
  } else if (values.subject === 'Select Subject') {
    errors.subject = 'Please Select Subject';
  }

  if (values.teaching_mode === '') {
    errors.teaching_mode = 'Required';
  }

  if (values.class_mode === '') {
    errors.class_mode = 'Required';
  }

  if (values.name === '') {
    errors.name = 'Required';
  }

  // if (values.referral_code === '') {
  //   errors.referral_code = 'Required';
  // }

  if (values.email === '') {
    errors.email = 'Required';
  } else if (!regEmail.test(values.email)) {
    errors.email = 'Invalid Email';
  }

  if(values.phone_number.length !== 0){
	  if(
			values.phone_number[0] === '9'
			&& values.phone_number[1] === '7'
			&& values.phone_number[2] === '1'
		){
			if(values.phone_number.length !== 3 ) {
				if(values.phone_number.length < 11 || values.phone_number.length > 11){
					errors.phone_number = "Invalid Phone Number"
				}
			}
		} else if(values.phone_number[0] === '9' && values.phone_number[1] === '1') {
			if(values.phone_number.length !== 2 ) {
				if(values.phone_number.length < 12 || values.phone_number.length > 12){
					errors.phone_number = "Invalid Phone Number"
				}
			}
		} else if(values.phone_number[0] === '6' && values.phone_number[1] === '5') {
			if(values.phone_number.length !== 2 ) {
				if(values.phone_number.length < 10 || values.phone_number.length > 10){
					errors.phone_number = "Invalid Phone Number"
				}
			}
		}
	}

	if (values.phone_number.length < 5) {
		errors.phone_number = "required"
	}

  if (values.availability_date === '') {
    errors.availability_date = 'Required';
  } else if (dayjs(values.availability_date).isBefore(dayjs(new Date()))) {
    errors.availability_date = 'Date should be in the future';
  }

  if (values.availability_time === '') {
    errors.availability_time = 'Required';
  }

  return errors;
};

const BookDemo = ({ open, setOpen, teacher, url }) => {
  const [step, setStep] = useState(1);

  // const {BookTeacher , teacherClassFromEdviHome , teacherSubjectFromEdviHome} = useContext(TeacherContext);
  //const location = useLocation();

  // const [subject] = useState(
  //   location?.state?.subject || 'Select Subject',
  // );
  // const [standard] = useState(
  //   location?.state?.class?.toString() || 'Select Class',
  // );

  const initialValues = {
    standard: 'Select Class',
    subject:  'Select Subject',
    teaching_mode: teacher.teaches_private ? 'P' : 'G',
    class_mode: teacher.teaches_online ? 'O' : 'F',
    availability_date: dayjs().format('YYYY-MM-DD'),
    availability_time: dayjs().format('HH:MM'),
    name: '',
    email: '',
    phone_number: '',
    teacher_id: window.location.pathname.split("/")[2]?window.location.pathname.split("/")[2] :teacher.username,
    referral_code: '',
    demo_topic:''
  };
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const errorsRes = validate(values);
    setErrors(errorsRes);
  }, [values]);

  const handleSubmit = async () => {
    const errors = validate(values);
    setErrors(errors);
    console.log(values)

    const finalValues = {
      class_mode: values.class_mode,
      class_time: values.availability_time,
      email: values.email,
      name: values.name,
      int_phone_number: values.phone_number,
      standard: values.standard,
      subject: values.subject,
      teacher_username: values.teacher_id,
      teaching_mode: values.teaching_mode,
      referral_code: values.referral_code,
      demo_topic: values.demo_topic,
    }

    if (Object.keys(errors).length === 0 && teacher.username !== undefined) {
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Version-Code': '89',
          'User-Agent': 'Android',
          'Accept-Language': 'en',
         },
        body: JSON.stringify(finalValues)
      }

      const res = await fetch(`${url}/booking`, requestOptions)
      const resData = await res.json()

      if (resData.status === 201) {
        setStep(3);
      }
    } else if (
      Object.keys(errors).includes('standard') ||
      Object.keys(errors).includes('subject')
    ) {
      setStep(1);
    }
  };

  const close = () => {
    setOpen(false);
    setTimeout(() => {
      setStep(1);
      setValues(initialValues);
      setErrors({});
    }, 500);
  };

  const back = () => {
    setStep(1);
  };

  const handleClick = () => {
    // const errorsRes = validate(values);
    // setErrors(errorsRes);

    if (step === 1) {
      if (!errors.standard && !errors.subject && !errors.availability_date) {
        // No Errors Found
        setStep(2);
      }
    } else if (step === 2) {
      handleSubmit();
    } else {
      close();
    }
  };

  return (
    <Dialog open={open} fullScreen TransitionComponent={SlideTransition}>
      {step === 3 ? (
        <Congrats close={close} />
      ) : (
        <>
          <Box sx={{
            display:'flex',
            justifyContent:'space-between',
            alignItems:'center',
            px:'1rem',
            py:'0.4rem',
            pt:'10px'
          }}>
            <Box sx={{
              display:'flex',
              justifyContent:'center',
              alignItems:'center',
            }}>
              <IconButton
                onClick={step === 1 ? close : step === 2 ? back : close}
              >
                {step === 1 && <MdClose color="#000" />}
                {step === 2 && <BiArrowBack color="#000" />}
              </IconButton>

              <Typography sx={{fontWeight:'600'}}>Book Free Demo</Typography>
            </Box>

            <Typography sx={{fontSize:'14px'}}>{step} of 2</Typography>
          </Box>

          <Divider sx={{ borderWidth: '1px' }} />

          <Box sx={{ padding: '1rem', bgcolor: '#DBF4F1' }}>
            <Box className="flex centerV">
              <Typography sx={{fontSize:'18px'}} variant="h6" fontWeight="500" marginRight="0.5rem">
                Tutor name: {teacher.name}
              </Typography>
              <Typography sx={{
                fontWeight: "500",
                color:'#666',
                fontSize:'16px'
              }} variant="body"  marginRight="0.5rem">
                1 Demo Class Free
              </Typography>
            </Box>
          </Box>

          {step === 1 && (
            <Step1
              values={values}
              errors={errors}
              setValues={setValues}
              teacher={teacher}
            />
          )}
          {step === 2 && (
            <Step2
              values={values}
              errors={errors}
              setValues={setValues}
              teacher={teacher}
            />
          )}

          <Box
            sx={{
              position: 'fixed',
              width: '100%',
              left: 0,
              bottom: 0,
              bgcolor: '#fff',
              boxSizing: 'border-box',
            }}
          >
            <Divider sx={{ borderWidth: '2px' }} />
            <Box padding="1rem">
            <SButton onClick={() => {
                handleClick();
              }} style={{ backgroundColor: "#4A80ED", color: "#fff" }}>
                {step === 1 ? 'Next' : 'Book Free Demo'}
              </SButton>
            </Box>
          </Box>
        </>
      )}
    </Dialog>
  );
};

export default BookDemo;
