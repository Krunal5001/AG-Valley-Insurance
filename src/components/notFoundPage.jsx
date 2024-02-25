

import HomeIcon from '@mui/icons-material/Home';
import { Button, Grid } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../constants/routes';

const muiStyle = {
  oops: {
    fontWeight: "900",
    background: 'var(--white)',
    webkitTextFillColor: "transparent",
    webkitBackgroundClip: "text",
    color: 'var(--white)'
  },
  notFound: {
    fontWeight: 900,
    textAlign: 'center',
    color: 'var(--white)'
  },
  goToHome: {
    height: '44px',
    color: 'var(--white)',
    fontWeight: 400,
    fontSize: '16px',
    background: "var(--veryDark)",
    borderRadius: '10px',
    px: '50px',
    textTransform: 'unset',
    "&:hover, &:focus": {
      height: '44px',
      color: 'var(--white)',
      fontWeight: 400,
      fontSize: '16px',
      background: "var(--veryDark)",
      borderRadius: '10px',
      px: '50px',
      textTransform: 'unset',
    }
  }
}

const NotFoundPage = () => {

  const navigate = useNavigate();

  return (
    <Grid
      container
      height={{ md: 'calc(100vh - 83px)', xs: 'calc(100vh - 120px)' }}
      sx={{ display: "flex", flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: 'var(--black)' }}
    >
      <Grid
        item
        style={muiStyle.oops}
        sx={{ fontSize: { md: "150px", xs: "80px" } }}
      >
        Oops!
      </Grid>
      <Grid item style={muiStyle.notFound} sx={{ fontSize: { md: "30px", xs: "20px" } }}>404-PAGE NOT FOUND</Grid>
      <Button style={muiStyle.goToHome} onClick={() => navigate(ROUTES?.HOME)}><HomeIcon sx={{ marginRight: '5px' }} /> Go to Home</Button>
    </Grid>
  )
}

export default NotFoundPage