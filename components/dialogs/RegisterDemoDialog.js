import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Slide from '@mui/material/Slide';
import CloseIcon from '../../public/icons/IconCross.svg';
import YoutubeIcon from '../../public/icons/IconYoutube.svg';
import {styled} from '@mui/system';

// const Transition = React.forwardRef((props,ref)=>{
//     return <Slide direction="down" ref={ref} {...props} />
// })

const RegisterDemoDialog = ({open , handleClose}) =>{
    return(
        <CustomDialog
            open={open}
            keepMounted
            onClose={handleClose}
            disableAutoFocus
            aria-describedby="alert-dialog-slide-description"
        >
          <Box sx={{
            display:'flex',
            justifyContent:'flex-end',
            cursor:'pointer',
            paddingTop:"15px",
            paddingRight:"15px",
          }}>
            <CloseIcon onClick={handleClose}/>
          </Box>
          <DialogTitle sx={{
            fontFamily: 'Lato',
            fontSize: '22px',
            fontWeight: 'bold',
            textAlign: 'center',
            color: '#3458a1',
            padding:0,
          }}>What is a demo video?</DialogTitle>
          <DialogContent sx={{
            marginTop: '5px',
            paddingBottom: 0,
          }}>
              <DialogContentText
                id="alert-dialog-slide-description"
                sx={{
                  fontFamily: 'Poppins',
                  fontSize: '14px',
                  fontWeight: '500',
                  color: '#333',
                  textAlign: 'center',
                }}>
                  Demo video is a video that you will record while teaching some topic.
              </DialogContentText>
              <DialogContentText
                id="alert-dialog-slide-description"
                sx={{
                  fontFamily: 'Poppins',
                  fontSize: '14px',
                  fontWeight: '500',
                  color: '#333',
                  textAlign: 'center',
                }}>
                  This video can be 5-10 mins long.
              </DialogContentText>
          </DialogContent>

          <DialogContent sx={{
            marginTop: '15px',
            padding:0,
          }}>
              <DialogContentText
                id="alert-dialog-slide-description"
                sx={{
                  fontFamily: 'Poppins',
                  fontSize: '14px',
                  fontWeight: '500',
                  color: '#333',
                  textAlign: 'center',
                }}>
                See a sample
                <a href="https://www.youtube.com/watch?v=X9e3LLTfl_Y"
                  rel="noreferrer"
                  target="_blank"
                  style={{
                  fontFamily: 'Poppins',
                  fontSize: '14px',
                  fontWeight: '500',
                  color: '#3458a1',
                  borderBottom: '1px solid #3458a1',
                }}> demo video here.</a>
              </DialogContentText>
          </DialogContent>


          <Box sx={{
            marginTop:'30px',
          }}>
            <DialogTitle sx={{
              fontFamily: 'Lato',
              fontSize: '22px',
              fontWeight: 'bold',
              textAlign: 'center',
              color: '#3458a1',
              padding:0,
            }}>How to upload demo video?</DialogTitle>

            <DialogContent sx={{
              marginTop: '5px',
              padding:0,
            }}>
                <DialogContentText
                  id="alert-dialog-slide-description"
                  sx={{
                    fontFamily: 'Poppins',
                    fontSize: '14px',
                    fontWeight: '500',
                    color: '#333',
                    textAlign: 'center',
                  }}>
                    After recording the video upload it on
                  <p style={{
                    display:'inline',
                    fontFamily: 'Poppins',
                    fontSize: '14px',
                    fontWeight: '500',
                    color: '#3458a1',
                  }}> Google Drive </p>
                  or
                  <p style={{
                    display:'inline',
                    fontFamily: 'Poppins',
                    fontSize: '14px',
                    fontWeight: '500',
                    color: '#3458a1',
                  }}> Youtube. </p>
                  Make
                </DialogContentText>
            </DialogContent>

            <DialogContent sx={{
              padding:0,
            }}>
                <DialogContentText
                  id="alert-dialog-slide-description"
                  sx={{
                    fontFamily: 'Poppins',
                    fontSize: '14px',
                    fontWeight: '500',
                    color: '#333',
                    textAlign: 'center',
                  }}>
                  sure it is open to public so that our team can review the video & share
                </DialogContentText>
            </DialogContent>

            <DialogContent sx={{
              padding:0,
            }}>
                <DialogContentText
                  id="alert-dialog-slide-description"
                  sx={{
                    fontFamily: 'Poppins',
                    fontSize: '14px',
                    fontWeight: '500',
                    color: '#333',
                    textAlign: 'center',
                  }}>
                  feedback as soon as possible.
                </DialogContentText>
            </DialogContent>
          </Box>

          <Box sx={{
            width: '341px',
            margin: 'auto',
            marginTop: '20px',
            display:'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '8px',
            backgroundColor: '#fff8e6',
            padding:'10px',
          }}>
            <YoutubeIcon />
            <Box sx={{
              paddingLeft:'10px'
            }}>
              <DialogContentText
                id="alert-dialog-slide-description"
                sx={{
                  fontFamily: 'Poppins',
                  fontSize: '14px',
                  fontWeight: '500',
                  color: '#333',
                  textAlign: 'center',
                }}>
                Watch this video to know more.
              </DialogContentText>

                <a href="https://www.youtube.com/watch?v=X9e3LLTfl_Y"
                  rel="noreferrer"
                  target="_blank"
                  style={{
                  fontFamily: 'Poppins',
                  fontSize: '16px',
                  fontWeight: '500',
                  color: '#3458a1',
                  paddingLeft:'9px',
                }}>https://youtu.be/X9e3LLTfl_Y</a>
            </Box>
          </Box>

          <DialogContent sx={{
            padding: 0,
            marginTop: '25px',
            paddingBottom: '15px',
          }}>
              <DialogContentText
                id="alert-dialog-slide-description"
                sx={{
                  fontFamily: 'Poppins',
                  fontSize: '14px',
                  fontWeight: 700,
                  color: '#000',
                  textAlign: 'center',
                }}>
                Contact us on +91-8448223321
              </DialogContentText>
          </DialogContent>
        </CustomDialog>
    )
}

const CustomDialog = styled(Dialog)({
  '& .MuiPaper-root':{
    width: '900px',
    borderRadius: '8px',
  }
})

export default RegisterDemoDialog;
