import { useState, useEffect } from 'react';
import { Box, Typography, Grid, ButtonBase, MenuItem, FormGroup, FormControlLabel, Checkbox } from '@mui/material';
import { TextInputSquare } from '../../../globals/GlobalStyles';
import PropTypes from 'prop-types';
// import { trackTeacherDetails } from '../../../firebase/analytics';

const Step1 = ({ values, setValues, teacher, errors }) => {
  const [taughtSubs, setTaughtSubs] = useState([]);
  const [taughtStds, setTaughtStds] = useState([]);
  const [showMoreFields, setShowMoreFields] = useState([]);

  // useEffect(() => {
  //   if (values.standard === 'Select Class') {
  //     setValues((prev) => ({ ...prev, standard: teacher.promised_batches.length > 0 ? teacher.promised_batches[0].standard : '' }))
  //   }
  //
  //   if (values.subject === 'Select Subject') {
  //     setValues((prev) => ({ ...prev, subject: teacher.promised_batches.length > 0 ? teacher.promised_batches[0].subject : '' }))
  //   }
  // })

  useEffect(() => {
    if (!teacher.promised_batches || teacher.promised_batches.length === 0)
      return;
    const sub = ['Select Subject'];

    teacher.promised_batches.forEach((batch) => {
      if (!sub.find((ele) => batch.subject === ele)) sub.push(batch.subject);
    });
    setTaughtSubs(sub);
  }, [teacher.promised_batches]);

  useEffect(() => {
    const std = ['Select Class'];
    teacher.promised_batches.forEach((batch) => {
      if (!std.find((ele) => batch.standard === ele)) std.push(batch.standard);
    });
    setTaughtStds(std);
  }, [teacher.promised_batches]);

  const handleCheckbox = (e) => {
    if (e.target.checked) {
      setShowMoreFields(true)
    } else {
      setShowMoreFields(false)
    }
  }

  return (
    <Box padding="1rem" paddingBottom="5rem">
      <Box marginBottom="1rem">
        <Typography>Class</Typography>
        <TextInputSquare
          select
          value={values.standard}
          onChange={(e) =>
            setValues((prev) => ({ ...prev, standard: e.target.value }))
          }
          error={errors.standard}
          helperText={errors.standard}
        >
          {taughtStds.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextInputSquare>
      </Box>

      <Box marginBottom="1rem">
        <Typography>Subject</Typography>
        <TextInputSquare
          select
          value={values.subject}
          onChange={(e) =>
            setValues((prev) => ({ ...prev, subject: e.target.value }))
          }
          error={errors.subject}
          helperText={errors.subject}
        >
          {taughtSubs.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextInputSquare>
      </Box>

      <Box marginBottom="1rem">
        <FormGroup>
          <FormControlLabel control={<Checkbox onChange={(e)=>handleCheckbox(e)}  />} label="I want to provide a demo topic" />
        </FormGroup>
      </Box>

      {showMoreFields && (
        <Box>
          <Box marginBottom="1rem">
            <Typography>Demo Topic</Typography>
            <TextInputSquare
              value={values.demo_topic}
              placeholder="Enter demo topic"
              onChange={(e) =>
                setValues((prev) => ({ ...prev, demo_topic: e.target.value }))
              }
            />
          </Box>

          <Box marginBottom="1rem">
            <Typography>I want a Demo class on</Typography>
            <TextInputSquare
              type="date"
              defaultValue="2017-05-24"
              value={values.availability_date}
              onChange={(e) =>
                setValues((prev) => ({
                  ...prev,
                  availability_date: e.target.value,
                }))
              }
              error={errors.availability_date}
              helperText={errors.availability_date}
            />
          </Box>

          <Box marginBottom="4rem">
            <Typography>Preferred time</Typography>
            <TextInputSquare
              type="time"
              defaultValue="07:30"
              value={values.availability_time}
              onChange={(e) =>
                setValues((prev) => ({
                  ...prev,
                  availability_time: e.target.value,
                }))
              }
              error={errors.availability_time}
              helperText={errors.availability_time}
            />
          </Box>
        </Box>
      )}
    </Box>
  )
};

const Btn = ({ text, isSelected, onClick }) => (
  <ButtonBase
    sx={{
      paddingY: '0.5rem',
      bgcolor: isSelected ? '#F6D524' : '#fff',
      border: `1px solid ${isSelected ? '#F6D524' : 'rgba(0, 0, 0, 0.5)'}`,
      color: '#000',
      borderRadius: '8px',
      fontSize: '1rem',
      transition: '0.2s ease',
      width: '100%',
    }}
    onClick={onClick}
    disableRipple
  >
    {text}
  </ButtonBase>
);

Step1.propTypes = {
  values: PropTypes.object.isRequired,
  setValues: PropTypes.func.isRequired,
};

export default Step1;
