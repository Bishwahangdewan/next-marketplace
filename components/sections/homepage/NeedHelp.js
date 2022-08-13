import Head from 'next/head'
import Image from 'next/image'
import styles from '../../../styles/NeedHelp.module.css'
//@mui-components
import { Card, Typography, ButtonBase, TextField, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const NeedHelp = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 250 1440 40"><path fill="#fff" fill-opacity="1" d="M0,288L80,282.7C160,277,320,267,480,261.3C640,256,800,256,960,261.3C1120,267,1280,277,1360,282.7L1440,288L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
      </div>

      <div className={styles.content}>
        <h1 className={styles.header}>Need help from our expert?</h1>
        <p className={styles.para}>Please enter your details, our team will help you find a perfect teacher</p>

        <div className={styles.form__container}>
          <Box sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: 'top',
          }}>
            <TextInput
              sx={{ marginRight: "20px" }}
              placeholder="Enter parent's name"
              name="name"
              id="name"
            />

            <TextInput
              type="number"
              sx={{ marginRight: "20px" }}
              placeholder="Enter parent's mobile number"
              name="phone_number"
              id="phone_number"
            />

            <Box width="60%" sx={{mt: '5px'}}>
               <SButton style={{opacity:1}} type="reset">Request callback</SButton>
            </Box>
          </Box>
        </div>

        <div className={styles.bottom}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 100 1440 200"><path fill="#fff" fill-opacity="1" d="M0,288L80,282.7C160,277,320,267,480,261.3C640,256,800,256,960,261.3C1120,267,1280,277,1360,282.7L1440,288L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
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
  borderRadius: '24px',
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
