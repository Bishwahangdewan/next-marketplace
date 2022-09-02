import styles from '../../styles/RequestCallback.module.css'
import Link from 'next/link'
//import assets
import IconCross from '../../public/icons/IconCross.svg'
//import react components
import { useState, forwardRef } from 'react'
//import mui components
import { TextField, Dialog, Slide, InputAdornment, ButtonBase } from '@mui/material'
import { styled } from '@mui/system'
//import formik
import { useFormik } from 'formik'
//import snackbar components
import { useSnackbar } from 'notistack';
import showSuccessSnackbar from '../snackbar/SuccessSnackbar'
import showErrorSnackbar from '../snackbar/ErrorSnackbar'

const SlideTransition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const MobileLabel = () => {
    return(
      <div className={styles.mobile__label}>
         <p className={styles.mobile__label__text}>+91</p>
      </div>
    )
  }

const RequestCallback = ({open, handleClose}) => {
    const [errors,setErrors] = useState({})
    const { enqueueSnackbar } = useSnackbar()

    {/*FOR ONLY 10DIGIT PHONE NUMBER*/}
    const handleMobileChange = (e) => {
        let value = e.target.value.split(" ").join("");
        if (value.length <= 10) {
        formik.setFieldValue('phone_number', e.target.value);
        }
    }

    const validate = (values) => {
        let errors = {};
        const regex = /^\d{10}$/;
        const specialCharactersRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    
        const expression =
          /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
        const checkLink = new RegExp(expression);
    
        values.phone_number = values.phone_number.split(" ").join("");
    
        if (!values.name) {
          errors.name = 'This field is required';
        } else if (values.name.length > 50) {
          errors.name = 'Max 50 characters are allowed';
        }
    
        if (!values.phone_number) {
          errors.phone_number = 'This field is required';
        } else if (values.phone_number[0] === '0') {
          errors.phone_number = "Phone number can't start with 0";
        } else if (specialCharactersRegex.test(values.phone_number)) {
          errors.phone_number = "Phone Number can't have special characters";
        } else if (!regex.test(values.phone_number)) {
          errors.phone_number = 'Invalid phone number';
        }
    
        return errors;
      };

    const formik = useFormik({
        initialValues: {
          name: '',
          phone_number: '',
        },
        onSubmit:async (values) => {
    
          const errs = validate(values)
          setErrors(errs)
          
          const payload = {
            name: values.name,
            phone_number: `91${values.phone_number}`
          }
    
          if(Object.keys(errs).length === 0){
            const requestOptions = {
               method: 'POST',
               headers: { 'Content-Type': 'application/json' },
               body: JSON.stringify(payload)
            }
    
            const response = await fetch('https://api.edvi.app/help-request/', requestOptions);
            const responseData = await response.json()
    
            if (response.status === 201){
              showSuccessSnackbar(
                enqueueSnackbar,
                'Submitted',
              );

              formik.setValues((prev) => ({
                ...prev,
                name: '',
                phone_number: '',
               }))
              }

              handleClose()

            } else {
              const errs = Object.values(responseData)
              showErrorSnackbar(
                enqueueSnackbar,
                errs[0],
              );

            }
        }
      });

      
    return (
        <Dialog 
            open={open} 
            fullScreen 
            TransitionComponent={SlideTransition}
        >
            <div className={styles.drawer__container}>
                <div className={styles.drawer__header}>
                    <div className={styles.showcase__navbar}>
                        <Link href="/">
                        <a><img src="/icons/LogoWhite.svg" className={styles.showcase__navbar__logo} /></a>
                        </Link>

                        <div className={styles.showcase__navlinks__container}>
                            <div className={styles.icon__cross__bg}>
                                <IconCross 
                                onClick={handleClose} 
                                className={styles.icon__cross}
                                />
                            </div>
                        </div>
                    </div>
                    <hr className={styles.white__line} />

                    <h2 className={styles.header__text}>Request a Callback</h2>
                </div>

                <div className={styles.form__container}>
                    <div className={styles.form__group__container}>
                        <div className={styles.form__group}>
                            <p className={styles.form__label}>Name</p>
                            <RegisterTextField
                            placeholder = "Enter the name"
                            value={formik.values.name}
                            onChange={(e) => {
                                formik.setValues((prev) => ({
                                ...prev,
                                name: e.target.value
                                }))
                            }}
                            error={errors.name}
                            helperText={errors.name}
                            />
                        </div>
                    </div>
                

                <div className={styles.form__group__container}>
                    <div className={styles.form__group}>
                        <p className={styles.form__label}>Mobile No</p>
                        <div className={styles.phone__input__container}>
                        <RegisterTextField
                            type="number"
                            placeholder = "Enter the mobile no"
                            value={formik.values.phone_number}
                            error={errors.phone_number}
                            helperText={errors.phone_number}
                            onChange={(e) => { handleMobileChange(e) }}
                            onBlur={(e) => { formik.setFieldValue('phone_number', e.target.value.split(" ").join("")) }}
                            InputProps = {{
                            startAdornment : (
                                <InputAdornment position="start">
                                <MobileLabel />
                                </InputAdornment>
                            )
                            }}
                        />
                        </div>
                    </div>
                </div>
                            
                <SubmitButton
                    onClick={formik.handleSubmit}>
                    Submit
                </SubmitButton>
            </div>

            </div>
        </Dialog>
    )
}

const RegisterTextField = styled(TextField)({
    width: '345px',
  
    '& .MuiOutlinedInput-root': {
      borderRadius:'3px',
    },
  
    '& .MuiOutlinedInput-input': {
      padding:'12px 12px 12px 15px',
    },
  })

const SubmitButton = styled(ButtonBase)({
    position: 'fixed',
    bottom: '20px',
    width: '90%',
    margin:'auto',
    backgroundColor: '#3dae34',
    borderBottom:'3px solid #28931f',
    padding: '12px 0',
    color: '#fff',
    fontSize: '20px',
    borderRadius: '60px',
    paddingTop: '15px',
    fontWeight: 600,
    fontFamily: 'Lato',
    marginTop: '30px',
    marginBottom: '10px',
});
  
  

export default RequestCallback