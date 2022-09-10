import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import Box from '@mui/material/Box';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
//import react-player
import ReactPlayer from 'react-player';
import PlayIcon from '../../public/icons/IconPlay.svg'
import {styled} from '@mui/system'
import CloseIcon from '../../public/icons/IconCross.svg'
//import useBreakpoints
import useBreakpoints from '../../hooks/useBreakpoints'

export default function VideoDialog({open, handleClose, data}) {
  const { md } = useBreakpoints()
  return (
      <CustomDialog
        open={open}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          <Box sx={{
            display:'flex',
            justifyContent:'flex-end',
            cursor:'pointer',
          }}>
            <CloseIcon onClick={handleClose}/>
          </Box>
        </DialogTitle>
        <DialogContent>
          <ReactPlayer
            width= {md ? "700px" : '100%'}
            height={md ? "400px" : '200px'}
            url={data.link}
            playing={true}
            playIcon={<PlayIcon />}
          />
        </DialogContent>
      </CustomDialog>
  );
}

const CustomDialog = styled(Dialog)({
  '& .MuiPaper-root-MuiDialog-paper' : {
    width: '700px'
  }
})
