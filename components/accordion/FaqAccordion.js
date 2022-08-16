import React from 'react';
import {Accordion, AccordionSummary, AccordionDetails, Typography, Box} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {styled} from '@mui/system';
import CircleIcon from '@mui/icons-material/Circle';

const LandingAccordion = () =>{
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
	          <CircleIcon sx={{fontSize:'14px', mt:'4px' , color:'#3458a1' , mr:'10px'}} />
	          <Typography sx={{fontWeight:600,color:'#333',fontFamily:'Rubik',fontSize:'18px'}}>What all boards and grades are covered?</Typography>
	        </AccordionSummary>
	        <AccordionDetails sx={{
	        	pt:0,
	        	pb:0,
	        }}>
	          <Typography sx={{
	          	color:'#666',
              fontFamily: 'Rubik',
	          }}>
	            We provide private tutors for all grades and all boards - IGCSE, IB, CBSE, ICSE, ISC, etc.
	          </Typography>
	        </AccordionDetails>
	      </StyledAccordion>

	      <StyledAccordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
	        <AccordionSummary
	          expandIcon={<ExpandMoreIcon />}
	          aria-controls="panel2a-content"
	          id="panel2a-header"
	        >
	          <CircleIcon sx={{fontSize:'14px', mt:'4px' , color:'#3458a1' , mr:'10px'}} />
	          <Typography sx={{fontWeight:600,color:'#333',fontFamily:'Rubik',fontSize:'18px'}}>Do I have to pay advance fees for full course?</Typography>
	        </AccordionSummary>
	        <AccordionDetails sx={{
	        	pt:0,
	        	pb:0,
	        }}>
	          <Typography sx={{
	          	color:'#666',
              fontFamily: 'Rubik',
	          }}>
	            We only charge monthly fee on an advance basis. So you pay only for 1 month at the beginning.
	          </Typography>
	        </AccordionDetails>
	      </StyledAccordion>

	      <StyledAccordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
	        <AccordionSummary
	          expandIcon={<ExpandMoreIcon />}
	          aria-controls="panel3a-content"
	          id="panel3a-header"
	        >
	          <CircleIcon sx={{fontSize:'14px', mt:'4px' , color:'#3458a1' , mr:'10px'}} />
	          <Typography sx={{fontWeight:600,color:'#333',fontFamily:'Rubik',fontSize:'18px'}}>Can I schedule classes at my convenience?</Typography>
	        </AccordionSummary>
	        <AccordionDetails sx={{
	        	pt:0,
	        	pb:0,
	        }}>
	          <Typography sx={{
	          	color:'#666',
              fontFamily: 'Rubik',
	          }}>
	            Yes, if you inform the edvi team before-hand, we always will reschedule your classes free of cost as per the teacher&apos;s availability.
	          </Typography>
	        </AccordionDetails>
	      </StyledAccordion>

	       <StyledAccordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
	        <AccordionSummary
	          expandIcon={<ExpandMoreIcon />}
	          aria-controls="panel3a-content"
	          id="panel3a-header"
	        >
	          <CircleIcon sx={{fontSize:'14px', mt:'4px' , color:'#3458a1' , mr:'10px'}} />
	          <Typography sx={{fontWeight:600,color:'#333',fontFamily:'Rubik',fontSize:'18px'}}>Can I get a free demo class before making any payment?</Typography>
	        </AccordionSummary>
	        <AccordionDetails sx={{
	        	pt:0,
	        	pb:0,
	        }}>
	          <Typography sx={{
	          	color:'#666',
              fontFamily: 'Rubik',
	          }}>
	            Demo classes are free for everyone, everytime. We want our students to be sure about the tutor before they commence their learning journey with us.
	          </Typography>
	        </AccordionDetails>
	      </StyledAccordion>

	       <StyledAccordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
	        <AccordionSummary
	          expandIcon={<ExpandMoreIcon />}
	          aria-controls="panel3a-content"
	          id="panel3a-header"
	        >
	          <CircleIcon sx={{fontSize:'14px', mt:'4px' , color:'#3458a1' , mr:'10px'}} />
	          <Typography sx={{fontWeight:600,color:'#333',fontFamily:'Rubik',fontSize:'18px'}}>Are classes conducted in small groups or 1-1 ?</Typography>
	        </AccordionSummary>
	        <AccordionDetails sx={{
	        	pt:0,
	        	pb:0,
	        }}>
	          <Typography sx={{
	          	color:'#666',
              fontFamily: 'Rubik',
	          }}>
	           We only provide tutors for private (one to one) classes. We don&apos;t have any group classes.
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

export default LandingAccordion;
