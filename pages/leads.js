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


const Leads = () =>{
	const router = useRouter()
	const [isBooked , setIsBooked] = useState(false)
  const [leadsData, setLeadsData] = useState(null);
	const {md} = useBreakPoints()
	const {enqueueSnackbar} = useSnackbar()
	console.log(router.asPath.split("=")[1])

	useEffect(()=>{
		const fetchLeadsData = async () =>{
			const parameters = router.asPath.split("=")[1];
      try{
        const res = await fetch(`https://b2b.develop.edvi.app/qualified-lead/get-info-for-verification/?request_id=${parameters}`);
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
        }

      }catch(err){
        return err;
      }
		}

		fetchLeadsData();
	},[]);

	return(
		<Box>
      <Header bgBlue />
        <Box sx={{
          pt:md ? '50px': '0',
          pb: md ? '70px' : '0px',
        }}>
			   	{md? <RequestForm leadsData={leadsData} setLeadsData={setLeadsData} isBooked={isBooked} /> : <RequestFormMobile leadsData={leadsData} setLeadsData={setLeadsData} isBooked={isBooked} />}
        </Box>
      <Footer />
		</Box>
	)
}

export default Leads;
