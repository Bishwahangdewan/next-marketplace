import React from 'react';
import { makeStyles } from '@mui/styles';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { BsPlus } from 'react-icons/bs';
import { BiMinus } from 'react-icons/bi';

const FaqAccordion = ({ content, policy }) => {
  const classes = useStyles();

  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className="row u-margin-top-medium" style={{ paddingBottom: '50px' }}>
      <div className={`${classes.root} accordion`}>
        {content.map((questions, index) => (
          <Accordion
            expanded={expanded === `panel${index}`}
            onChange={handleChange(`panel${index}`)}
            key={index}
            TransitionProps={{
              timeout: policy ? 200 : 400,
            }}
          >
            <AccordionSummary
              expandIcon={
                expanded === `panel${index}` ? (
                  <BiMinus style={{ fontSize: '30px' }} />
                ) : (
                  <BsPlus style={{ fontSize: '30px' }} />
                )
              }
            >
              <p
                className={`${classes.heading} ${expanded === `panel${index}` ? classes.blueText : ''
                  } bolder accordion-text`}
              >
                {questions.question}
              </p>
            </AccordionSummary>
            <AccordionDetails className={classes.details}>
              <Typography className={`${classes.typography} accordion-text`}>
                {questions.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </div>
  );
};

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    '& .MuiPaper-rounded': {
      boxShadow: '0 3px 5px 3px rgba(0, 0, 0, 0.09)',
      borderRadius: 4,
      marginBottom: '24px',
      background: '$color-primary',
    },
    '& .MuiPaper-root.Mui-expanded': {
      margin: '16px 0 16px 8px',
    },
  },
  heading: {
    fontSize: '18px !important',
    flexShrink: 0,
    padding: '10px 10px',
    textAlign: 'left',
    maxWidth: '85%',
  },
  details: {
    padding: '0 25px 10px 25px',
    textAlign: 'left',
  },
  typography: {
    fontSize: '16px !important',
    padding: '0 10px 10px',
    fontWeight: '600 !important',
  },
  blueText: {
    color: '#638be4',
  },
}));

export default FaqAccordion;
