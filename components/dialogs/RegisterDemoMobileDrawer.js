import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Typography from '@mui/material/Typography';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import CloseIcon from '../../public/icons/IconCross.svg';
import YouTubeIcon from '../../public/icons/IconYoutube.svg';
import {styled} from '@mui/material';

export default function RegisterDemoMobileDrawer() {
  const [state, setState] = React.useState({
    bottom: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
    >
      <Box sx={{
        display:'flex',
        justifyContent:'flex-end',
        cursor:'pointer',
        paddingTop:"15px",
        paddingRight:"15px",
      }}>
        <CloseIcon onClick={toggleDrawer(anchor, false)}/>
      </Box>
      <Box sx={{padding: '0 20px'}}>
      <DialogTitle sx={{
        fontFamily: 'Lato',
        fontSize: '22px',
        fontWeight: 'bold',
        color: '#3458a1',
        padding:0,
      }}>What is a demo video?</DialogTitle>
      <DialogContent sx={{
        marginTop: '5px',
        paddingBottom: 0,
        paddingLeft:0,
      }}>
          <DialogContentText
            id="alert-dialog-slide-description"
            sx={{
              fontFamily: 'Poppins',
              fontSize: '14px',
              fontWeight: '500',
              color: '#333',
            }}>
              Demo video is a video that you will record while teaching some topic. This video can be
          </DialogContentText>
          <DialogContentText
            id="alert-dialog-slide-description"
            sx={{
              fontFamily: 'Poppins',
              fontSize: '14px',
              fontWeight: '500',
              color: '#333',
            }}>
              5-10 mins long.
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
            }}>
            See a sample
            <a href="https://www.youtube.com/watch?v=X9e3LLTfl_Y"
              rel="noreferrer"
              target="_blank" style={{
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
          color: '#3458a1',
          padding:0,
        }}>How to upload demo video?</DialogTitle>

        <DialogContent sx={{
          marginTop: '5px',
          padding:0,
          paddingLeft: 0,
        }}>
            <DialogContentText
              id="alert-dialog-slide-description"
              sx={{
                fontFamily: 'Poppins',
                fontSize: '14px',
                fontWeight: '500',
                color: '#333',
              }}>
                After recording the video upload it on
              <p href="#" style={{
                display: 'inline',
                fontFamily: 'Poppins',
                fontSize: '14px',
                fontWeight: '500',
                color: '#3458a1',
              }}> Google Drive </p>
              or
              <p href="#" style={{
                display: 'inline',
                fontFamily: 'Poppins',
                fontSize: '14px',
                fontWeight: '500',
                color: '#3458a1',
              }}> Youtube. </p>
              Make sure it is open to public
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
              }}>
              so that our team can review the video & share
            </DialogContentText>
        </DialogContent>

        <DialogContent sx={{
          padding:0,
          paddingLeft:0,
        }}>
            <DialogContentText
              id="alert-dialog-slide-description"
              sx={{
                fontFamily: 'Poppins',
                fontSize: '14px',
                fontWeight: '500',
                color: '#333',
              }}>
              feedback as soon as possible.
            </DialogContentText>
        </DialogContent>
      </Box>

      <Box sx={{
        width: '100%',
        margin: 'auto',
        marginTop: '20px',
        display:'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '8px',
        backgroundColor: '#fff8e6',
        padding:'10px',
      }}>
        <YouTubeIcon />
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
              target="_blank" style={{
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
        paddingBottom: '20px',
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
      </Box>
    </Box>
  );

  return (
    <div>
        <React.Fragment>
          <p
            style={{
              display: 'inline-block',
              marginTop: '15px',
              fontFamily: 'Poppins',
              fontSize: '14px',
              color: '#3458a1',
              cursor: 'pointer',
              borderBottom: '1px solid #3458a1',
            }}
            onClick={toggleDrawer('bottom',true)}
          >How to make demo video ?</p>
          <CustomDrawer
            anchor='bottom'
            open={state['bottom']}
            onClose={toggleDrawer('bottom', false)}
          >
            {list('bottom')}
          </CustomDrawer>
        </React.Fragment>
    </div>
  );
}

const CustomDrawer = styled(Drawer)({
  '& .MuiPaper-root':{
    borderRadius: '8px',
  }
})
