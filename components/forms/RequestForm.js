import {Box , Typography , Grid , Button , MenuItem , FormControl , Chip , Dialog, TextField} from '@mui/material';
import {styled} from '@mui/system';
import {useState,useContext , useEffect} from 'react';
import CancelIcon from '@mui/icons-material/Cancel';
import Spinner from '../progress/Spinner';
import LeadConfirmDialog from '../dialogs/LeadConfirmDialog';
import {list} from '../../globals/GlobalFunctions.js';
import { useRouter } from 'next/router'
import styles from '../../styles/MainForm.module.css'
//react-phone-Input
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
//snackbar components
import { useSnackbar } from 'notistack';
import showSuccessSnackbar from '../snackbar/SuccessSnackbar'
import showErrorSnackbar from '../snackbar/ErrorSnackbar'

const RequestForm = ({leadsData, setLeadsData, isBooked}) =>{
	const [showEditForm , setShowEditForm] = useState(false);
	const [showConfirmDialog , setShowConfirmDialog ] = useState(false);
	const router = useRouter()
	const { enqueueSnackbar } = useSnackbar()

	const handleClose = () =>{
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
			if(res.status === 200){
				showSuccessSnackbar(enqueueSnackbar, 'Free Demo Booked Successfully');
			}
		}catch(err){
			return err;
		}

		router.push("/");
	}


	return(
		<Box sx={{
			paddingTop:"3%"
		}}>
			<Typography sx={{
				textAlign:"center",
				fontSize:"35px",
				fontWeight:600,
			}}>Request Form</Typography>

			{!leadsData && !isBooked && <Spinner />}

			{isBooked && (
				<Typography sx={{textAlign:'center' , color:"red" , paddingBottom:'100px'}}>Request is Invalid or Expired.</Typography>
			)}

			{!showEditForm && !isBooked && leadsData && (<UserDetailsCard setForm={setShowEditForm} userData={leadsData} openDialog = {setShowConfirmDialog}/>)}

			{showEditForm && leadsData && (
				<EditForm
					setForm={setShowEditForm}
					setLeadsData={setLeadsData}
					leadsData={leadsData}
					// editLeadsData={editLeadsData}
					userData={leadsData}
				/>
			)}

			{showConfirmDialog && (<LeadConfirmDialog open={showConfirmDialog} handleClose={handleClose} confirmBooking={confirmBooking} />)}
		</Box>
	)
}


 const validate = (values) =>{
	let errors={};

	if(values.name === ''){
		errors.name="Name must not be empty"
	}else if(values.name.length > 50){
		errors.name = "Name must not exceed more than 50 characters"
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


const EditForm = ({ userData, setForm, leadsData, setLeadsData }) =>{
	const { board,  customer, standard, subject } = userData;
	const router = useRouter()
	console.log(leadsData.customer.phone_number.substr(2))
    const initialValues = {
     name:customer.name,
     phone_number:leadsData.customer.phone_number[1] === '9'
		 							&& leadsData.customer.phone_number[2] === '1'
									? leadsData.customer.phone_number.substr(1) :
									leadsData.customer.phone_number[1] === '9'
 		 							&& leadsData.customer.phone_number[2] === '7'
									&& leadsData.customer.phone_number[3] === '1'
 									? leadsData.customer.phone_number.substr(2) :
								 	leadsData.customer.phone_number[1] === '6'
									&& leadsData.customer.phone_number[2] === '5'
 									? leadsData.customer.phone_number.substr(1): '' ,
     board:board,
     studentClass:standard,
     subject:subject[0],
     selectedSubjects:userData.subject,
    };

    const [values , setValues] = useState(initialValues);
		const [userCountry , setUserCountry ] = useState('in')
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
				newData.customer.phone_number = values.phone_number === "" ? "" : `+${values.phone_number}`;
				newData.board = values.board;
				newData.standard = values.studentClass;
				newData.subject = values.selectedSubjects;

			  const res = await editLeadsData(newData , parameter);
				console.log(res);

				setForm(false)

    	}
	}

	const handleMobileChange = (e) => {
        let value = e.target.value.split(" ").join("");
        if (value.length <= 10) {
            setValues((prev) => ({ ...prev, phone: e.target.value }))
        }
    }

	return(
		<Box>
			<Box sx={{
				border:"1px solid #ccc",
				borderRadius:"5px",
				width:"50%",
				margin:"auto",
				mt:"2%",
				pt:"30px",
				pb:"30px",
				boxSizing:"border-box",
			}}>

			<Box sx={{
				display:"flex",
				justifyContent:"space-between",
				px:"5%",
			}}>
				<Box sx={{
					width:"48%"
				}}>
					<Typography>Name</Typography>
					<TextInputSquare
						type="text"
						placeholder="Enter Name"
						value={values.name}
						onChange={(e) => setValues((prev) =>({...prev , name:e.target.value}))}
						error={errors.name}
						helperText={errors.name}
					/>
				</Box>

				<Box sx={{
					width:"48%"
				}}>
					<Typography>Phone</Typography>
					<div>
						<PhoneInput
							 country={'in'}
							 onlyCountries={['in','ae','sg']}
							 value={values.phone_number}
							 placeholder="Enter mobile/whatsapp number"
							 onChange={(phone,country) => {
								 if (country.countryCode !== userCountry) {
									 setValues((prev) => ({...prev,phone_number:`${country.dialCode}`}))
									 setUserCountry(country.countryCode)
								 } else {
									 setValues((prev) => ({...prev,phone_number:phone}))
								 }
								 console.log(country)
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


			<Box sx={{
				display:"flex",
				justifyContent:"space-between",
				px:"5%",
				pt:"3%"
			}}>
				<Box sx={{
					width:"48%"
				}}>
					<Typography sx={{mb:"10px"}}>Board</Typography>
						<TextInputSquare
							select
							value={values.board}
							defaultValue={values.board}
							label="Select Board"
							onChange={(e) => setValues((prev) =>({...prev , board:e.target.value}))}
							helperText={errors.board}
							InputProps=
							{{
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

				<Box sx={{
					width:"48%"
				}}>
					<Typography sx={{mb:"10px"}}>Class</Typography>
						<TextInputSquare
							select
							value={values.studentClass}
							label="Select Class"
							onChange={(e) => setValues((prev) =>({...prev , studentClass:e.target.value}))}
							InputProps=
							{{
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
			</Box>

			<Box sx={{
				display:"flex",
				justifyContent:"space-between",
				px:"5%",
				pt:"3%",
				pb:'0%'
			}}>
				<Box sx={{
					width:"48%"
				}}>
					<Typography sx={{mb:"10px"}}>Subject</Typography>
						<TextInputSquare
							select
							value={values.subject}
							label="Select Subject"
							onChange={(e) => handleSubjectChange(e)}
							InputProps=
							{{
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
						<Typography sx={{fontSize:"12px" , color:"red"}}>{errors.selectedSubjects}</Typography>
				</Box>
			</Box>

			<Box sx={{
				display:"flex",
				justifyContent:"space-between",
				px:"5%",
			}}>
				<Box sx={{
					width:"100%"
				}}>
				<Box sx={{display:'flex' ,width:"100%" , flexWrap:'wrap' , mt:"5%"}}>
						{values.selectedSubjects.map((eachSubject) =>(
							<Box key={eachSubject} sx={{mr:"10px",mt:"5px" }}>
								<Chip
								 sx={{backgroundColor:"#404040" , color:"#fff"}}
								 label={eachSubject}
								 onDelete={() =>handleSubjectDelete(eachSubject)}
								 deleteIcon={<CancelIcon style={{color:"#fff"}}/>}
								 />
							</Box>
						))}
					</Box>
				</Box>
			</Box>

			</Box>

			<Box sx={{
				width:"50%",
				margin:"auto",
				display:'flex',
				justifyContent:"space-between",
				pt:"2%"
			}}>
				<TransparentButton onClick={()=>setForm(false)}>Cancel</TransparentButton>
				<BlueButton onClick={() => handleSave()}>Save</BlueButton>
			</Box>
		</Box>
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

const UserDetailsCard = ({setForm, userData , openDialog}) =>{
	const { board,  customer, standard, subject } = userData;
	const router = useRouter()

	useEffect(()=>{
		const fetchLeadsData = async () =>{
			const parameters = router.asPath.split("=")[1];
			try{
				const res = await fetch(`https://b2b.develop.edvi.app/qualified-lead/get-info-for-verification/?request_id=${parameters}`);
				const resData = await res.json()
				setLeadsData(resData);
				console.log(resData)

				if(resData.status_code === 404){
					console.log("booked");
					setIsBooked(true);
				}else{
					setIsBooked(false)
				}

			}catch(err){
				return err;
			}
		}

		fetchLeadsData();
	},[]);

	return(
		<Box>
			<Box sx={{
				border:"1px solid #ccc",
				borderRadius:"5px",
				width:"50%",
				margin:"auto",
				mt:"2%",
				pt:"30px",
				boxSizing:"border-box",
				backgroundColor:"#F5F9FE",
			}}>

				<Box sx={{
				}}>
					<Box sx={{
						borderBottom:"1px solid #ccc",
						display:'flex',
						pb:"30px",

					}}>
						<Box sx={{
							width:"33.33%",
							marginLeft:"5%"
						}}>
							<Box>
								<Typography sx={{fontSize:"14px"}}>Name</Typography>
								<Typography sx={{fontSize:"20px"}}>{customer.name}</Typography>
							</Box>
						</Box>

						<Box sx={{
							width:"33.33%",
							marginLeft:"5%"
						}}>
							<Box>
								<Typography sx={{fontSize:"14px"}}>Phone</Typography>
								<Typography sx={{fontSize:"20px"}}>{customer.phone_number ? customer.phone_number : '------------------'}</Typography>
							</Box>
						</Box>

						<Box sx={{
							width:"33.33%",
							marginLeft:"5%"
						}}>
							<Box>
								<Typography sx={{fontSize:"14px"}}>Board</Typography>
								<Typography sx={{fontSize:"20px"}}>{board}</Typography>
							</Box>
						</Box>
					</Box>

					<Box sx={{
						display:'flex',
						mt:"30px",
						pb:"30px",
					}}>
						<Box sx={{
							width:"100%",
							marginLeft:"5%"
						}}>
							<Box>
								<Typography sx={{fontSize:"14px"}}>Subject</Typography>
								<Box sx={{wisth:"100%" ,display:"flex" , flexWrap:"wrap"}}>
									<Typography sx={{fontSize:"20px" , mr:"10px"}}>{list(subject)}</Typography>
								</Box>
							</Box>
						</Box>
					</Box>
				</Box>
			</Box>

			<Box sx={{
				width:"50%",
				margin:"auto",
				display:'flex',
				justifyContent:"space-between",
				pt:"2%"
			}}>
				<TransparentButton onClick={()=>setForm(true)}>Edit Details</TransparentButton>
				<BlueButton onClick={()=> openDialog(true)} >Confirm Free Demo</BlueButton>
			</Box>
		</Box>
	)
}

const BlueButton = styled(Button)({
	backgroundColor:"#6387E4",
	padding:"10px 20px",
	borderRadius:"3px",
	color:"#fff",
	cursor:"pointer",

	'&:hover':{
		backgroundColor:"#6387E4"
	}
})

const TransparentButton = styled(Button)({
	backgroundColor:"transparent",
	border:"1px solid #ccc",
	padding:"10px 50px",
	borderRadius:"3px",
	color:"#fff",
	cursor:"pointer",
	color:"#555"
})

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

export default RequestForm;
