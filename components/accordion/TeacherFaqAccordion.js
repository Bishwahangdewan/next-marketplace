import React from 'react';
import {Accordion, AccordionSummary, AccordionDetails, Typography, Box} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {styled} from '@mui/system';
import CircleIcon from '@mui/icons-material/Circle';

const TeacherFaqAccordion = () =>{
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

	return(
		<Box sx={{
			pt:'5%',
		}}>
		  <StyledAccordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
	        <AccordionSummary
	          expandIcon={<ExpandMoreIcon />}
	          aria-controls="panel1a-content"
	          id="panel1a-header"
	        >
	          <CircleIcon sx={{fontSize:'13px', mt:'6px', color:'#3458a1' , mr:'10px'}} />
	          <Typography sx={{fontWeight:600,color:'#333',fontFamily:'Rubik',fontSize:'18px'}}>What do you need to become a tutor at edvi?</Typography>
	        </AccordionSummary>
	        <AccordionDetails sx={{
	        	pt:0,
	        	pb:0,
	        }}>
	          <Typography sx={{
	          	color:'#666',
              fontFamily: 'Rubik',
	          }}>
	            After clearing our screening and interview process, all our teachers are expected to have a stable internet connection, a smartphone or a laptop and a pen tab or a whiteboard + marker.
	          </Typography>
	        </AccordionDetails>
	      </StyledAccordion>

	      <StyledAccordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
	        <AccordionSummary
	          expandIcon={<ExpandMoreIcon />}
	          aria-controls="panel2a-content"
	          id="panel2a-header"
	        >
	          <CircleIcon sx={{fontSize:'14px', mt:'6px' , color:'#3458a1' , mr:'10px'}} />
	          <Typography sx={{fontWeight:600,color:'#333',fontFamily:'Rubik',fontSize:'18px'}}>Who can be a teacher at edvi?</Typography>
	        </AccordionSummary>
	        <AccordionDetails sx={{
	        	pt:0,
	        	pb:0,
	        }}>
	          <Typography sx={{
	          	color:'#666',
              fontFamily: 'Rubik',
	          }}>
	            Anyone who has completed their Class Twelfth and has a love for teaching can apply to become a tutor at edvi. You can be a professional teacher, a college student, someone preparing for competitive exams or a talented home-maker, just clear our screening & interview process and we will provide you with students to teach.
	          </Typography>
	        </AccordionDetails>
	      </StyledAccordion>

	      <StyledAccordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
	        <AccordionSummary
	          expandIcon={<ExpandMoreIcon />}
	          aria-controls="panel3a-content"
	          id="panel3a-header"
	        >
	          <CircleIcon sx={{fontSize:'14px', mt:'6px' , color:'#3458a1' , mr:'10px'}} />
	          <Typography sx={{fontWeight:600,color:'#333',fontFamily:'Rubik',fontSize:'18px'}}>Where do I have to apply?</Typography>
	        </AccordionSummary>
	        <AccordionDetails sx={{
	        	pt:0,
	        	pb:0,
	        }}>
	          <Typography sx={{
	          	color:'#666',
              fontFamily: 'Rubik',
	          }}>
	            Please visit <a href="https://teachers.edvi.app/" target="_blank" rel="noreferrer">https://teachers.edvi.app/</a> and apply.
	          </Typography>
	        </AccordionDetails>
	      </StyledAccordion>

	       <StyledAccordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
	        <AccordionSummary
	          expandIcon={<ExpandMoreIcon />}
	          aria-controls="panel3a-content"
	          id="panel3a-header"
	        >
	          <CircleIcon sx={{fontSize:'14px', mt:'6px' , color:'#3458a1' , mr:'10px'}} />
	          <Typography sx={{fontWeight:600,color:'#333',fontFamily:'Rubik',fontSize:'18px'}}>How long does it take before I can start teaching?</Typography>
	        </AccordionSummary>
	        <AccordionDetails sx={{
	        	pt:0,
	        	pb:0,
	        }}>
	          <Typography sx={{
	          	color:'#666',
              fontFamily: 'Rubik',
	          }}>
	            As the registration process consists of a few simple steps, it usually takes only about 7-10 days until you are verified and can begin teaching.
	          </Typography>
	        </AccordionDetails>
	      </StyledAccordion>

	       <StyledAccordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
	        <AccordionSummary
	          expandIcon={<ExpandMoreIcon />}
	          aria-controls="panel3a-content"
	          id="panel3a-header"
	        >
	          <CircleIcon sx={{fontSize:'14px', mt:'5px' , color:'#3458a1' , mr:'10px'}} />
	          <Typography sx={{fontWeight:600,color:'#333',fontFamily:'Rubik',fontSize:'18px'}}>Will I get a fixed salary every month?</Typography>
	        </AccordionSummary>
	        <AccordionDetails sx={{
	        	pt:0,
	        	pb:0,
	        }}>
	          <Typography sx={{
	          	color:'#666',
              fontFamily: 'Rubik',
	          }}>
	           There is no employment relationship & we don’t pay a fixed salary. Once shortlisted, you are an independent tutor and we will get you, students, to teach. You decide your own fee and you will be paid for every student that you teach through us.
	          </Typography>
	        </AccordionDetails>
	      </StyledAccordion>

        <StyledAccordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <CircleIcon sx={{fontSize:'14px', mt:'5px' , color:'#3458a1' , mr:'10px'}} />
          <Typography sx={{fontWeight:600,color:'#333',fontFamily:'Rubik',fontSize:'18px'}}>Do I have to run Ads even after becoming a tutor with edvi?</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{
          pt:0,
          pb:0,
        }}>
          <Typography sx={{
            color:'#666',
             fontFamily: 'Rubik',
          }}>
           We find the students for you. You only have to focus on doing what you love – teaching!
          </Typography>
        </AccordionDetails>
      </StyledAccordion>

      <StyledAccordion expanded={expanded === 'panel8'} onChange={handleChange('panel8')}>
       <AccordionSummary
         expandIcon={<ExpandMoreIcon />}
         aria-controls="panel3a-content"
         id="panel3a-header"
       >
         <CircleIcon sx={{fontSize:'14px', mt:'5px' , color:'#3458a1' , mr:'10px'}} />
         <Typography sx={{fontWeight:600,color:'#333',fontFamily:'Rubik',fontSize:'18px'}}>Will edvi provide me with content and material for classes?</Typography>
       </AccordionSummary>
       <AccordionDetails sx={{
         pt:0,
         pb:0,
       }}>
         <Typography sx={{
           color:'#666',
           fontFamily: 'Rubik',
         }}>
          We only provide tutors for private (one to one) classes. We don&apos;t have any group classes.We believe that great tutors like you already know their subjects. We are always there for training, assistance, technical support, hand holding for various tools and other administrative chores, but we don’t give instructions to our tutors about the content and teaching style. Work independently and free of instructions.
         </Typography>
       </AccordionDetails>
     </StyledAccordion>

     <StyledAccordion expanded={expanded === 'panel9'} onChange={handleChange('panel9')}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel3a-content"
        id="panel3a-header"
      >
        <CircleIcon sx={{fontSize:'14px', mt:'5px' , color:'#3458a1' , mr:'10px'}} />
        <Typography sx={{fontWeight:600,color:'#333',fontFamily:'Rubik',fontSize:'18px'}}>What are the minimum hours that I have to devote every week?</Typography>
      </AccordionSummary>
      <AccordionDetails sx={{
        pt:0,
        pb:0,
      }}>
        <Typography sx={{
          color:'#666',
          fontFamily: 'Rubik',
        }}>
        We expect our teachers to ensure availability of atleast 1 hour every day for  5 to 6 days in a week. 1 hour per day is the minimum.
        </Typography>
      </AccordionDetails>
    </StyledAccordion>

    <StyledAccordion expanded={expanded === 'panel10'} onChange={handleChange('panel10')}>
     <AccordionSummary
       expandIcon={<ExpandMoreIcon />}
       aria-controls="panel3a-content"
       id="panel3a-header"
     >
       <CircleIcon sx={{fontSize:'14px', mt:'5px' , color:'#3458a1' , mr:'10px'}} />
       <Typography sx={{fontWeight:600,color:'#333',fontFamily:'Rubik',fontSize:'18px'}}>What makes edvi so different from other ed-tech companies?</Typography>
     </AccordionSummary>
     <AccordionDetails sx={{
       pt:0,
       pb:0,
     }}>
       <Typography sx={{
         color:'#666',
         fontFamily: 'Rubik',
       }}>
        All our tutors are partners to us and we never try to change their teaching style. We get you students to teach. We also take care of everything so that you can focus 100% on teaching.
       </Typography>
     </AccordionDetails>
   </StyledAccordion>
		</Box>
	)
}

const StyledAccordion = styled(Accordion)({
	backgroundColor:'transparent',
	boxShadow:'none',
	fontWeight:800,
	padding:'10px 0',
	marginBottom:0,

	'& .Mui-expanded':{
		margin:0
	}
})

export default TeacherFaqAccordion;
