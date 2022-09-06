import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import Slide from '@mui/material/Slide';

// const Transition = React.forwardRef((props,ref)=>{
//     return <Slide direction="down" ref={ref} {...props} />
// })

const LeadConfirmDialog = ({open , handleClose ,confirmBooking}) =>{
    return(
        <Dialog
            open={open}
            keepMounted
            onClose={handleClose}
            aria-describedby="alert-dialog-slide-description"
        >
            <DialogTitle>Do you want to Confirm Booking?</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-slide-description">You cannot book again once you confirm</DialogContentText>
            </DialogContent>

            <DialogActions>
                <Button onClick={handleClose}>Close</Button>
                <Button onClick={confirmBooking}>ConFirm Booking</Button>
            </DialogActions>
        </Dialog>
    )
}

export default LeadConfirmDialog;
