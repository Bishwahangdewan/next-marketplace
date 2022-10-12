import {useContext , useEffect , useState} from 'react';
import {Box} from '@mui/material';
import RequestForm from '../components/forms/RequestForm';
import RequestFormMobile from '../components/forms/RequestFormMobile';
import useBreakPoints from '../hooks/useBreakpoints';
import { useRouter } from 'next/router'
import Header from '../components/sections/global/Header'
import Footer from '../components/sections/global/Footer'
//snackbar components
import { useSnackbar } from 'notistack';
import showErrorSnackbar from '../components/snackbar/ErrorSnackbar'


const Leads = ({url}) =>{
	console.log(url)
	const router = useRouter()
	const [isBooked , setIsBooked] = useState(false)
  const [leadsData, setLeadsData] = useState(null);
	const {md} = useBreakPoints()
	const {enqueueSnackbar} = useSnackbar()
	console.log(router.asPath.split("=")[1])

	const [studentClasses, setStudentClasses] = useState([])
	const [studentSubjects, setStudentSubjects] = useState([])
	const [studentBoards, setStudentBoards] = useState([])
	const [fixedPhone, setFixedPhone] = useState(false)

	useEffect(()=>{
		console.log(url)
		const fetchLeadsData = async () =>{
			const parameters = router.asPath.split("=")[1];
      try{
        const res = await fetch(`${url}/qualified-lead/get-info-for-verification/?request_id=${parameters}`);
        const resData = await res.json()
        setLeadsData(resData)
				console.log(resData)

        if(resData.status_code === 404){
          console.log("booked")
          setIsBooked(true);
					router.push('/');
					showErrorSnackbar(enqueueSnackbar, 'Request Invalid or Expired');
        }else{
          setIsBooked(false)
					if(resData.customer.phone_number){
						setFixedPhone(true)
					}
        }

      }catch(err){
        return err;
      }
		}

		fetchLeadsData();
	},[]);

	useEffect(() => {
		const getKeys = async () =>{
			const getStandard = await fetch(`${url}/marketplace-init/?key=standard`)
			const getStandardRes = await getStandard.json();

			const getSubject = await fetch(`${url}/marketplace-init/?key=subject`)
			const getSubjectRes = await getSubject.json();

			const getBoard = await fetch(`${url}/marketplace-init/?key=board`)
			const getBoardRes = await getBoard.json();

			setStudentClasses(getStandardRes);
			setStudentSubjects(getSubjectRes);
			setStudentBoards(getBoardRes);
		}

		getKeys()
	},[])


	return(
		<Box>
      <Header bgBlue />
        <Box sx={{
          pt:md ? '50px': '0',
          pb: md ? '70px' : '0px',
        }}>
			   	{md ?
						<RequestForm
							leadsData={leadsData}
							setLeadsData={setLeadsData}
							isBooked={isBooked}
							studentClasses={studentClasses}
							studentSubjects={studentSubjects}
							studentBoards={studentBoards}
							fixedPhone={fixedPhone}
							url={url}
					   />
						 :
						 <RequestFormMobile
							 leadsData={leadsData}
							 setLeadsData={setLeadsData}
							 isBooked={isBooked}
							 studentClasses={studentClasses}
							 studentSubjects={studentSubjects}
							 studentBoards={studentBoards}
							 fixedPhone={fixedPhone}
							 url={url}
						 />}
        </Box>
      <Footer />
		</Box>
	)
}

export default Leads;

export async function getServerSideProps() {
  const url = process.env.REACT_APP_BASE_URL
	return {
		props: {
			url,
		}
	}
}
