import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/MainForm.module.css'
//import mui components
import {Box , Divider, Typography , TextField, InputAdornment, Button, ButtonBase, MenuItem} from '@mui/material'
import PersonIcon from '../../public/icons/IconPerson.svg'
import PhoneIcon from '../../public/icons/IconPhone.svg'
import {styled} from '@mui/system';
//import React components
import {useState, useEffect} from 'react'
//snackbar components
import { useSnackbar } from 'notistack';
import showSuccessSnackbar from '../snackbar/SuccessSnackbar'
import showErrorSnackbar from '../snackbar/ErrorSnackbar'
//react-phone-Input
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
//import class-subject data
import { classSubs } from '../../globals/GlobalData.js'
//import breakpoints
import useBreakpoints from '../../hooks/useBreakpoints'

const MainForm = () => {
  const { enqueueSnackbar } = useSnackbar()
  const { md } = useBreakpoints()

  const initialValues = {
    name: '',
    phone_number: '',
    standard: 'Select class',
    subject: 'Select subject',
  }

  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})

  const [subjects, setSubjects] = useState(['Select subject']);

  useEffect(() => {
    const subject = classSubs.filter(classSub => classSub.studentClass === values.standard);
    setSubjects(subject[0].studentSubs);
  }, [values.standard])

  //validate and post api
  const handleSubmit = async () => {
      const errs = validate()
      setErrors(errs)

      if (Object.keys(errs).length === 0) {
        const payload = {
          name: values.name,
          int_phone_number: `+${values.phone_number}`,
          standard: values.standard,
          subject: values.subject,
        }

        const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        }

        const response = await fetch('https://api.staging.edvi.app/help-request/', requestOptions);
        const responseData = await response.json()

        console.log(responseData)

        if (response.status === 201){
          const resetValues = initialValues
          resetValues.phone_number = `+91`

          setValues(resetValues)

          showSuccessSnackbar(
            enqueueSnackbar,
            'Success',
          );
        } else {
          showErrorSnackbar(
            enqueueSnackbar,
            responseData.int_phone_number[0],
          );
        }
      }
  }

  //validate
  const validate = () => {
    let errors = {}

    if (!values.name) {
      errors.name = 'Field Required'
    } else if (values.name.trim().length === 0) {
      errors.name = 'No Leading Whitespaces allowed'
    } else if (values.name.length < 3) {
      errors.name = 'Minimum 3 letters should be allowed'
    } else if (values.name.length > 55) {
      errors.name = 'Maximum 55 letters are allowed'
    }


    if (!values.phone_number) {
      errors.phone_number = 'Required'
    }
    if (values.phone_number.toString().length < 10 || values.phone_number.toString().length > 18 ) {
      errors.phone_number = 'Invalid Phone Number'
    }

    if (values.standard === 'Select class') {
      errors.standard = 'Please select class'
    }

    if (values.subject === 'Select subject') {
      errors.subject = 'Please select Subject'
    }

    return errors
  }

  return (
    <div>
      <h4 className={styles.mainForm__header}>Book Your Free Demo Class</h4>

      <div className={styles.mainForm__formGroup}>
        <StyledTextField
          placeholder="Enter full name"
          value={values.name}
          onChange = {(e) =>setValues((prev) => ({...prev, name: e.target.value}))}
          helperText={errors.name}
          error={errors.name}
          InputProps={{
            endAdornment:
            <InputAdornment position="end">
              <PersonIcon sx={{color:'#3458a1'}}/>
            </InputAdornment>
          }}
         />
      </div>

      <div className={styles.mainForm__formGroup}>
        <PhoneInput
           country={'in'}
           onlyCountries={['in','ae','sg']}
           value={values.phone_number}
           placeholder="Enter mobile/whatsapp number"
           onChange={(phone,country) => {
             setValues((prev) => ({...prev,phone_number:phone}))
           }}
           countryCodeEditable={false}
         />
         <Typography sx={{
           color:'red',
           fontSize:'12px',
           pl:'12px',
           pt:'5px',
         }}>{errors.phone_number?errors.phone_number:''}</Typography>
      </div>

      <div className={styles.mainForm__formGroup}>
        <StyledTextField
          select
          value={values.standard}
          onChange = {(e) =>setValues((prev) => ({...prev, standard:e.target.value}))}
          helperText={errors.standard}
          error={errors.standard}
         >
         {classSubs.map((classSub) => (
           <MenuItem
             key={classSub.studentClass}
             value={classSub.studentClass}
             className={classSub.studentClass === 'Select class' ? 'disabled' : ''}
           >
             {classSub.studentClass}
           </MenuItem>
          ))}
         </StyledTextField>
      </div>

      <div className={styles.mainForm__formGroup}>
        <StyledTextField
          select
          value={values.subject}
          onChange = {(e) =>setValues((prev) => ({...prev, subject:e.target.value}))}
          helperText={errors.subject}
          error={errors.subject}
         >
         {subjects.map((sub) => (
           <MenuItem
             key={sub}
             value={sub}
           >
             {sub}
           </MenuItem>
         ))}
         </StyledTextField>
      </div>

      <div className={styles.mainForm__button__container}>
        <SButton
         type="reset"
         onClick={handleSubmit}
         sx={{
           padding:md? '1rem 2rem': '0.7rem 2rem',
         }}
        >
          {md? 'Book a Free Demo' : 'Submit'}
        </SButton>
      </div>
    </div>
  )
}

const SButton = styled(ButtonBase)({
  backgroundColor: '#3dae34',
  borderBottom:'3px solid #28931f',
  color: '#fff',
  fontSize: '18px',
  borderRadius: '60px',
  paddingTop:'18px',
  width: '100%',
  fontWeight: 600,
  fontFamily: 'Lato',
});

const StyledTextField = styled(TextField)({
	width:'100%',

	'& .MuiOutlinedInput-root': {
		borderRadius:'30px',
	},

	'& .MuiOutlinedInput-input': {
		padding:'12px 12px 12px 25px',
	},
})

export default MainForm
