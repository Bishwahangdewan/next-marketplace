import { forwardRef } from 'react';
import { Button, TextField, InputBase } from '@mui/material';
import { styled } from '@mui/material/styles';
import Slide from '@mui/material/Slide';

const SButton = styled(Button)({
  color: '#fff',
  fontSize: '1.1rem',
  borderRadius: '24px',
  width: '100%',
  textTransform: 'none',

  '&.MuiButton-contained': {
    backgroundColor: '#4A80ED',
  },

  '&.MuiButton-outlined': {
    color: '#000',
    borderColor: '#000',
  },

  '&.MuiButton-text': {
    color: 'rgba(0, 0, 0, 0.7)',
    fontSize: '1.1rem',
    fontWeight: 'bold',
  },
});

const TextInputSquare = styled(TextField)({
  width: '100%',

  '& .MuiOutlinedInput-root': {
    color: '#000',
    fontSize: '1.1rem',
    margin: '0.313rem 0rem',

    '& input': {
      padding: '10px 14px',
    },

    '& fieldset': {
      borderColor: 'rgba(0, 0, 0, 0.5)',
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

const SlideTransition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export {
  SButton,
  SlideTransition,
  TextInputSquare
};
