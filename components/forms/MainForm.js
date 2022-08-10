import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/MainForm.module.css'
//import mui components
import {Box , Divider, Typography , TextField, InputAdornment, Button} from '@mui/material';
import {styled} from '@mui/system';

const MainForm = () => {
  return (
    <div>
      <h4 className={styles.mainForm__header}>Book Your Free Demo Class</h4>

      <div className={styles.mainForm__formGroup}>
        <StyledTextField
          placeholder="Enter full name"
          // value={values.name}
          // onChange = {(e) =>setValues((prev) => ({...prev, name:e.target.value}))}
          // helperText={errors.name}
          // error={errors.name}
          // helperText={errors.name}
          // InputProps={{
          //   endAdornment:
          //   <InputAdornment position="end">
          //     <PersonIcon sx={{color:'#3458a1'}}/>
          //   </InputAdornment>
          // }}
         />
      </div>

      <div className={styles.mainForm__formGroup}>
        <StyledTextField
          placeholder="Enter full name"
          // value={values.name}
          // onChange = {(e) =>setValues((prev) => ({...prev, name:e.target.value}))}
          // helperText={errors.name}
          // error={errors.name}
          // helperText={errors.name}
          // InputProps={{
          //   endAdornment:
          //   <InputAdornment position="end">
          //     <PersonIcon sx={{color:'#3458a1'}}/>
          //   </InputAdornment>
          // }}
         />
      </div>

      <div className={styles.mainForm__formGroup}>
        <StyledTextField
          placeholder="Enter full name"
          // value={values.name}
          // onChange = {(e) =>setValues((prev) => ({...prev, name:e.target.value}))}
          // helperText={errors.name}
          // error={errors.name}
          // helperText={errors.name}
          // InputProps={{
          //   endAdornment:
          //   <InputAdornment position="end">
          //     <PersonIcon sx={{color:'#3458a1'}}/>
          //   </InputAdornment>
          // }}
         />
      </div>

      <div className={styles.mainForm__formGroup}>
        <StyledTextField
          placeholder="Enter full name"
          // value={values.name}
          // onChange = {(e) =>setValues((prev) => ({...prev, name:e.target.value}))}
          // helperText={errors.name}
          // error={errors.name}
          // helperText={errors.name}
          // InputProps={{
          //   endAdornment:
          //   <InputAdornment position="end">
          //     <PersonIcon sx={{color:'#3458a1'}}/>
          //   </InputAdornment>
          // }}
         />
      </div>

      <div className={styles.mainForm__button__container}>
        <button className={styles.mainForm__button}>Book a Free Demo</button>
      </div>
    </div>
  )
}

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
