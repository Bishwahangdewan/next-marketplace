import { Box, Typography } from '@mui/material';
import { CgCheckO } from 'react-icons/cg';
import { SButton } from '../../../globals/GlobalStyles';
import {useRouter} from 'next/router';
//import { useNavigate } from 'react-router-dom';
// import { trackTeacherDetails } from '../../../firebase/analytics';

const Congrats = ({ close }) => {
 // const navigate = useNavigate();

  // const handleContinue = () => {
  //   close();
  //   navigate('/home');
  // };

  const router = useRouter();

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    }} height="100%">
      <CgCheckO color="#4cbb17" size={150} />
      <Typography variant="h4" fontWeight="bold" marginTop="1rem">
        Congratulations
      </Typography>

      <Typography align="center" maxWidth="80%" marginTop="1rem">
        Your Slot is booked successfully. We will notify you on whatsapp with
        further details
      </Typography>

      <SButton
        sx={{ maxWidth: '80%', marginTop: '1rem' }}
        onClick={() => {
          router.push('/')
        }}
        variant="outlined"
      >
        Continue
      </SButton>
    </Box>
  );
};

export default Congrats;
