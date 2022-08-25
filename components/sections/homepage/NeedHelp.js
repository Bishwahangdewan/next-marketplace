import Head from 'next/head'
import Image from 'next/image'
import styles from '../../../styles/NeedHelp.module.css'
//@mui-components
import { Card, Typography, ButtonBase, TextField, Box } from '@mui/material'
import { styled } from '@mui/material/styles'
//import react components
import {useState} from 'react'
//snackbar components
import { useSnackbar } from 'notistack'
import showSuccessSnackbar from '../../snackbar/SuccessSnackbar'
import showErrorSnackbar from '../../snackbar/ErrorSnackbar'
//import assets
import NeedHelpBg from '../../../public/static-images/need-help-bg.png'
//import breakpoints
import useBreakpoints from '../../../hooks/useBreakpoints'

const NeedHelp = () => {
  const { enqueueSnackbar } = useSnackbar()
  const { md } = useBreakpoints()

  const initialValues = {
    name: '',
    phone_number: '',
  }

  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})

  //validate and post
  const handleSubmit = async () => {
    const errs = validate(values)
    setErrors(errs)

    if (Object.keys(errs).length === 0){
      //validated - no errors
      const requestValue = {
        name: values.name,
        phone_number: `91${values.phone_number}`
      }

      const requestOptions = {
         method: 'POST',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify(requestValue)
      }
      const response = await fetch('https://api.develop.edvi.app/help-request/', requestOptions);

      if (response.status === 201){
        setValues(initialValues)

        showSuccessSnackbar(
          enqueueSnackbar,
          'Success',
        );
      }
    }
  }

  //validate
  const validate = (values) => {
    const errs = {}
    //name validation
    if(values.name.length === 0){
      errs.name = "Please enter name"
    }else if(values.name.length > 55){
      errs.name = "Name cannot have more than 55 characters"
    }

    //phone validation
    if(values.phone_number.length === 0){
      errs.phone = "Please enter phone"
    }else if(values.phone_number.length < 10) {
      errs.phone = "Invalid Phone Number"
    }else if(values.phone_number.length > 10) {
      errs.phone = "Invalid Phone Number"
    }

    return errs;
  }


  return (
    <div style={{
      backgroundImage: `url(${NeedHelpBg.src})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize:'cover',
      width: '100%',
    }}>
    <div className={styles.container}>
      <div className={styles.content}>
        {md ? (
          <h1 className={styles.header}>Need help from our expert?</h1>
        ):(
          <div classaName={styles.header__container}>
            <h1 className={styles.header}>Need help from our</h1>
            <h1 className={styles.header}>expert?</h1>
          </div>
        )}

        {md ? (
          <p className={styles.para}>Please enter your details, our team will help you find a perfect teacher</p>
        ):(
          <div className={styles.para__container}>
            <p className={styles.para}>Please enter your details, our team will </p>
            <p className={styles.para}>help you find a perfect teacher</p>
          </div>
        )}


        <div className={styles.form__container}>
          <Box sx={{
            display: md ? "flex" : "block",
            justifyContent: "space-between",
            alignItems: 'top',
          }}>
            <TextInput
              sx={{ marginRight: "20px" }}
              placeholder="Enter parent's name"
              name="name"
              id="name"
              value={values.name}
              onChange={(e) => setValues((prev) => ({...values, name: e.target.value}))}
              error={errors.name}
              helperText={errors.name}
            />

            <TextInput
              type="number"
              sx={{
                marginRight: "20px",
                marginTop: md ? ' 0.313rem' : '12px',
              }}
              placeholder="Enter parent's mobile number"
              name="phone_number"
              id="phone_number"
              value={values.phone_number}
              onChange={(e) => setValues((prev) => ({...values, phone_number: e.target.value}))}
              error={errors.phone}
              helperText={errors.phone}
            />

            <Box width={md ? '60%' : '100%'} sx={{mt: md ? '5px' : '17px'}}>
               <SButton
                style={{opacity:1}}
                type="reset"
                onClick={handleSubmit}
               >
                 Request callback
               </SButton>
            </Box>
          </Box>
        </div>
      </div>
    </div>
    </div>
  )
}

const SButton = styled(ButtonBase)({
  backgroundColor: '#3dae34',
  borderBottom:'5px solid #28931f',
  color: '#fff',
  fontSize: '18px',
  borderRadius: '60px',
  padding: '1rem 2rem',
  width: '100%',
  fontWeight: 600,
});

const TextInput = styled(TextField)({
  width: '100%',

  '& .MuiOutlinedInput-root': {
    color: '#333',
    fontSize: '1.1rem',
    margin: '0.313rem 0rem',
    padding: '0.2rem 0.5rem',
    backgroundColor:'#fff',
    outline: 'none',
    borderRadius: '32px',

    '& input': {
      padding: '10px 14px',
      '&::placeholder': {
        color: '#333',
        fontWeight: 500,
      },
    },

    '& fieldset': {
      borderColor: 'rgba(255, 255, 255, 0.5)',
      borderRadius: '32px',
      transition: '0.2s ease',
    },

    '&.Mui-focused fieldset': {
      borderColor: 'rgba(255, 255, 255, 1)',
      borderWidth: '1px',
    },

    '& svg': {
      color: '#000',
    },
  },
});

export default NeedHelp;
