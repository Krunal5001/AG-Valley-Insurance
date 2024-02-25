import { AppBar, Grid, Stack, Typography } from '@mui/material';
import React from 'react';
import facebook_image from '../assets/facebook__image.png';
import instagram_image from '../assets/instagram_image.png';
import linkedin_image from '../assets/linkedin_image.png';
import whatsapp_image from '../assets/whatsapp_image.png';

const Footer = () => {

    const openInNewTab = (url) => {
        window.open(url, "_blank", "noopener,noreferrer");
    };

    return (
        <AppBar position='bottom'>
            <Grid container sx={{ background: 'var(--veryDark)' }}>
                <Grid item className='container_space' />
                <Grid item className='container_content'>
                    <Grid container height={{ md: '83px', xs: '120px' }} alignItems='center'>
                        <Grid item xs={12} md={7}>
                            <Typography color='var(--white)'>© Insurance 2023 by. All Rights Reserved.</Typography>
                            <Typography color='var(--white)'>Design by BK_5001.</Typography>
                        </Grid>
                        <Grid item xs={12} md={5}>
                            <Typography display='flex' justifyContent={{ md: 'end', xs: 'space-evenly' }}>
                                <img
                                    src={facebook_image}
                                    alt='facebook_image'
                                    style={{ cursor: 'pointer', height: '30px', width: '30px', backgroundColor: 'var(--white)', borderRadius: '50%' }}
                                    onClick={() => { openInNewTab("https://www.facebook.com/profile.php?id=61550129127653") }}
                                />
                                <Stack style={{ width: '25px' }} />
                                <img
                                    src={instagram_image}
                                    alt='instagram_image'
                                    style={{ cursor: 'pointer', height: '30px', width: '30px', backgroundColor: 'var(--white)', borderRadius: '50%' }}
                                    onClick={() => openInNewTab("https://www.instagram.com/agvalleyinsurance2023/")}
                                />
                                <Stack style={{ width: '25px' }} />
                                <img
                                    src={linkedin_image}
                                    alt='linkedin_image'
                                    style={{ cursor: 'pointer', height: '30px', width: '30px', backgroundColor: 'var(--white)', borderRadius: '50%' }}
                                    onClick={() => openInNewTab("https://www.linkedin.com/in/ag-valley-insurance-04a9bb287/")}
                                />
                                <Stack style={{ width: '25px' }} />
                                <img
                                    src={whatsapp_image}
                                    alt='whatsapp_image'
                                    style={{ cursor: 'pointer', height: '30px', width: '30px', backgroundColor: 'var(--white)', borderRadius: '50%' }}
                                    onClick={() => openInNewTab("https://api.whatsapp.com/send/?phone=917990098863&text&type=phone_number&app_absent=0")}
                                />
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </AppBar>
    )
}

export default Footer;