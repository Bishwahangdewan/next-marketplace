import styles from '../../styles/Register.module.css'
//import mui components
import { TextField, InputAdornment, Select, ListItemText, OutlinedInput, MenuItem, Checkbox, FormGroup, FormControl, FormControlLabel, RadioGroup, Radio, ButtonBase, Grid, Typography } from '@mui/material'
import { styled } from '@mui/system'
//react-phone-Input
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
//import assets
import DropDownIcon from '../../public/icons/DropDownIcon.svg'
import StateList from '../../globals/StateList.json'
//import components
import Footer from '../sections/global/Footer'
//import react components
import { useState, useEffect } from 'react'
//import formik
import { useFormik } from 'formik'
//import class-subject data
import { standard, subjects, registerFormCheckboxValues } from '../../globals/GlobalData.js'
//snackbar components
import { useSnackbar } from 'notistack';
import showSuccessSnackbar from '../snackbar/SuccessSnackbar'
import showErrorSnackbar from '../snackbar/ErrorSnackbar'
//import breakpoints
import useBreakpoints from '../../hooks/useBreakpoints'

const MobileLabel = () => {
  return(
    <div className={styles.mobile__label}>
       <p className={styles.mobile__label__text}>+91</p>
    </div>
  )
}

const RegisterForm = () => {
  const [cityOptions, setCityOptions] = useState([])
  const [classValue, setClassValue] = useState('')
  const [subjectValue, setSubjectValue] = useState('')
  const [radioValue, setRadioValue] = useState('no');
  const [errors,setErrors] = useState({})
  const { enqueueSnackbar } = useSnackbar()
  const { md } = useBreakpoints()

  {/*FOR ONLY 10DIGIT PHONE NUMBER*/}
  const handleMobileChange = (e) => {
    let value = e.target.value.split(" ").join("");
    if (value.length <= 10) {
      formik.setFieldValue('phone_number', e.target.value);
    }
  }

  const handleWhatsappMobileChange = (e) => {
    let value = e.target.value.split(" ").join("");
    if (value.length <= 10) {
      formik.setFieldValue('whatsapp_phone_number', e.target.value);
    }
  }

  const handlePinChange = (e) => {
    let value = e.target.value.split(" ").join("");
    if (value.length <= 6) {
      formik.setFieldValue('pincode', e.target.value);
    }
  }

  {/*---FORM VALIDATION---*/}
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

    if (!values.whatsapp_phone_number) {
      errors.whatsapp_phone_number = 'This field is required';
    } else if (values.whatsapp_phone_number[0] === '0') {
      errors.whatsapp_phone_number = "Phone phone_number can't start with 0";
    } else if (specialCharactersRegex.test(values.whatsapp_phone_number)) {
      errors.whatsapp_phone_number = "Phone Number can't have special characters";
    } else if (!regex.test(values.whatsapp_phone_number)) {
      errors.whatsapp_phone_number = 'Invalid phone number';
    }

    if (values.state === 'Select State') {
      errors.state = 'This field is required';
    }

    if (values.city === 'Select City') {
      errors.city = 'This field is required';
    }

    if (!values.teaching_classes.length > 0) {
      errors.teaching_classes = 'This field is required';
    }

    if (!values.teaching_subjects.length > 0) {
      errors.teaching_subjects = 'This field is required';
    }

    if (values.education_board.length === 0) {
      errors.education_board = 'This field is required';
    }

    if (!values.intro_video) {
      errors.intro_video = 'This field is required';
    } else if (!values.intro_video.match(checkLink)) {
      errors.intro_video = 'Invalid Url';
    }

    if (!values.pincode) {
      errors.pincode = 'This field is required';
    } else if (values.pincode.length !== 6) {
      errors.pincode = 'Invalid Pin Code';
    }

    return errors;
  };


  const formik = useFormik({
    initialValues: {
      name: '',
      phone_number: '',
      whatsapp_phone_number:'',
      state: 'Select State',
      city: 'Select City',
      taking_coaching_classes: 'no',
      teaching_classes: [],
      teaching_subjects: [],
      education_board: [],
      intro_video: '',
      pincode: '',
    },
    onSubmit:async (values) => {

      const errs = validate(values)
      setErrors(errs)
      console.log(values)

      if(Object.keys(errs).length === 0){
        const requestOptions = {
           method: 'POST',
           headers: { 'Content-Type': 'application/json' },
           body: JSON.stringify(values)
        }

        const response = await fetch('https://api.develop.edvi.app/marketplace/register-teacher/', requestOptions);
        const responseData = await response.json()

        if (response.status === 200){
          showSuccessSnackbar(
            enqueueSnackbar,
            'Submitted',
          );
        } else {
          const errs = Object.values(responseData)
          showErrorSnackbar(
            enqueueSnackbar,
            errs[0],
          );
        }

        setClassValue('')
        setSubjectValue('')
        formik.resetForm()
      }
    }
  });

  {/*---CITY DEPENDING ON STATE ---*/}
  useEffect(() => {
    StateList.forEach((list) => {
      if(list.state === formik.values.state){
        setCityOptions(list.districts)
      }
    })
  })

  return (
    <div>
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

          <div className={styles.form__group}>
            <p className={styles.form__label}>Whatsapp No</p>
              <div className={styles.phone__input__container}>
                <RegisterTextField
                  type="number"
                  placeholder = "Enter your whatsapp no"
                  value={formik.values.whatsapp_phone_number}
                  error={errors.whatsapp_phone_number}
                  helperText={errors.whatsapp_phone_number}
                  onChange={(e) => { handleWhatsappMobileChange(e) }}
                  onBlur={(e) => { formik.setFieldValue('whatsapp_phone_number', e.target.value.split(" ").join("")) }}
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

        <div className={styles.form__group__container}>
          <div className={styles.form__group}>
            <p className={styles.form__label}>State</p>
              <div className={styles.phone__input__container}>
                <RegisterTextField
                  select
                  placeholder = "Select State"
                  value={formik.values.state}
                  error={errors.state}
                  helperText={errors.state}
                  onChange={(e) => {
                    formik.setValues((prev) => ({
                      ...prev,
                      state: e.target.value,
                    }));
                  }}
                 >
                  {StateList.map((list) => (
                    <MenuItem
                      key={list.state}
                      value={list.state}
                    >{list.state}</MenuItem>
                  ))}
                 </RegisterTextField>
              </div>
          </div>

          <div className={styles.form__group}>
            <p className={styles.form__label}>City</p>
              <div className={styles.phone__input__container}>
                <RegisterTextField
                  select
                  placeholder = "Select City"
                  value={formik.values.city}
                  error={errors.city}
                  helperText={errors.city}
                  onChange={(e) => {
                    formik.setValues((prev) => ({
                      ...prev,
                      city: e.target.value,
                    }));
                  }}
                 >
                  {cityOptions.map((city) => (
                    <MenuItem
                      key={city}
                      value={city}
                    >{city}</MenuItem>
                  ))}
                 </RegisterTextField>
              </div>
          </div>
        </div>

        <div className={styles.form__group__container}>
          <div className={styles.form__group}>
            <p className={styles.form__label}>PIN code</p>
            <RegisterTextField
              type="number"
              placeholder = "Enter 6 digit PIN code"
              value={formik.values.pincode}
              error={errors.pincode}
              helperText={errors.pincode}
              onChange={(e) => { handlePinChange(e) }}
              onBlur={(e) => { formik.setFieldValue('pincode', e.target.value.split(" ").join("")) }}
             />
          </div>
        </div>

        <hr className={styles.line__break} />

        <div className={styles.form__group__container}>
          <div className={styles.form__group}>
            <p className={styles.form__label}>What classes you teach?</p>
              <div className={styles.phone__input__container}>
                <Select
                  id="classes"
                  multiple
                  value={formik.values.teaching_classes}
                  input={
                    <OutlinedInput
                      fullWidth
                      placeholder="Select Classes"
                      sx={{
                        fontSize: '1.25rem',
                        margin: '0.313rem 0rem',

                        '&.Mui-focused fieldset': {
                          borderWidth: '1px !important',
                        },
                      }}
                      error={errors.teaching_classes}
                      helperText={errors.teaching_classes}
                    />
                  }
                  renderValue={(selected) => selected.join(', ')}
                >
                  {divisions.map((division) => (
                    <MenuItem
                      key={division}
                      value={division}
                      onClick={() => {
                        if (formik.values.teaching_classes.includes(division)) {
                          formik.setValues((prev) => ({
                            ...prev,
                            teaching_classes: prev.teaching_classes.filter(
                              (d) => d !== division
                            ),
                          }));
                        } else {
                          formik.setValues((prev) => ({
                            ...prev,
                            teaching_classes: [
                              ...prev.teaching_classes,
                              division,
                            ],
                          }));
                        }
                      }}
                    >
                      <Checkbox
                        checked={formik.values.teaching_classes.includes(
                          division
                        )}
                      />
                      <ListItemText primary={division} />
                    </MenuItem>
                  ))}
                </Select>
              </div>
          </div>

          <div className={styles.form__group}>
            <p className={styles.form__label}>What subjects you teach?</p>
              <div className={styles.phone__input__container}>
                <Select
                  id="subjects"
                  multiple
                  value={formik.values.teaching_subjects}
                  input={
                    <OutlinedInput
                      fullWidth
                      placeholder="Select Classes"
                      sx={{
                        fontSize: '1.25rem',
                        margin: '0.313rem 0rem',

                        '&.Mui-focused fieldset': {
                          borderWidth: '1px !important',
                        },
                      }}
                      error={errors.teaching_subjects}
                      helperText={errors.teaching_subjects}
                    />
                  }
                  renderValue={(selected) => selected.join(', ')}
                >
                  {subjects.map((subject) => (
                    <MenuItem
                      key={subject}
                      value={subject}
                      onClick={() => {
                        if (formik.values.teaching_subjects.includes(subject)) {
                          formik.setValues((prev) => ({
                            ...prev,
                            teaching_subjects: prev.teaching_subjects.filter(
                              (d) => d !== subject
                            ),
                          }));
                        } else {
                          formik.setValues((prev) => ({
                            ...prev,
                            teaching_subjects: [
                              ...prev.teaching_subjects,
                              subject,
                            ],
                          }));
                        }
                      }}
                    >
                      <Checkbox
                        checked={formik.values.teaching_subjects.includes(
                          subject
                        )}
                      />
                      <ListItemText primary={subject} />
                    </MenuItem>
                  ))}
                </Select>
              </div>
          </div>
        </div>


        <div className={styles.form__group__container}>
          <div className={styles.form__group}>
            <p className={styles.form__label}>Boards?</p>
            <div style={{paddingTop:0}} className={styles.form__group__container}>
              <div style={{
                display:md ? 'flex': 'grid',gridTemplateColumns: md ? '':'auto auto', alignItems:'center', marginLeft:'-10px'}}>
                {registerFormCheckboxValues.map((item) => (
                  <CheckboxComponent key={item} item={item} formik={formik}/>
                ))}

                {errors.education_board && (
                  <Typography
                    sx={{
                      fontWeight: '400',
                      fontSize: '0.75rem',
                      lineHeight: 1.66,
                      textAlign: 'left',
                      marginTop: '3px',
                      marginRight: '14px',
                      marginBottom: '0px',
                      marginLeft: '14px',
                      color: '#d32f2f',
                    }}
                  >
                    This field is required
                  </Typography>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className={styles.form__group__container}>
          <div className={styles.form__group}>
            <p className={styles.form__label}>Are you currently taking coaching classes?</p>
              <FormControl>
                <RadioGroup
                  name="controlled-radio-buttons-group"
                  value={radioValue}
                  onChange={(e) => {
                    formik.setValues((prev) => ({
                      ...prev,
                      taking_coaching_classes: e.target.value
                    }))
                    setRadioValue(e.target.value)
                  }}
                 row>
                 <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                 <FormControlLabel sx={{paddingLeft:'40px'}} value="no" control={<Radio />} label="No" />
               </RadioGroup>
              </FormControl>
          </div>
        </div>

        <div className={styles.form__group__container}>
          <div className={styles.form__group}>
            <p className={styles.form__label}>URL(Link) to your demo video
              {md && <span className={styles.text__red}>(do not paste random links)</span>}
            </p>
            <RegisterTextField
              sx={{width: md ? '730px !important' : '100%'}}
              placeholder = "Your demo video (Google Drive or Youtube link)"
              value={formik.values.intro_video}
              onChange={(e) => {
                formik.setValues((prev) => ({
                  ...prev,
                  intro_video: e.target.value
                }))
              }}
              error={errors.intro_video}
              helperText={errors.intro_video}
             />
          </div>
        </div>

        <a href="https://youtu.be/X9e3LLTfl_Y" target="_blank" rel="noreferrer" className={styles.form__link}>How to make demo video ?</a>

        <hr className={styles.line__break2} />

        <SubmitButton sx={{
          width: md ? '420px' : '100%',
        }} onClick={formik.handleSubmit}>
          Submit
        </SubmitButton>
      </div>

      <Footer />
    </div>
  )
}


// const RegisterCheckbox = ({value, formik}) => {
//   const handleCheckbox = (e) => {
//     if(e.target.checked === true){
//       console.log("true")
//       console.log(formik.values)
//     } else {
//       console.log("false")
//     }
//   }

  const CheckboxComponent = ({item, formik}) => {
    const handleCheckbox = (e) => {
      if(e.target.checked === false){
        formik.setValues((prev) => ({
          ...prev,
          education_board: formik.values.education_board.filter((board) => board !== e.target.value),
        }))
      } else {
        formik.values.education_board.push(e.target.value)
      }
    }

    return(
      <div key={item} style={{
        display:'flex',
        alignItems:'center',
        marginRight:'20px',
      }}>
       <Checkbox
         value={item}
         // checked={formik.values.education_board === item}
         // onChange={() => {
         //   formik.setValues((prev) => ({
         //     ...prev,
         //     education_board: item,
         //   }));
         // }}
         onChange={handleCheckbox}
       />
       <Typography sx={{fontFamily: 'Poppins'}}>{item}</Typography>
     </div>
    )
  }

const SubmitButton = styled(ButtonBase)({
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
  marginBottom: '30px',
});

const RegisterTextField = styled(TextField)({
  width: '345px',

  '& .MuiOutlinedInput-root': {
    borderRadius:'3px',
  },

  '& .MuiOutlinedInput-input': {
    padding:'12px 12px 12px 15px',
  },
})

const divisions = ['1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th', '9th', '10th', '11th', '12th'];

export default RegisterForm
