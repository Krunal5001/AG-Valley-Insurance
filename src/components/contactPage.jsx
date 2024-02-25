import emailjs from '@emailjs/browser';
import { Box, Button, Grid, Input, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { useForm } from 'react-hook-form';
import { MdCall, MdEmail } from 'react-icons/md';
import { useLocation, useNavigate } from "react-router-dom";
import { ROUTES } from "../constants/routes";
import { errorNotification, successNotification } from './notification';

const muiStyle = {
    contact_page_first_section_title: {
        fontWeight: "700",
        fontSize: "48px",
        color: "var(--white)",
        "@media(max-Width: 900px)": {
            fontSize: "30px",
        }
    },
    contact_page_first_section_titleBlue: {
        fontWeight: "700",
        fontSize: "48px",
        lineHeight: "72px",
        color: "var(--green)",
        "@media(max-Width: 900px)": {
            fontSize: "30px",
            lineHeight: "auto",
        }
    },
    contact_page_first_section_submit_btn: {
        height: "44px",
        color: "var(--black)",
        fontWeight: 400,
        fontSize: "16px",
        background: "var(--white)",
        borderRadius: "4px",
        px: "30px",
        marginTop: "30px",
        textTransform: "unset",
        "&:hover, &:focus": {
            height: "44px",
            color: "var(--black)",
            fontWeight: 400,
            fontSize: "16px",
            background: "var(--white)",
            borderRadius: "4px",
            px: "30px",
            marginTop: "30px",
            textTransform: "unset",
        },
    },
    contact_page_second_section_title: {
        textAlign: 'center',
        color: 'var(--white)',
        fontWeight: 600,
        fontSize: '40px',
        marginBottom: '20px',
        "@media(max-Width: 900px)": {
            fontSize: '32px'
        },
        "@media(max-Width: 600px)": {
            fontSize: '28px'
        }
    },
    contact_page_second_section_dec: {
        color: 'var(--white)',
        fontWeight: 400,
        fontSize: '20px',
        "@media(max-Width: 900px)": {
            fontSize: '18px'
        },
    },
    contact_page_second_section_dec_two: {
        color: 'var(--white)',
        fontWeight: 400,
        fontSize: '20px',
        "@media(max-Width: 900px)": {
            fontSize: '18px'
        }
    }
};

const Contact = () => {

    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const pathname = useLocation();
    const form = useRef();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    const sendEmail = (e) => {
        setLoading(true);
        emailjs.sendForm('service_b1pqf76', 'template_ietr773', form.current, 'GxGJMT5dCwAZS_aTs')
            .then((result) => {
                navigate(ROUTES?.THANK_YOU);
                successNotification('Your data has been sent successfully!');
                form.current.reset();
                setLoading(false);
            }, (error) => {
                errorNotification('Error in your data');
                form.current.reset();
                setLoading(false);
            });
    };

    return (
        <Grid container sx={{ background: 'var(--black)' }}>
            <Grid item className='container_space' />
            <Grid item className='container_content'>
                {/* ---Section First--- */}
                <Grid container columnSpacing={{ lg: 8, md: 6, xs: 4 }} pt={{ md: '170px', sm: '130px', xs: '120px' }}>
                    <Grid item xs={12} md={6}>
                        <Typography sx={muiStyle.contact_page_first_section_title}>Ready to make the most out of your property? <span className='contact_page_first_section_titleBlue'>Contact Us.</span></Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <form ref={form} onSubmit={handleSubmit(sendEmail)}>
                            <Input
                                {...register('name', { required: 'Name is required.' })}
                                name="name"
                                type="text"
                                placeholder='Name'
                                sx={{ width: "100%", height: '50px' }}
                            />
                            {errors.name && <Typography sx={{ color: 'red' }}>{errors.name.message}</Typography>}
                            <Input
                                {...register('email', {
                                    required: 'Email Address is required.',
                                    pattern: {
                                        value: /\S+@\S+\.\S+/,
                                        message: 'Email Must be a valid format.',
                                    },
                                })}
                                name="email"
                                type="email"
                                placeholder="Email Address"
                                sx={{ width: "100%", marginTop: { md: '35px', xs: '15px' }, height: '50px' }}
                            />
                            {errors.email && <Typography sx={{ color: 'red' }}>{errors.email.message}</Typography>}
                            <Input
                                {...register('phone',
                                    {
                                        required: 'Phone number is required.',
                                        maxLength: { value: 10, message: 'Phone number must be exactly 10 digits.' },
                                        minLength: { value: 10, message: 'Phone number must be exactly 10 digits.' },
                                        validate: value => value > 0 || 'Phone number enter a positive.',
                                    })}
                                name="phone"
                                type="number"
                                placeholder="Phone Number"
                                sx={{ width: "100%", marginTop: { md: '35px', xs: '15px' }, height: '50px' }}
                            />
                            {errors.phone && <Typography sx={{ color: 'red' }}>{errors.phone.message}</Typography>}
                            <Box width="100%" textAlign="center">
                                <Button type="submit" sx={muiStyle.contact_page_first_section_submit_btn} disabled={loading === true}>Submit</Button>
                            </Box>
                        </form>
                    </Grid>
                </Grid>
                {/* ---Section Second--- */}
                <Grid container mt={{ md: '80px', sm: '60px', xs: '50px' }}>
                    <Grid item xs={12}>
                        <Typography textAlign='center' sx={muiStyle?.contact_page_second_section_title}>SERVICE HOUR</Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} textAlign='center' >
                        <Typography sx={muiStyle.contact_page_second_section_dec_two}>Monday to Saturday</Typography>
                        <Typography sx={muiStyle.contact_page_second_section_dec}>09:00am - 08:00pm</Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} textAlign='center' mt={{ sm: 'auto', xs: '15px' }}>
                        <Typography sx={muiStyle.contact_page_second_section_dec_two}>Sunday</Typography>
                        <Typography sx={muiStyle.contact_page_second_section_dec}>09:00am - 01:00pm</Typography>
                    </Grid>
                </Grid>
                {/* ---Section Three--- */}
                <Grid container mt={{ md: '80px', sm: '60px', xs: '50px' }}>
                    <Grid item xs={0} sm={1} md={2} lg={3}></Grid>
                    <Grid item xs={12} sm={10} md={8} lg={6} height='500px'>
                        <iframe
                            title="Google Map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.3590171882215!2d72.88468067490554!3d21.21760748126621!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f809e05f34d%3A0x33910446edc96570!2sUB%20AND%20COMPANY!5e0!3m2!1sen!2sin!4v1691828302049!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: '0', filter: 'invert(90%) grayscale(1)' }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </Grid>
                </Grid>
                {/* ---Section Four--- */}
                <Grid container columnSpacing={{ lg: 10, md: 8, xs: 6 }} mt='20px' pb={{ md: '80px', sm: '60px', xs: '50px' }}>
                    <Grid item xs={12} md={6} display="flex" alignItems='center' justifyContent={{ md: 'center', xs: 'start' }}>
                        <MdCall className="phone_email_icon" onClick={() => (window.location = "tel:+917990098863")} />
                        <Typography pl={1} color='var(--white)' fontSize={{ sm: '16px', xs: '14px' }} onClick={() => (window.location = "tel:+917990098863")}>+91 7990098863</Typography>
                    </Grid>
                    <Grid item xs={12} md={6} display="flex" alignItems='center' justifyContent={{ md: 'center', xs: 'start' }} mt={{ md: 'auto', xs: '10px' }}>
                        <MdEmail className="phone_email_icon" onClick={() => (window.location = "mailto:agvalleyinsurance2023@gmail.com")} />
                        <Typography pl={1} color='var(--white)' fontSize={{ sm: '16px', xs: '14px' }} onClick={() => (window.location = "mailto:agvalleyinsurance2023@gmail.com")}>agvalleyinsurance2023@gmail.com</Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Contact;