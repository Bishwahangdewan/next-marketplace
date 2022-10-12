import { Box, Typography, Divider, Grid } from '@mui/material';
import { TextInputSquare } from '../../../globals/GlobalStyles';
import PropTypes from 'prop-types';
// import { trackTeacherDetails } from '../../../firebase/analytics';
import { useEffect, useState } from 'react';
//react-phone-Input
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

const Step2 = ({ values, setValues, errors, teacher }) => {
  const [userCountry , setUserCountry ] = useState('in')

  const getTeachingMode = (mode) => {
    if (mode === 'P') return 'Private';
    else return 'Group';
  };

  const getClassMode = (mode) => {
    if (mode === 'O') return 'Online';
    else return 'Face To Face';
  };

  const detailItems = [
    {
      id: 1,
      key: 'Subject',
      value: values.subject,
      width: 6,
    },
    {
      id: 2,
      key: 'Class',
      value: values.standard,
      width: 6,
    },
  ];

  const handleMobileChange = (e) => {
    let value = e.target.value.split(" ").join("");
    if (value.length <= 10) {
      setValues((prev) => ({ ...prev, phone_number: e.target.value }))
    }
  }

  return (
    <Box>
      <Divider />
      <Box sx={{ padding: '1rem', bgcolor: '#DBF4F1' }}>
        <Grid container>
          {detailItems.map((item) => (
            <Grid item xs={item.width} key={item.id}>
              {item.key === 'Class' && item.value === 'Accountancy' ? (
                <>
                  <Typography fontSize="0.9rem" sx={{ textAlign: "center" }}>{item.key}</Typography>
                  <Typography fontSize="1.1rem" sx={{ textAlign: "center" }} fontWeight="bold">
                    {item.value}
                  </Typography>
                </>
              ) : (
                <>
                  <Typography fontSize="0.9rem">{item.key}</Typography>
                  <Typography sx={{ pl:item.key === 'Class' ? '2px': '0px' }} fontSize="1.1rem" fontWeight="bold">
                    {item.value}
                  </Typography>
                </>
              )}

            </Grid>
          ))}
        </Grid>
      </Box>

      <Box padding="1rem">
        <Box marginBottom="1rem">
          <Typography>Name</Typography>
          <TextInputSquare
            placeholder="Enter name"
            value={values.name}
            onChange={(e) =>
              setValues((prev) => ({ ...prev, name: e.target.value }))
            }
            error={errors.name}
            helperText={errors.name}
          />
        </Box>

        <Box marginBottom="1rem">
          <Typography>Email</Typography>
          <TextInputSquare
            placeholder="Enter email id"
            value={values.email}
            onChange={(e) =>
              setValues((prev) => ({ ...prev, email: e.target.value }))
            }
            error={errors.email}
            helperText={errors.email}
          />
        </Box>

        <Box marginBottom="1rem" >
          <Typography>Mobile Number</Typography>

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
             }}
             countryCodeEditable={false}
           />
           <Typography sx={{
             color:'#d32f2f',
             fontSize:'12px',
             pl:'12px',
             pt:'5px',
           }}>{errors.phone_number?errors.phone_number:''}</Typography>
        </Box>

        <Box marginBottom="7rem" className="expand-height-on-mobile">
          <Typography>Referral Code</Typography>
          <TextInputSquare
            placeholder="Enter Referral Code(Optional)"
            value={values.referral_code}
            onChange={(e) =>
              setValues((prev) => ({ ...prev, referral_code: e.target.value }))
            }
            error={errors.referral_code}
            helperText={errors.referral_code}
          />
        </Box>
      </Box>
    </Box>
  );
};

Step2.propTypes = {
  values: PropTypes.object.isRequired,
  setValues: PropTypes.func.isRequired,
};

export default Step2;
