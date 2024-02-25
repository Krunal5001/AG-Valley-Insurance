import { Grid, Typography } from '@mui/material';
import React from 'react';

const muiStyle = {
    gallery_page_first_section_title: {
        fontWeight: "700",
        fontSize: "48px",
        color: "var(--white)",
        "@media(max-Width: 900px)": {
            fontSize: "36px",
        },
    }
}

const Gallery = () => {
    return (
        <Grid container sx={{ background: 'var(--black)' }}>
            <Grid item className='container_space' />
            <Grid item className='container_content'>
                {/* ---Section First--- */}
                <Grid container columnSpacing={{ lg: 14, md: 10, xs: 6 }} minHeight={{ md: 'calc(100vh - 83px)', xs: 'calc(100vh - 120px)' }} pt={{ md: '170px', sm: '130px', xs: '120px' }} pb={{ md: '80px', sm: '60px', xs: '50px' }} display='flex' alignItems='center'>
                    <Grid item xs={12}>
                        <Typography textAlign='center' sx={muiStyle.gallery_page_first_section_title}>Coming soon...</Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Gallery;