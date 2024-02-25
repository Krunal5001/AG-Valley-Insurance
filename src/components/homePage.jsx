import emailjs from '@emailjs/browser';
import { Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Input, Typography } from '@mui/material';
// import { Carousel } from 'antd';
import { Collapse } from 'antd';
import React, { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { AiFillFire, AiFillHome } from 'react-icons/ai';
import { BsCarFrontFill, BsEmojiHeartEyesFill, BsHeartPulseFill } from 'react-icons/bs';
import { MdCall, MdEmail } from 'react-icons/md';
import { RiLuggageCartFill } from 'react-icons/ri';
import { useLocation, useNavigate } from 'react-router-dom';
import { ROUTES } from '../constants/routes';
import { errorNotification, successNotification } from './notification';

const items = [
    {
        key: '1',
        label: 'Example 1',
        children: <Typography>Ram, a software engineer living in Bangalore meets with an accident and dies on the spot leaving his wife and son in deep emotional shock. He was just 40! He also has a home loan of INR. 30 lakhs running. Luckily, Ram has taken a term insurance cover of INR. 1 Cr. at the age of 32 years for 25 years of the policy tenure. His wife received compensation from the insurance company within 10 days which helped her pay off the debt and invest the corpus for future needs. If he had not taken the wise decision of investing in life insurance, his family would have been a huge financial crisis today! Insurance is important to secure your family’s future.</Typography>,
    },
    {
        key: '2',
        label: 'Example 2',
        children: <Typography>Sunil, an employee in a multinational company in Mumbai suddenly fell unconscious due to high fever. He was then rushed to the nearest hospital. He was admitted for 3 days in the hospital for diagnosis and treatment. When he was discharged after 3 days, his hospital bill came up to around INR. 70,000. Luckily, he had taken a health insurance coverage for INR. 3, 00,000. As the hospital was listed in the network hospitals of his insurer, bills were directly settled to the hospital. If he had not known the importance of insurance, he would have to pay INR.70, 000 out of his pocket. Insurance helps you to have financial stability during unforeseen events.</Typography>,
    }
];

const muiStyle = {
    main_title: {
        textAlign: 'center',
        color: 'var(--white)',
        fontWeight: 600,
        fontSize: '40px',
        "@media(max-Width: 900px)": {
            fontSize: '32px'
        },
        "@media(max-Width: 600px)": {
            fontSize: '28px'
        }
    },
    card_main: {
        background: 'var(--black) !important',
        border: '1px solid var(--white)'
    },
    card_media: {
        width: '100%',
        height: '80px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '20px'
    },
    card_box: {
        height: '70px',
        width: '70px',
        background: 'var(--veryDark)',
        borderRadius: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    card_icon: {
        fontSize: '40px',
        color: 'var(--white)'
    },
    card_content: {
        textAlign: 'center',
        width: '100%',
        fontWeight: 700,
        paddingLeft: '0',
        paddingRight: '0',
        color: 'var(--white)'
    },
    card_actions: {
        marginBottom: '20px',
        paddingLeft: '0',
        paddingRight: '0',
        width: '100%',
        justifyContent: 'center'
    },
    submit_btn: {
        height: '32px',
        color: 'var(--black)',
        fontWeight: 400,
        fontSize: '14px',
        background: "var(--white)",
        borderRadius: '4px',
        px: '30px',
        py: '0px',
        textTransform: 'unset',
        "@media(max-Width: 1200px)": {
            marginLeft: '0',
        },
        "&:hover, &:focus": {
            height: '32px',
            color: 'var(--black)',
            fontWeight: 400,
            fontSize: '14px',
            background: "var(--white)",
            borderRadius: '4px',
            px: '30px',
            py: '0px',
            textTransform: 'unset',
            "@media(max-Width: 1200px)": {
                marginLeft: '0',
            },
        }
    },
    home_page_title: {
        color: 'var(--black)',
        fontWeight: 500,
        fontSize: '48px',
        width: "80%",
        marginBottom: "30px",
        "@media(max-Width: 1200px)": {
            width: "100%",
        },
        "@media(max-Width: 900px)": {
            fontSize: '30px',
            marginBottom: "15px",
            textAlign: "center"
        },
    },
    home_page_btn: {
        textAlign: "start",
        "@media(max-Width: 900px)": {
            textAlign: "center"
        },
    },
    explore_service_btn: {
        fontSize: '20px',
        fontWeight: 400,
        color: "var(--lightBlue)",
        border: "2px solid var(--lightBlue)",
        px: '20px',
        textTransform: 'unset',
        "&:hover, &:focus": {
            fontSize: '20px',
            fontWeight: 400,
            color: "var(--lightBlue)",
            border: "2px solid var(--lightBlue)",
            px: '20px',
        }
    },
    type_of_heading: {
        color: 'var(--white)',
        fontWeight: 600,
        fontSize: '20px',
        "@media(max-Width: 600px)": {
            fontSize: '18px'
        }
    },
    type_of: {
        color: 'var(--white)',
        fontWeight: 600,
        fontSize: '16px'
    },
    form_submit_btn: {
        height: '44px',
        color: 'var(--black)',
        fontWeight: 400,
        fontSize: '16px',
        background: "var(--white)",
        borderRadius: '4px',
        px: '30px',
        marginTop: "100px",
        textTransform: 'unset',
        "@media(max-Width: 900px)": {
            marginTop: "30px",
        },
        "&:hover, &:focus": {
            height: '44px',
            color: 'var(--black)',
            fontWeight: 400,
            fontSize: '16px',
            background: "var(--white)",
            borderRadius: '10px',
            px: '30px',
            marginTop: "100px",
            textTransform: 'unset',
            "@media(max-Width: 900px)": {
                marginTop: "30px",
            },
        }
    }
}

const Home = () => {

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
    }

    // const contentStyle = {
    //     height: "100%",
    //     width: "100%",
    //     color: "#fff",
    //     lineHeight: "160px",
    //     textAlign: "center",
    //     background: "#364d79",
    // };

    return (
        <Grid container sx={{ background: 'var(--black)' }}>
            <Grid item className='container_space' />
            <Grid item className='container_content'>
                {/* ---Section First--- */}
                <Grid container columnSpacing={{ lg: 14, md: 10, xs: 6 }} pt={{ md: '170px', sm: '130px', xs: '120px' }}>
                    {/* <Grid item xs={12}>
                        <Carousel autoplay>
                            <div>
                                <img
                                    src={h1}
                                    alt=""
                                    style={contentStyle}
                                />
                            </div>
                        </Carousel>
                    </Grid> */}
                    <Grid item xs={0} md={3} />
                    <Grid item xs={12} md={6}>
                        <Typography sx={muiStyle.main_title}>OUR SERVICE</Typography>
                    </Grid>
                    <Grid item xs={12} mt={{ md: '40px', xs: '20px' }}>
                        <Grid container columnSpacing={2}>
                            <Grid item xs={6} sm={4} lg={2}>
                                <Card sx={muiStyle.card_main}>
                                    <CardMedia sx={muiStyle.card_media}>
                                        <Box sx={muiStyle.card_box}>
                                            <BsCarFrontFill style={muiStyle.card_icon} />
                                        </Box>
                                    </CardMedia>
                                    <CardContent sx={muiStyle.card_content}>
                                        VEHICLE<br />
                                        INSURANCE
                                    </CardContent>
                                    <CardActions sx={muiStyle.card_actions}>
                                        <Button type='button' sx={muiStyle.submit_btn} onClick={() => navigate(ROUTES?.CONTACT)}>Buy Now!</Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                            <Grid item xs={6} sm={4} lg={2}>
                                <Card sx={muiStyle.card_main} py={4}>
                                    <CardMedia sx={muiStyle.card_media}>
                                        <Box sx={muiStyle.card_box}>
                                            <BsHeartPulseFill style={muiStyle.card_icon} />
                                        </Box>
                                    </CardMedia>
                                    <CardContent sx={muiStyle.card_content}>
                                        HEALTH<br />
                                        INSURANCE
                                    </CardContent>
                                    <CardActions sx={muiStyle.card_actions}>
                                        <Button type='button' sx={muiStyle.submit_btn} onClick={() => navigate(ROUTES?.CONTACT)}>Buy Now!</Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                            <Grid item xs={6} sm={4} lg={2} mt={{ sm: '0', xs: '20px' }}>
                                <Card sx={muiStyle.card_main} py={4}>
                                    <CardMedia sx={muiStyle.card_media}>
                                        <Box sx={muiStyle.card_box}>
                                            <BsEmojiHeartEyesFill style={muiStyle.card_icon} />
                                        </Box>
                                    </CardMedia>
                                    <CardContent sx={muiStyle.card_content}>
                                        LIFE<br />
                                        INSURANCE
                                    </CardContent>
                                    <CardActions sx={muiStyle.card_actions}>
                                        <Button type='button' sx={muiStyle.submit_btn} onClick={() => navigate(ROUTES?.CONTACT)}>Buy Now!</Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                            <Grid item xs={6} sm={4} lg={2} mt={{ lg: '0', xs: '20px' }}>
                                <Card sx={muiStyle.card_main} py={4}>
                                    <CardMedia sx={muiStyle.card_media}>
                                        <Box sx={muiStyle.card_box}>
                                            <RiLuggageCartFill style={muiStyle.card_icon} />
                                        </Box>
                                    </CardMedia>
                                    <CardContent sx={muiStyle.card_content}>
                                        TRAVEL<br />
                                        INSURANCE
                                    </CardContent>
                                    <CardActions sx={muiStyle.card_actions}>
                                        <Button type='button' sx={muiStyle.submit_btn} onClick={() => navigate(ROUTES?.CONTACT)}>Buy Now!</Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                            <Grid item xs={6} sm={4} lg={2} mt={{ lg: '0', xs: '20px' }}>
                                <Card sx={muiStyle.card_main} py={4}>
                                    <CardMedia sx={muiStyle.card_media}>
                                        <Box sx={muiStyle.card_box}>
                                            <AiFillFire style={muiStyle.card_icon} />
                                        </Box>
                                    </CardMedia>
                                    <CardContent sx={muiStyle.card_content}>
                                        FIRE<br />
                                        INSURANCE
                                    </CardContent>
                                    <CardActions sx={muiStyle.card_actions}>
                                        <Button type='button' sx={muiStyle.submit_btn} onClick={() => navigate(ROUTES?.CONTACT)}>Buy Now!</Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                            <Grid item xs={6} sm={4} lg={2} mt={{ lg: '0', xs: '20px' }}>
                                <Card sx={muiStyle.card_main} py={4}>
                                    <CardMedia sx={muiStyle.card_media}>
                                        <Box sx={muiStyle.card_box}>
                                            <AiFillHome style={muiStyle.card_icon} />
                                        </Box>
                                    </CardMedia>
                                    <CardContent sx={muiStyle.card_content}>
                                        HOME<br />
                                        INSURANCE
                                    </CardContent>
                                    <CardActions sx={muiStyle.card_actions}>
                                        <Button type='button' sx={muiStyle.submit_btn} onClick={() => navigate(ROUTES?.CONTACT)}>Buy Now!</Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                {/* ---Section Second--- */}
                <Typography mt={{ xs: '30px' }} sx={muiStyle.type_of_heading}>List of benefits and importance of insurance</Typography><br />
                <Grid container >
                    <Grid item xs={12} sm={6}>
                        <Typography sx={muiStyle.type_of} textAlign='justify'>- Provides peace of mind</Typography>
                        <Typography sx={muiStyle.type_of} textAlign='justify'>- Promotes risk control</Typography>
                        <Typography sx={muiStyle.type_of} textAlign='justify'>- Promotes economic growth</Typography>
                        <Typography sx={muiStyle.type_of} textAlign='justify'>- Distribution of risk</Typography>
                        <Typography sx={muiStyle.type_of} textAlign='justify'>- Helps to get loan easily</Typography>
                        <Typography sx={muiStyle.type_of} textAlign='justify'>- Inculcates savings habit</Typography></Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography sx={muiStyle.type_of} textAlign='justify'>- Provides tax benefit</Typography>
                        <Typography sx={muiStyle.type_of} textAlign='justify'>- Financial safety for the family</Typography>
                        <Typography sx={muiStyle.type_of} textAlign='justify'>- Safety of financial status</Typography>
                        <Typography sx={muiStyle.type_of} textAlign='justify'>- Wealth creation goals</Typography>
                        <Typography sx={muiStyle.type_of} textAlign='justify'>- Wealth preservation</Typography>
                        <Typography sx={muiStyle.type_of} textAlign='justify'>- Wealth distribution</Typography>
                    </Grid>
                    <Typography sx={{ ...muiStyle.type_of_heading, marginTop: '22px' }} textAlign='justify'>Examples of why insurance should be taken</Typography>
                    <Collapse style={{ width: '100%', marginTop: '14px' }} items={items} />
                </Grid>
                <Grid container mt={{ md: '80px', sm: '60px', xs: '50px' }} pb={{ md: '80px', sm: '60px', xs: '50px' }}>
                    <Grid item xs={12} sx={muiStyle.main_title}>Book your Services Now !</Grid>
                    <Grid container columnSpacing={{ lg: 8, md: 6, xs: 4 }} mt={{ md: '40px', xs: '20px' }}>
                        <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }} mt={{ xs: '50px', md: 0 }}>
                            <Box width="100%" height={{ md: '100%', xs: '500px' }}>
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
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6} pl={{ lg: 5, md: 3, xs: 0 }} order={{ xs: 1, md: 2 }}>
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
                                    className="no-spin-arrows"
                                    placeholder="Phone Number"
                                    sx={{ width: "100%", marginTop: { md: '35px', xs: '15px' }, height: '50px' }}
                                />
                                {errors.phone && <Typography sx={{ color: 'red' }}>{errors.phone.message}</Typography>}
                                <Box width='100%' textAlign='center'>
                                    <Button type="submit" sx={muiStyle.form_submit_btn} disabled={loading === true}>Submit</Button>
                                </Box>
                            </form>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} mt='15px' display="flex" alignItems='center'>
                        <MdCall className="phone_email_icon" onClick={() => (window.location = "tel:+917990098863")} />
                        <Typography fontSize={{ sm: '16px', xs: '14px' }} color='var(--white)' pl={1} onClick={() => (window.location = "tel:+917990098863")}>+91 7990098863</Typography>
                    </Grid>
                    <Grid item xs={12} mt='15px' display='flex' alignItems='center'>
                        <MdEmail className="phone_email_icon" onClick={() => (window.location = "mailto:agvalleyinsurance2023@gmail.com")} />
                        <Typography fontSize={{ sm: '16px', xs: '14px' }} color='var(--white)' pl={1} onClick={() => (window.location = "mailto:agvalleyinsurance2023@gmail.com")}>agvalleyinsurance2023@gmail.com</Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Home;