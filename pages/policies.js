import React, { useEffect, useState } from 'react';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { Divider } from '@mui/material';
import TermsAndCondition from '../components/sections/policies/TermsAndConditions';
import PrivacyPolicy from '../components/sections/policies/PrivacyPolicy';
import FaqAccordion from '../components/accordion/PolicyAccordion';
import { Box, Typography } from '@mui/material'
import { useRouter } from 'next/router';
import Header from '../components/sections/global/Header';
import Footer from '../components/sections/global/Footer';
import useBreakpoints from '../hooks/useBreakpoints';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const Policies = () => {
    const router = useRouter();
    const [toggleTerms, setToggleTerms] = useState(true);
    const [mobileTerms, setMobileTerms] = useState(false);
    const [mobilePrivacy, setMobilePrivacy] = useState(false);
    const { md } = useBreakpoints();

    return (
        <>
            <Header bgBlue />
            {md ? (
                <Box sx={{ pb: "15%" }}>
                    <Box sx={{ height: "130px", backgroundColor: "#F8F9FE" }}>
                        <Box sx={{ display: "flex", justifyContent: "end", alignItems: "center", width: "90%", margin: "auto" }}>
                            <Box sx={{ width: "70%", height: "100%", display: "flex", alignItems: "center", }}>
                                <Typography variant="h2" sx={{ fontSize: "40px", marginTop: "60px", fontWeight: "bold", color: "#6483E4" }}>{toggleTerms ? 'Terms And conditions' : 'Privacy Policy'}</Typography>
                            </Box>
                        </Box>
                    </Box>

                    <Box sx={{ width: "90%", margin: "auto", display: "flex" }}>
                        <Box sx={{ width: "30%", mt: "-50px" }}>
                            <Box sx={{ width: "80%", boxShadow: "2px 2px 10px #ddd", borderRadius: "10px" }}>
                                <Box sx={{ p: "10px", pl: "20px", backgroundColor: "#F8F9FE", borderLeft: "5px solid #fff" }}>
                                    <Typography >Policies</Typography>
                                </Box>
                                <Box sx={{
                                    p: "10px",
                                    pl: "20px",
                                    cursor: "pointer",
                                    borderLeft: toggleTerms ? "5px solid #6483E4" : "5px solid #fff"
                                }} onClick={() => setToggleTerms(true)} >
                                    <Typography>Terms And conditions</Typography>
                                </Box>
                                <Box sx={{
                                    p: "10px",
                                    pl: "20px",
                                    cursor: "pointer",
                                    borderLeft: toggleTerms ? "5px solid #fff" : "5px solid #6483E4"
                                }} onClick={() => setToggleTerms(false)}>
                                    <Typography>Privacy Policy</Typography>
                                </Box>
                            </Box>
                        </Box>

                        <Box sx={{ width: "70%", pt: "20px" }}>
                            <Typography variant="body">These Terms of Use are effective as of May 28, 2021.</Typography>
                            {toggleTerms ? <TermsAndCondition /> : <PrivacyPolicy />}

                        </Box>
                    </Box>
                </Box>
            ) : (
                <>
                    <Box sx={{ pb: "70%" }}>
                        <Box sx={{
                            height: "100px",
                            backgroundColor: "#F8F9FE",
                            width: "100%"
                        }}>
                            <Typography sx={{ textAlign: "center", pt: "25px", fontSize: "30px" }}>Policies</Typography>
                        </Box>
                        <Box>
                            <Box>
                                <Box sx={{

                                    padding: "20px 20px 20px 20px",
                                    boxShadow: "2px 2px 10px #eee",
                                    width: "80%",
                                    margin: "auto",
                                    marginTop: "20px",
                                    borderRadius: "10px"
                                }}>
                                    <Box sx={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                    }}>
                                        <Typography sx={{ fontSize: "20px" }}>Terms And Conditions</Typography>
                                        {!mobileTerms ? (
                                            <AddIcon sx={{ pt: "2px" }} onClick={() => setMobileTerms(!mobileTerms)} />
                                        ) : (
                                            <RemoveIcon sx={{ pt: "2px" }} onClick={() => setMobileTerms(!mobileTerms)} />
                                        )}
                                    </Box>

                                    {mobileTerms && (
                                        <Box sx={{ pt: "20px" }}>
                                            <TermsAndCondition />
                                        </Box>
                                    )}
                                </Box>
                            </Box>

                            <Box sx={{
                                padding: "20px 20px 20px 20px",
                                boxShadow: "2px 2px 10px #eee",
                                width: "80%",
                                margin: "auto",
                                marginTop: "20px",
                                borderRadius: "10px"
                            }}>
                                <Box sx={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                }}>
                                    <Typography sx={{ fontSize: "20px" }}>Privacy Policy</Typography>
                                    {!mobilePrivacy ? (
                                        <AddIcon sx={{ pt: "2px" }} onClick={() => setMobilePrivacy(!mobilePrivacy)} />
                                    ) : (
                                        <RemoveIcon sx={{ pt: "2px" }} onClick={() => setMobilePrivacy(!mobilePrivacy)} />
                                    )}
                                </Box>

                                {mobilePrivacy && (
                                    <Box sx={{ pt: "20px" }}>
                                        <PrivacyPolicy />
                                    </Box>
                                )}
                            </Box>
                        </Box>
                    </Box>
                </>
            )
            }

            <Footer />
        </>
    );
};

export default Policies;
