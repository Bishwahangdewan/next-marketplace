import {useContext , useEffect , useState} from 'react';
import {Box} from '@mui/material';
import RequestForm from '../components/forms/RequestForm';
import RequestFormMobile from '../components/forms/RequestFormMobile';
import useBreakPoints from '../Hooks/useBreakpoints';
import { useRouter } from 'next/router'
import Header from '../components/sections/global/Header'
import Footer from '../components/sections/global/Footer'


const Leads = () =>{
	const router = useRouter();
	const [isBooked , setIsBooked] = useState(false)
  const [leadsData,setLeadsData] = useState(null);
	const {md} = useBreakPoints();

	useEffect(()=>{
		const fetchLeadsData = async () =>{
			const parameters = router.asPath.split("=")[1];
      try{
        const res = await fetch(`https://b2b.develop.edvi.app/leads?id=${parameters}`);
        const resData = await res.json()
        setLeadsData(resData.data);

        if(resData.message){
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
      <Header bgBlue />
        <Box sx={{
          pt:'50px',
          pb: md ? '70px' : '0px',
        }}>
			   	{md? <RequestForm /> : <RequestFormMobile />}
        </Box>
      <Footer />
		</Box>
	)
}

export default Leads;
