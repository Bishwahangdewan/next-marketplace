import styles from '../../styles/MainForm.module.css'
import {useState ,useEffect , useContext, forwardRef} from 'react';
import {Box,Typography , Button , Dialog , MenuItem , Chip, TextField, Slide} from '@mui/material';
import {styled} from '@mui/system';
import CloseIcon from '@mui/icons-material/Close';
import Spinner from '../progress/Spinner';
import LeadConfirmDialog from '../dialogs/LeadConfirmDialog';
import CancelIcon from '@mui/icons-material/Cancel';
import {list} from '../../globals/GlobalFunctions.js';
import { useRouter } from 'next/router'
//react-phone-Input
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
//snackbar components
import { useSnackbar } from 'notistack';
import showSuccessSnackbar from '../snackbar/SuccessSnackbar'
import showErrorSnackbar from '../snackbar/ErrorSnackbar'


const SlideTransition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});



const RequestFormMobile = ({leadsData, setLeadsData, isBooked}) =>{
  const [openEditForm , setOpenEditForm] = useState(false);
	const [showConfirmDialog , setShowConfirmDialog ] = useState(false);
	const router = useRouter()
	const { enqueueSnackbar } = useSnackbar()

  const handleClose = () =>{
    setOpenEditForm(false);
  }

  const handleCloseConfirmDialog = () =>{
    setShowConfirmDialog(false)
  }

	const confirmBooking = async () =>{
		const parameter = router.asPath.split("=")[1];

		try {
			const res = await fetch(`https://b2b.develop.edvi.app/qualified-lead/confirm-lead-verification/?request_id=${parameter}`,{
				method: 'POST',
				headers: {
					 "Content-type": "application/json; charset=UTF-8"
			 }
			});
			const resData = await res.json()
			console.log(res)
			console.log(resData)
			if(resData.status_code === 200){
				showSuccessSnackbar(enqueueSnackbar, 'Free Demo Booked Successfully');
			}
		}catch(err){
			return err;
		}

		router.push("/");
	}

	return(
		<Box sx={{backgroundColor:"#dbebfb"}}>
			<Box sx={{padding:"26px 30px" , boxShadow:"2px 2px 10px #ddd" ,  backgroundColor:"#fff"}}>
				<Typography sx={{fontSize:"22px" , fontWeight:"600" , textAlign:"center"}}>Request Form</Typography>
			</Box>

      {isBooked && (
        <Box sx={{height:"100vh",display:"flex" , justifyContent:'center'}}>
          <Typography sx={{fontSize:"22px",mt:"60%" , color:"red"}}>Request is Invalid or Expired.</Typography>
        </Box>
      )}

      {!isBooked && leadsData && <DetailsCard openEditForm={setOpenEditForm} leadsData={leadsData} setShowConfirmDialog={setShowConfirmDialog} />}

			{openEditForm && leadsData && <EditFormDialog open={openEditForm} handleClose={handleClose} leadsData={leadsData} setLeadsData={setLeadsData} setShowConfirmDialog={setShowConfirmDialog}/>}

      {showConfirmDialog && <LeadConfirmDialog open={showConfirmDialog} handleClose={handleCloseConfirmDialog} confirmBooking={confirmBooking}/>}
		</Box>
	)
}

const DetailsCard = ({openEditForm , leadsData , setShowConfirmDialog}) =>{
		const { board,  customer, standard, subject } = leadsData;

	return(
		<Box sx={{backgroundColor:"#dbebfb"}}>
			<Box sx={{mt:"10px" , backgroundColor:"#fff"}}>
				<Box sx={{padding:"17px" , borderBottom:"1px solid #ddd"}}>
					<Typography sx={{fontSize:"17px"}}>Name</Typography>
					<Typography sx={{fontSize:"20px" , fontWeight:"bold" , mt:"-3px"}}>{customer.name}</Typography>
				</Box>

				<Box sx={{padding:"17px" , borderBottom:"1px solid #ddd"}}>
					<Typography sx={{fontSize:"17px"}}>Class</Typography>
					<Typography sx={{fontSize:"20px" , fontWeight:"bold" , mt:"-3px"}}>{standard}</Typography>
				</Box>

				<Box sx={{padding:"17px" , borderBottom:"1px solid #ddd"}}>
					<Typography sx={{fontSize:"17px"}}>Subject</Typography>
					<Box sx={{wisth:"100%" ,display:"flex" , flexWrap:"wrap"}}>

							<Typography sx={{fontSize:"20px" , fontWeight:"bold" , mt:"-3px"}}>{list(subject)}</Typography>

					</Box>
				</Box>

				<Box sx={{padding:"17px" , borderBottom:"1px solid #ddd"}}>
					<Typography sx={{fontSize:"17px"}}>Board</Typography>
					<Typography sx={{fontSize:"20px" , fontWeight:"bold" , mt:"-3px"}}>{board}</Typography>
				</Box>

				<Box sx={{padding:"17px" , borderBottom:"1px solid #ddd"}}>
					<Typography sx={{fontSize:"17px"}}>Phone</Typography>
					<Typography sx={{fontSize:"20px" , fontWeight:"bold" , mt:"-3px"}}>{customer.phone_number}</Typography>
				</Box>
			</Box>

			<Box sx={{pt:"25px",pb:"200px" ,width:"90%",margin:"auto"}}>
				<EditButton onClick={()=>openEditForm(true)}>Edit Details</EditButton>
			</Box>

			<BlueButton onClick={()=>setShowConfirmDialog(true)}>Confirm Free Demo</BlueButton>
		</Box>
	)
}

const EditButton = styled(Button)({
	width:"100%",
	padding:"10px 0",
	boxShadow:"2px 2px 3px #bbb",
	border:"1px solid #ddd",
	fontSize:"18px",
	color:"#333",
	fontWeight:"600",
	backgroundColor:"#fff",
	textTransform:"capitalize"
})

const BlueButton = styled(Button)({
	position:"fixed",
	bottom:"0",
	width:"100%",
	backgroundColor:"#4A80ED",
	padding:"10px 0",
	fontSize:"18px",
	color:"#fff",
	fontWeight:"600",

	'&:hover':{
		backgroundColor:"#6387E4"
	}
})



 const validate = (values) =>{
	let errors={};

	if(values.name === ''){
		errors.name="Name must not be empty"
	}else if(values.name.length > 50){
		errors.name = "Name must not exceed more than 50 characters"
	}

	if(values.phone_number === ''){
		errors.phone_number="Phone Number must not be empty"
	}else if(values.phone_number.length <10){
		errors.phone_number="Invalid Phone number"
	}

	if(values.board === ''){
		errors.board = "Please Select a Board"
	}

	if(values.subject === ''){
		errors.subject = "Please Select a subject"
	}

	if(values.selectedSubjects.length === 0){
		errors.selectedSubjects = "Subject should not be empty"
	}

	return errors;
}


const EditFormDialog = ({open , handleClose , leadsData , setShowConfirmDialog, setLeadsData}) =>{
   const { board,  customer, standard, subject } = leadsData;
	 const router = useRouter();
   const initialValues = {
    name:customer.name,
    phone_number:'',
    board:board,
    studentClass:standard,
    subject:subject[0],
    selectedSubjects:subject,
   };

    const [values , setValues] = useState(initialValues);
    const [errors, setErrors] = useState({});

	useEffect(() => {
	   const errorsRes = validate(values);
	   setErrors(errorsRes);
	}, [values]);


	const handleSubjectChange = (e) =>{
		const newSubject = e.target.value;
		const allSubjects = values.selectedSubjects;

		if(allSubjects.includes(newSubject)){
			setValues((prev) =>({...prev , selectedSubjects:allSubjects}));
		}else{
			allSubjects.push(newSubject);
			setValues((prev) =>({...prev , selectedSubjects:allSubjects}))
		}

		setValues((prev) =>({...prev , subject:e.target.value}))
	}

	const handleSubjectDelete = (eachSubject) =>{
		const newSubjects = values.selectedSubjects.filter(subject => subject !== eachSubject);
		setValues((prev) =>({...prev , selectedSubjects:newSubjects}));
	}

  const editLeadsData = async (data , parameter) =>{
    try{
      const res = await fetch(`https://b2b.develop.edvi.app/qualified-lead/update-info/?request_id=${parameter}` ,  {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })

      const resData = await res.json()

      setLeadsData(resData);
      return resData;
    }catch(err){
      return err;
    }
  }

	const handleSave = async () =>{
    console.log(values)
    const errors = validate(values);
      setErrors(errors);

      if (Object.keys(errors).length === 0) {
        const parameter = location.search.split("=")[1];

        const newData = {
          customer:{
            name:'',
            phone_number:''
          },
          board:'',
          standard:'',
          subject:'',
        };

        console.log(newData)

        newData.customer.name = values.name;
        newData.customer.phone_number = `+${values.phone_number}`;
        newData.board = values.board;
        newData.standard = values.studentClass;
        newData.subject = values.selectedSubjects;

        const res = await editLeadsData(newData , parameter);
        console.log(res);

			  handleClose();
    	}
	}

	const handleMobileChange = (e) => {
        let value = e.target.value.split(" ").join("");
        if (value.length <= 10) {
            setValues((prev) => ({ ...prev, phone: e.target.value }))
        }
    }

	return(
		<Dialog open={open} fullScreen TransitionComponent={SlideTransition}>
      <Box sx={{
        padding:"20px 30px",
        boxShadow:"2px 2px 10px #ddd",
        backgroundColor:"#fff",
        display:"flex"
      }}>
        <CloseIcon onClick={handleClose} sx={{fontSize:"30px"}} />
        <Typography sx={{fontSize:"22px" , fontWeight:"600" , textAlign:"center" , pl:"20%"}}>Edit Request</Typography>
      </Box>

			<Box sx={{backgroundColor:"#F5F9FE",}}>
				<Box sx={{mt:"10px" , backgroundColor:"#fff"}}>
					<Box sx={{padding:"17px"}}>
						<Typography sx={{pt:"10px" ,fontSize:"17px"}}>Name</Typography>
						<TextInputSquare
							type="text"
							placeholder="Enter Name"
							value={values.name}
							onChange={(e) => setValues((prev) =>({...prev , name:e.target.value}))}
							error={errors.name}
							helperText={errors.name}
						/>
					</Box>

					<Box sx={{padding:"0px 17px"}}>
						<Typography sx={{fontSize:"17px" ,pb:"15px"}}>Class</Typography>
						<TextInputSquare
							select
							value={values.studentClass}
							label="Select Class"
							onChange={(e) => setValues((prev) =>({...prev , studentClass:e.target.value}))}
							InputProps={{
		                        style: {
		                          width:"100%",
		                          height:"45px",
		                        }
	                    	}}
	                    	error={errors.studentClass}
	                    	helperText={errors.studentClass}
						>
							{StudentClasses.map(studentClass =>(
								<MenuItem key={studentClass} value={studentClass}>{studentClass}</MenuItem>
							))}
						</TextInputSquare>
					</Box>

					<Box sx={{padding:"17px"}}>
						<Typography sx={{fontSize:"17px",pb:"15px"}}>Board</Typography>
						<TextInputSquare
							select
							value={values.board}
							defaultValue={values.board}
							label="Select Board"
							onChange={(e) => setValues((prev) =>({...prev , board:e.target.value}))}
							helperText={errors.board}
							InputProps={{
		                        style: {
		                          width:"100%",
		                          height:"45px",
		                        }
	                    	}}
	                    	error={errors.board}
						>
							{Boards.map(board =>(
								<MenuItem key={board} value={board}>{board}</MenuItem>
							))}
						</TextInputSquare>
					</Box>

					<Box sx={{padding:"0 17px"}}>
						<Typography sx={{fontSize:"17px",pb:"15px"}}>Subject</Typography>
						<TextInputSquare
							select
							value={values.subject}
							label="Select Subject"
							onChange={(e) => handleSubjectChange(e)}
							InputProps={{
		                        style: {
		                          width:"100%",
		                          height:"45px",
		                        }
	                    	}}
	                    	error={errors.selectedSubject}
	                    	helperText={errors.selectedSubject}
						>
							{Subjects.map(Subject =>(
								<MenuItem key={Subject} value={Subject}>{Subject}</MenuItem>
							))}
						</TextInputSquare>

						<Box sx={{
							width:"100%",
						}}>
						</Box>

					</Box>

					<Box sx={{padding:"17px" , pb:"100px"}}>
						<Typography sx={{fontSize:"17px"}}>Phone Number</Typography>
						<div>
							<PhoneInput
								 country={'in'}
								 onlyCountries={['in','ae','sg']}
								 value={values.phone_number}
								 placeholder="Enter mobile/whatsapp number"
								 onChange={(phone,country) => {
									 setValues((prev) => ({...prev,phone_number:phone}))
								 }}
								 countryCodeEditable={false}
							 />
							 <Typography sx={{
								 color:'#d32f2f',
								 fontSize:'12px',
								 pl:'12px',
								 pt:'5px',
							 }}>{errors.phone_number}</Typography>
						</div>
					</Box>
				</Box>
			</Box>

			<BlueButton onClick={handleSave}>Save</BlueButton>
		</Dialog>
	)
}

const Boards = ['ICSE','ISC','CBSE'];

const StudentClasses = ['I','II','III','IV','V','VI','VII','VIII','IX','X','XI','XII',];

const Subjects = [
  'English',
  'Maths',
  'Computer',
  'Physics',
  'Chemistry',
  'Biology',
  'Hindi',
  'Economics',
  'Accountancy',
  'Business Studies',
  'Social Studies',
  'Moral Science',
  'Science',
  'History',
  'E.V.S',
  'Commerce',
  ]

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
	      borderColor: 'rgba(0, 0, 0, 0.1)',
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

export default RequestFormMobile;
