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



const RequestFormMobile = ({leadsData, setLeadsData, isBooked, studentClasses, studentSubjects, studentBoards, fixedPhone, url}) =>{
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
			const res = await fetch(`${url}/qualified-lead/confirm-lead-verification/?request_id=${parameter}`,{
				method: 'POST',
				headers: {
					 "Content-type": "application/json; charset=UTF-8"
			 }
			});
			const resData = await res.json()
			// console.log(res)
			// console.log(resData)
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

      {!isBooked && leadsData && <DetailsCard url={url} openEditForm={setOpenEditForm} leadsData={leadsData} setShowConfirmDialog={setShowConfirmDialog} />}

			{openEditForm
        && leadsData
        &&
        <EditFormDialog
         open={openEditForm}
         handleClose={handleClose}
         leadsData={leadsData}
         setLeadsData={setLeadsData}
         setShowConfirmDialog={setShowConfirmDialog}
         studentClasses={studentClasses}
         studentSubjects={studentSubjects}
         studentBoards={studentBoards}
         fixedPhone={fixedPhone}
         url={url}
        />}

      {showConfirmDialog && <LeadConfirmDialog open={showConfirmDialog} handleClose={handleCloseConfirmDialog} confirmBooking={confirmBooking}/>}
		</Box>
	)
}

const DetailsCard = ({openEditForm , leadsData , setShowConfirmDialog}) =>{
	const { board,  customer, standard, subject } = leadsData;

  const { enqueueSnackbar } = useSnackbar()

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

			  {customer.phone_number && (
          <Box sx={{padding:"17px" , borderBottom:"1px solid #ddd"}}>
            <Typography sx={{fontSize:"17px"}}>Phone</Typography>
            <Typography sx={{fontSize:"20px" , fontWeight:"bold" , mt:"-3px"}}>{customer.phone_number ? customer.phone_number : '------------------'}</Typography>
          </Box>
        )}
			</Box>

			<Box sx={{pt:"25px",pb:"200px" ,width:"90%",margin:"auto"}}>
				<EditButton onClick={()=>openEditForm(true)}>Edit Details</EditButton>
			</Box>

			<BlueButton onClick={()=>{
        if(!customer.phone_number || customer.phone_number.length === 0) {
          showErrorSnackbar(
            enqueueSnackbar,
            "Phone Number is Empty",
          );
        } else {
          setShowConfirmDialog(true)
        }
      }}>Confirm Free Demo</BlueButton>
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

  if (!values.name) {
		errors.name = 'Field Required'
	} else if (values.name.trim().length === 0) {
		errors.name = 'No Leading Whitespaces allowed'
	} else if (values.name.length < 3) {
		errors.name = 'Minimum 3 letters should be allowed'
	} else if (values.name.length > 55) {
		errors.name = 'Maximum 55 letters are allowed'
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

  if(values.phone_number.length !== 0){
	  if(
			values.phone_number[0] === '9'
			&& values.phone_number[1] === '7'
			&& values.phone_number[2] === '1'
		){
			if(values.phone_number.length !== 3 ) {
				if(values.phone_number.length < 11 || values.phone_number.length > 11){
					errors.phone_number = "Invalid Phone Number"
				}
			}
		} else if(values.phone_number[0] === '9' && values.phone_number[1] === '1') {
			if(values.phone_number.length !== 2 ) {
				if(values.phone_number.length < 12 || values.phone_number.length > 12){
					errors.phone_number = "Invalid Phone Number"
				}
			}
		} else if(values.phone_number[0] === '6' && values.phone_number[1] === '5') {
			if(values.phone_number.length !== 2 ) {
				if(values.phone_number.length < 10 || values.phone_number.length > 10){
					errors.phone_number = "Invalid Phone Number"
				}
			}
		}
	}

  if (values.phone_number.length < 5) {
    errors.phone_number = "Invalid Phone Number"
  }

	return errors;
}


const EditFormDialog = ({open , handleClose , leadsData , setShowConfirmDialog, setLeadsData, studentClasses, studentSubjects, studentBoards, fixedPhone, url}) =>{
   const { board,  customer, standard, subject } = leadsData;
	 const router = useRouter();
   const initialValues = {
    name:customer.name,
    phone_number:leadsData.customer.phone_number?leadsData.customer.phone_number[1] === '9'
                 && leadsData.customer.phone_number[2] === '1'
                 ? leadsData.customer.phone_number.substr(1) :
                 leadsData.customer.phone_number[1] === '9'
                 && leadsData.customer.phone_number[2] === '7'
                 && leadsData.customer.phone_number[3] === '1'
                 ? leadsData.customer.phone_number.substr(1) :
                 leadsData.customer.phone_number[1] === '6'
                 && leadsData.customer.phone_number[2] === '5'
                 ? leadsData.customer.phone_number.substr(1): '':'' ,
    board:board,
    studentClass:standard,
    subject:subject[0],
    selectedSubjects:subject,
   };

    const [values , setValues] = useState(initialValues)
    const [errors, setErrors] = useState({});
    const [userCountry , setUserCountry ] = useState('in')
    const { enqueueSnackbar } = useSnackbar()

	useEffect(() => {
	   const errorsRes = validate(values);
	   setErrors(errorsRes);
	}, [values]);

  useEffect(() => {
    console.log(values.selectedSubjects)
    if(values.selectedSubjects.length == 0) {
      setValues((prev) => ({
        ...prev,
        subject: ''
      }))
    }
  },[values.selectedSubjects, values.subject])

  useEffect(() => {
    if(leadsData.customer.phone_number){
      if(leadsData.customer.phone_number[1] === '9'&& leadsData.customer.phone_number[2] === '1') {
        setUserCountry('in')
      } else if (
        leadsData.customer.phone_number[1] === '9'
        && leadsData.customer.phone_number[2] === '7'
        && leadsData.customer.phone_number[3] === '1'
      ) {
        setUserCountry('ae')
      } else if( leadsData.customer.phone_number[1] === '6'&& leadsData.customer.phone_number[2] === '5') {
        setUserCountry('sg')
      }
    } else {
        setUserCountry('in')
    }
  }, []);


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
      const res = await fetch(`${url}/qualified-lead/update-info/?request_id=${parameter}` ,  {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })

      const resData = await res.json()

      if(!resData.status_code){
        setLeadsData(resData);
      }
      return resData;
    }catch(err){
      return err;
    }
  }

	const handleSave = async () =>{
    try {
      // console.log(values)
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

          // console.log(newData)

          newData.customer.name = values.name;
          newData.customer.phone_number = values.phone_number === ""
                                          || values.phone_number === "91"
                                          || values.phone_number === "65"
                                          || values.phone_number === "971"
                                          ? ""
                                          : `+${values.phone_number}`;
          newData.board = values.board;
          newData.standard = values.studentClass;
          newData.subject = values.selectedSubjects;

          const res = await editLeadsData(newData , parameter);
          // console.log(res);
          if(res.status_code && res.status_code === 400){
            showErrorSnackbar(enqueueSnackbar, res.detail);
          }else{
            handleClose()
          }
      	}
    }catch(err){
      console.log(err)
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
              {studentClasses.standard.map(({id, name}) =>(
                <MenuItem key={id} value={name}>{name}</MenuItem>
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
              {studentBoards.board.map(({id, name}) =>(
                <MenuItem key={id} value={name}>{name}</MenuItem>
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
              {studentSubjects.subject.map(({id, name}) =>(
                <MenuItem key={id} value={name}>{name}</MenuItem>
              ))}
						</TextInputSquare>

            <Box sx={{
              width:'92%',
              margin:'auto',
            }}>
              <Typography sx={{fontSize:"12px" , color:"#d32f2f"}}>{errors.selectedSubjects}</Typography>
            </Box>

						<Box sx={{
							width:"100%",
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

          {fixedPhone ? (
            <Box sx={{padding:"17px" , pb:"100px"}}>
              <Typography>Phone</Typography>
              <TextInputSquare
                type="text"
                placeholder="Enter Name"
                value={values.phone_number}
                disabled
              />
            </Box>
          ): (
            <Box sx={{padding:"17px" , pb:"100px"}}>
              <Typography sx={{fontSize:"17px"}}>Phone Number</Typography>
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
                       // console.log(country)
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
          )}


				</Box>
			</Box>

			<BlueButton onClick={handleSave}>Save</BlueButton>
		</Dialog>
	)
}

const Boards = ['ICSE','ISC','CBSE', 'UP Board', 'MP Board', 'GCSE', 'PSEB', 'NCERT', 'IGCSE'];

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

export async function getStaticProps() {
  const url = process.env.REACT_APP_BASE_URL
	return {
		props: {
			url,
		}
	}
}
