import MenuIcon from '@mui/icons-material/Menu';
import { Grid } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Logo from '../assets/Logo.png';
import { ROUTES } from '../constants/routes';

const style = {
    header_btn: {
        color: 'var(--white)',
        fontWeight: 400,
        fontSize: '16px',
        cursor: 'pointer',
    },
    header_small_btn: {
        color: 'var(--black)',
        fontWeight: 400,
        fontSize: '16px',
        cursor: 'pointer',
    },
    active_head: {
        fontWeight: 700,
        color: 'var(--white)',
    }
}

const Header = () => {

    const [anchorElNav, setAnchorElNav] = useState(null);

    const navigate = useNavigate();
    const location = useLocation();

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    React.useEffect(() => {
        document.title = (location.pathname === "/" && 'AG Valley Insurance') || (location.pathname === "/insurance-services" && 'Service - AG Valley Insurance') || (location.pathname === "/gallery" && 'Gallery - AG Valley Insurance') || (location.pathname === '/contact-us' && 'Contact US - AG Valley Insurance') || (location.pathname === '/thank-you' && 'Thank You - AG Valley Insurance') || (location.pathname === '/404' && 'Page Not Found - AG Valley Insurance')
        // eslint-disable-next-line
    }, [location]);

    return (
        <AppBar position="static" height={{ md: '90px', xs: '70px' }} sx={{ justifyContent: 'center', backgroundColor: 'var(--gray)', position: 'fixed', zIndex: '1' }}>
            <Grid container sx={{ background: 'var(--veryDark)' }}>
                <Grid item className='container_space' />
                <Grid item className='container_content'>
                    <Toolbar disableGutters>
                        <Typography
                            height={{ md: '90px', xs: '70px' }}
                            sx={{
                                display: { xs: 'none', md: 'flex' },
                            }}
                        >
                            <Link to={ROUTES?.HOME}>
                                <img src={Logo} alt='' className='main_logo' />
                            </Link>
                        </Typography>

                        <Typography
                            height={{ md: '90px', xs: '70px' }}
                            sx={{
                                display: { xs: 'flex', md: 'none' },
                            }}
                        >
                            <Link to={ROUTES?.HOME}>
                                <img src={Logo} alt='' className='main_logo' />
                            </Link>
                        </Typography>

                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, justifyContent: 'flex-end' }}>
                            <IconButton
                                edge="end"
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="var(--white)"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >
                                <MenuItem onClick={() => { navigate(ROUTES?.HOME); handleCloseNavMenu(); }}>
                                    <Typography textAlign="center" sx={style.header_btn}>Home</Typography>
                                </MenuItem>
                                <MenuItem onClick={() => { navigate(ROUTES?.SERVICE); handleCloseNavMenu(); }}>
                                    <Typography textAlign="center" sx={style.header_btn}>Insurance</Typography>
                                </MenuItem>
                                <MenuItem onClick={() => { navigate(ROUTES?.GALLERY); handleCloseNavMenu(); }}>
                                    <Typography textAlign="center" sx={style.header_btn}>Gallery</Typography>
                                </MenuItem>
                                <MenuItem onClick={() => { navigate(ROUTES?.CONTACT); handleCloseNavMenu(); }}>
                                    <Typography textAlign="center" sx={style.header_btn}>Contact Us</Typography>
                                </MenuItem>
                            </Menu>
                        </Box>

                        <Box sx={{ flexGrow: 2, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end' }}>
                            <Button style={{ marginLeft: '75px' }} sx={location.pathname === "/" ? style.active_head : style.header_btn} onClick={() => navigate(ROUTES?.HOME)}>Home</Button>
                            <Button style={{ marginLeft: '75px' }} sx={location.pathname === "/insurance-services" ? style.active_head : style.header_btn} onClick={() => navigate(ROUTES?.SERVICE)}>Insurance</Button>
                            <Button style={{ marginLeft: '75px' }} sx={location.pathname === "/gallery" ? style.active_head : style.header_btn} onClick={() => navigate(ROUTES?.GALLERY)}>Gallery</Button>
                            <Button style={{ marginLeft: '75px' }} sx={location.pathname === "/contact-us" ? style.active_head : style.header_btn} onClick={() => navigate(ROUTES?.CONTACT)}>Contact Us</Button>
                        </Box>
                    </Toolbar>
                </Grid>
            </Grid>
        </AppBar >
    );
}
export default Header;