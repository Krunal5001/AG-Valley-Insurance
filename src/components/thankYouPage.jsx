import { Grid, Stack, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import facebook_image from '../assets/facebook__image.png';
import instagram_image from '../assets/instagram_image.png';
import linkedin_image from '../assets/linkedin_image.png';
import whatsapp_image from '../assets/whatsapp_image.png';
import { ROUTES } from '../constants/routes';

const muiStyle = {
    thank_page_text: {
        fontWeight: "700",
        fontSize: "40px",
        color: "var(--white)",
        "@media(max-Width: 900px)": {
            fontSize: "24px",
        },
    },
    thank_page_sub_text: {
        fontWeight: "400",
        fontSize: "20px",
        color: "var(--white)",
        marginTop: "30px",
        "@media(max-Width: 900px)": {
            marginTop: "15px",
            fontSize: "16px",
        },
    },
    thank_page_sub_bold_text: {
        fontWeight: "700",
        cursor: 'pointer'
    },
    thank_page_sub_blue_text: {
        fontWeight: 500,
        fontSize: "20px",
        color: "var(--green)",
        cursor: 'pointer'
    },
};

const ThankYou = () => {

    const navigate = useNavigate();
    const pathname = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    const openInNewTab = (url) => {
        window.open(url, "_blank", "noopener,noreferrer");
    };

    return (
        <Grid container sx={{ background: 'var(--black)' }}>
            <Grid item className='container_space' />
            <Grid item className='container_content'>
                <Grid container minHeight={{ md: 'calc(100vh - 83px)', xs: 'calc(100vh - 120px)' }} pt={{ md: '170px', sm: '130px', xs: '120px' }} pb={{ md: '80px', sm: '60px', xs: '50px' }} display='flex' alignItems='center'>
                    <Grid item xs={0} md={1} />
                    <Grid item xs={12} md={10}>
                        <Grid container>
                            <Grid item xs={12} textAlign='center'>
                                <Typography sx={muiStyle.thank_page_text}>We will call you soon...</Typography>
                                <Typography sx={muiStyle.thank_page_sub_text}>Thank you for Choosing <span style={muiStyle.thank_page_sub_bold_text} onClick={() => navigate(ROUTES?.HOME)}>AG Valley Insurance! </span><br />Check out our <span style={muiStyle.thank_page_sub_blue_text} onClick={() => navigate(ROUTES?.SERVICE)}>Insurance Service.</span></Typography>
                                <Typography sx={muiStyle.thank_page_sub_text}>Follow Us</Typography>
                                <Typography display="flex" justifyContent="center" mt='10px'>
                                    <img
                                        src={facebook_image}
                                        alt='facebook_image'
                                        style={{ cursor: 'pointer', height: '40px', width: '40px', backgroundColor: 'var(--white)', borderRadius: '50%' }}
                                        onClick={() => { openInNewTab("https://www.facebook.com/profile.php?id=61550129127653") }}
                                    />
                                    <Stack style={{ width: '25px' }} />
                                    <img
                                        src={instagram_image}
                                        alt='instagram_image'
                                        style={{ cursor: 'pointer', height: '40px', width: '40px', backgroundColor: 'var(--white)', borderRadius: '50%' }}
                                        onClick={() => openInNewTab("https://www.instagram.com/agvalleyinsurance2023/")}
                                    />
                                    <Stack style={{ width: '25px' }} />
                                    <img
                                        src={linkedin_image}
                                        alt='linkedin_image'
                                        style={{ cursor: 'pointer', height: '40px', width: '40px', backgroundColor: 'var(--white)', borderRadius: '50%' }}
                                        onClick={() => openInNewTab("https://www.linkedin.com/in/ag-valley-insurance-04a9bb287/")}
                                    />
                                    <Stack style={{ width: '25px' }} />
                                    <img
                                        src={whatsapp_image}
                                        alt='whatsapp_image'
                                        style={{ cursor: 'pointer', height: '40px', width: '40px', backgroundColor: 'var(--white)', borderRadius: '50%' }}
                                        onClick={() => openInNewTab("https://api.whatsapp.com/send/?phone=917990098863&text&type=phone_number&app_absent=0")}
                                    />
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default ThankYou