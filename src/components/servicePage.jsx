import { Box, Grid, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import Marquee from "react-fast-marquee";
import { useLocation } from 'react-router-dom';
import bajajAllianz from '../assets/Bajaj-Allianz-Logo.png';
import bhartiAXALifeInsurance from '../assets/BhartiAXALifeInsurance.png';
import CarPhoto from '../assets/CarPhoto.jpg';
import FirePhoto from '../assets/FirePhoto.jpg';
import future from '../assets/Future.jpg';
import goDigit from '../assets/GoDigit.jpg';
import hDFCErgo from '../assets/HDFC-Ergo-logo.png';
import hDFCErgoHealth from '../assets/HDFCErgoHealth.jpg';
import hDFCLife from '../assets/HDFCLife.png';
import HelthPhoto from '../assets/HelthPhoto.jpg';
import HomePhoto from '../assets/HomePhoto.jpg';
import iFFCOTokioVehical from '../assets/IFFCO-Tokio-Vehical.jpg';
import iFFCOTokio from '../assets/IFFCOTokio.jpeg';
import library from '../assets/Library.svg';
import LifePhoto from '../assets/LifePhoto.jpg';
import lic from '../assets/Life_Insurance_Corporation_of_India.svg';
import magma from '../assets/Magma.png';
import maxLifeInsurance from '../assets/Max_Life_Insurance.png';
import newIndia from '../assets/NewIndia.webp';
import relianceGeneralInsurance from '../assets/Reliance_General_Insurance.png';
import ShriramGeneralInsurance from '../assets/Shriram_General_Insurance.jpg';
import starHealth from '../assets/Star_Health.png';
import tataAig from '../assets/TataAig.jpg';
import TravelPhoto from '../assets/TravelPhoto.jpg';
import zuno from '../assets/Zuno.png';
import cholamandalam from '../assets/cholamandalam.jpeg';
import iciciPrudentialLife from '../assets/iciciPrudentialLife.png';
import royalSundaram from '../assets/royalSundaram.webp';
import sbi from '../assets/sbi.png';
import unitedIndiaInsurance from '../assets/united-india-insurance.avif';
import universalSompoGeneral from '../assets/universalSompoGeneral.avif';

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
    image_part: {
        height: '500px',
        width: '100%',
        "@media(max-Width: 900px)": {
            height: 'auto',
            width: '75%'
        },
        "@media(max-Width: 600px)": {
            width: '85%'
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
        fontSize: '18px',
        "@media(max-Width: 600px)": {
            fontSize: '16px'
        }
    },
    marquee_box: {
        height: '120px',
        width: '250px',
        margin: '10px 7px',
        background: 'var(--white)',
        "@media(max-Width: 600px)": {
            height: '80px',
            width: '180px',
        }
    }
}

const Service = () => {

    const pathname = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <Grid container sx={{ background: 'var(--black)' }}>
            <Grid item className='container_space' />
            <Grid item className='container_content'>
                {/* ---Section First--- */}
                <Grid container columnSpacing={{ lg: 14, md: 10, xs: 6 }} pt={{ md: '170px', sm: '130px', xs: '120px' }}>
                    <Grid item xs={0} md={3} />
                    <Grid item xs={12} md={6}>
                        <Typography sx={muiStyle.main_title}>VEHICLE INSURANCE</Typography>
                    </Grid>
                    <Grid item xs={12} md={6} textAlign='-webkit-center'>
                        <Typography sx={muiStyle.image_part}>
                            <img src={CarPhoto} alt='CarPhoto' width='100%' height='100%' />
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={6} display='flex' alignItems='center'>
                        <Typography textAlign='justify' color='var(--white)'>Vehicle  insurance is an agreement between the insurance company and the vehicle  owner wherein, the vehicle  owner will pay premiums and the insurance company covers for loss or damage caused to the vehicle . Vehicle  Insurance is mandatory in India regardless of whether it is a commercial vehicle or a personal vehicle.</Typography>
                    </Grid>
                    <Grid item xs={12}><br />
                        <Typography sx={muiStyle.type_of_heading}>Types of Vehicle Insurance</Typography><br />
                        <Typography sx={muiStyle.type_of} textAlign='justify'>1. Third-Party Liability Vehicle Insurance:</Typography>
                        <Typography textAlign='justify' color='var(--white)'>Cost of repairs/replacement of the damaged vehicle of third parties. Cost of hospitalization and treatment of third parties. Liabilities arising out of death of third parties.</Typography>
                        <Typography textAlign='justify' color='var(--white)'>According to the Motor Vehicles Act, third-party vehicle  insurance coverage is a must to drive on the roads. The sum assured should be according to the driving conditions and sufficiently high to avoid out-of-pocket payments from your side.</Typography><br />
                        <Typography sx={muiStyle.type_of} textAlign='justify'>2. Collision Damage or Own Damage (OD) Vehicle Insurance:</Typography>
                        <Typography textAlign='justify' color='var(--white)'>When you opt for collision damage vehicle  insurance coverage, the cost of repairs to your vehicle that has been damaged is reimbursed. To determine the cost of collision coverage, its age and Insured Declared Value are taken into account to arrive at the premium. The IDV is based on the market value of the vehicle.</Typography>
                        <Typography textAlign='justify' color='var(--white)'>When a claim is lodged under collision coverage policy, the maximum amount payable under the policy is given by the IDV less accumulated depreciation. If you have purchased your vehicle on a loan, you should hold collision cover.</Typography><br />
                        <Typography sx={muiStyle.type_of} textAlign='justify'>3. Personal Accident Vehicle Insurance:</Typography>
                        <Typography textAlign='justify' color='var(--white)'>When you wish to protect yourself, i.e., the owner-driver of the vehicle , by opting for reimbursement of medical expenses after an accident, you are using personal accident vehicle  insurance coverage.</Typography><br />
                        <Typography sx={muiStyle.type_of} textAlign='justify'>4. Zero Depreciation Vehicle Insurance:</Typography>
                        <Typography textAlign='justify' color='var(--white)'>This coverage is generally offered as an add-on to vehicle  insurance policies in India. Suppose your vehicle is damaged and you need to replace the parts. The insurer will consider the depreciated value of the parts for claim settlement. A Zero Depreciation Cover will help you get the complete claim amount without accounting for any depreciation in the costs.</Typography><br />
                        <Typography sx={muiStyle.type_of} textAlign='justify'>5. Comprehensive Vehicle  Insurance:</Typography>
                        <Typography textAlign='justify' color='var(--white)'>This type of coverage gives the highest level of protection as it includes liability for third parties, damage to own vehicle, personal accident cover, and all non-collision damage such as storms, floods, fire and theft. You can further enhance a comprehensive vehicle  insurance policy with a choice of add-ons.</Typography><br />
                    </Grid>
                    <Grid item xs={12}>
                        <Marquee>
                            <Box sx={muiStyle.marquee_box}>
                                <img src={goDigit} alt='goDigit' width='100%' height='100%' />
                            </Box>
                            <Box sx={muiStyle.marquee_box}>
                                <img src={royalSundaram} alt='royalSundaram' width='100%' height='100%' />
                            </Box>
                            <Box sx={muiStyle.marquee_box}>
                                <img src={hDFCErgo} alt='hDFCErgo' width='100%' height='100%' />
                            </Box>
                            <Box sx={muiStyle.marquee_box}>
                                <img src={iFFCOTokioVehical} alt='iFFCOTokioVehical' width='100%' height='100%' />
                            </Box>
                            <Box sx={muiStyle.marquee_box}>
                                <img src={future} alt='future' width='100%' height='100%' />
                            </Box>
                            <Box sx={muiStyle.marquee_box}>
                                <img src={relianceGeneralInsurance} alt='relianceGeneralInsurance' width='100%' height='100%' />
                            </Box>
                            <Box sx={muiStyle.marquee_box}>
                                <img src={bajajAllianz} alt='bajajAllianz' width='100%' height='100%' />
                            </Box>
                            <Box sx={muiStyle.marquee_box}>
                                <img src={magma} alt='magma' width='100%' height='100%' />
                            </Box>
                            <Box sx={muiStyle.marquee_box}>
                                <img src={library} alt='library' width='100%' height='100%' />
                            </Box>
                            <Box sx={muiStyle.marquee_box}>
                                <img src={cholamandalam} alt='cholamandalam' width='100%' height='100%' />
                            </Box>
                            <Box sx={muiStyle.marquee_box}>
                                <img src={ShriramGeneralInsurance} alt='ShriramGeneralInsurance' width='100%' height='100%' />
                            </Box>
                            <Box sx={muiStyle.marquee_box}>
                                <img src={tataAig} alt='tataAig' width='100%' height='100%' />
                            </Box>
                            <Box sx={muiStyle.marquee_box}>
                                <img src={iciciPrudentialLife} alt='iciciPrudentialLife' width='100%' height='100%' />
                            </Box>
                            <Box sx={muiStyle.marquee_box}>
                                <img src={newIndia} alt='newIndia' width='100%' height='100%' />
                            </Box>
                            <Box sx={muiStyle.marquee_box}>
                                <img src={unitedIndiaInsurance} alt='unitedIndiaInsurance' width='100%' height='100%' />
                            </Box>
                        </Marquee>
                    </Grid>
                </Grid>
                {/* ---Section Second--- */}
                <Grid container columnSpacing={{ lg: 14, md: 10, xs: 6 }} mt={{ md: '80px', sm: '60px', xs: '50px' }}>
                    <Grid item xs={0} md={3} />
                    <Grid item xs={12} md={6}>
                        <Typography sx={muiStyle.main_title}>HEALTH INSURANCE</Typography>
                    </Grid>
                    <Grid item xs={12} md={6} textAlign='-webkit-center'>
                        <Typography sx={muiStyle.image_part}>
                            <img src={HelthPhoto} alt='HelthPhoto' width='100%' height='100%' />
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={6} display='flex' alignItems='center'>
                        <Typography textAlign='justify' color='var(--white)'>Health insurance or medical insurance is a type of insurance that covers the whole or a part of the risk of a person incurring medical expenses. As with other types of insurance, risk is shared among many individuals. By estimating the overall risk of health risk and health system expenses over the risk pool, an insurer can develop a routine finance structure, such as a monthly premium or payroll tax, to provide the money to pay for the health care benefits specified in the insurance agreement. The benefit is administered by a central organization, such as a government agency, private business, or not-for-profit entity.</Typography>
                    </Grid>
                    <Grid item xs={12}><br />
                        <Typography sx={muiStyle.type_of_heading}>Types of Helth Insurance</Typography><br />
                        <Typography sx={muiStyle.type_of} textAlign='justify'>1. Individual Health Insurance:</Typography>
                        <Typography textAlign='justify' color='var(--white)'>An Individual Health Insurance plan is meant for a single person. As the name suggests, it can be bought by a single individual. The individual who gets himself insured with this plan is compensated for the expenses incurred for illness and medical expenses. Such types of medical insurance plan cover all the hospitalisation, surgical, pre and post medication expenditures till the insured limit is reached. The premium of the plan is decided on the basis of the buyer’s age and medical history. Moreover, the insured individual can cover his spouse, his children, and parents, too by paying an extra premium under the same plan. However, if you get insured for any existing illness, there is a waiting period of 2-3 years for claiming the benefits.</Typography><br />
                        <Typography sx={muiStyle.type_of} textAlign='justify'>2. Family Health Insurance:</Typography>
                        <Typography textAlign='justify' color='var(--white)'>Popularly known as the Family Floater Plan, Family Health Insurance Policy secures your entire family under a single cover. Health insurance plans for family covers all the members of your family including your spouse, kids, and elders. Only one member of the family has to pay the premium, and the entire family gets insured in a single premium. In case two family members are getting simultaneous treatment, you can claim the insurance for both of them till the limit is reached. The premium is decided on the basis of the age of the eldest member to be covered up in the plan. So, try to avoid adding the members who are above 60 years in your family health insurance plan as they are more prone to illness, and thus, the premium will get impacted.</Typography><br />
                        <Typography sx={muiStyle.type_of} textAlign='justify'>3. Critical Illness Health Insurance:</Typography>
                        <Typography textAlign='justify' color='var(--white)'>The Critical Illness Insurance plan insures the person by offering a lump sum amount of money for life-threatening diseases. At the time of buying the insurance, the chosen health problems are included, and if you get affected by any of the pre-selected conditions, you can claim your insurance. Hospitalisation is not required to file a claim under this type of insurance policy. Only the diagnosis of the disease can make you avail the benefits of the critical illness insurance. The amount to be paid is pre-decided irrespective of pre and post-hospitalization expenses.</Typography><br />
                        <Typography sx={muiStyle.type_of} textAlign='justify'>4. Senior Citizen Health Insurance:</Typography>
                        <Typography textAlign='justify' color='var(--white)'>As indicated by the name, such types of Health Insurance in India provides coverage to people who are 65 years and above. So if you are planning to buy an insurance policy for your parents or grandparents, then this is the best insurance policy for you. The Senior Citizen Health Insurance will offer you coverage for the cost of hospitalisation and medicines, whether it arises from a health issue or any accident. It covers hospitalisation expenses and post-treatment costs too. On top of this, some other benefits like Domiciliary Hospitalization and Psychiatric benefits are also being covered. The upper age limit has been marked at 70 years of age. Also, the insurer can ask for a complete body checkup before he sells the Senior Citizen Health Insurance. Moreover, the premium for this plan is comparatively higher as the senior citizens are more prone to illness.</Typography><br />
                        <Typography sx={muiStyle.type_of} textAlign='justify'>5. Top Up Health Insurance:</Typography>
                        <Typography textAlign='justify' color='var(--white)'>An individual can buy the Top Up Health Insurance plan if he seeks coverage for higher amounts. But there is a “Deductible Clause” added to this policy. Therefore, when the claim is made, the payment done is over and above the pre-defined limit that is mentioned in the policy. Moreover, there is also a Super Top-Up plan available for the individual. It provides additional coverage over the regular policy to increase the amount of sum insured. The Super Top-up plan can only be used once the insured sum of the regular policy gets exhausted.</Typography><br />
                        <Typography sx={muiStyle.type_of} textAlign='justify'>6. Hospital Daily Cash:</Typography>
                        <Typography textAlign='justify' color='var(--white)'>Another segment is the different types of health insurance policy providing an innovative solution is the Hospital Daily Cash. If you feel insecure about buying an insurance policy, then you should go further with this plan and learn about how these health insurance policies work. This plan can help you to protect yourself from unexpected expenses during your hospitalisation. Once a person gets hospitalised, the routine hospital expenses are not fixed, and they tend to change as per the condition. In such a situation, the Hospital Daily Cash works the best for an individual. In this plan, the individual gets a daily cash benefit of Rs. 500 to 10,000, as per the coverage amount selected at the time of insurance. Convalescence benefits are also offered in some of the plans if the individual gets hospitalised for more than seven days. Other add-ons include Parental accommodation and wellness coach.</Typography><br />
                        <Typography sx={muiStyle.type_of} textAlign='justify'>7. Personal Accident Insurance:</Typography>
                        <Typography textAlign='justify' color='var(--white)'>The number of road accident cases have increased over the years, and that is why today, there are dedicated types of health insurance in India to protect the citizens. Thus, people end up losing their life or getting disabled, and bearing the treatment expenses can be a bit traumatising. So, availing of the personal accident insurance policy is a wise idea. This policy provides a lump sum amount to the victim or his/her family as support. Some of the plans also offer education benefits and orphan benefits meant to cover the expenses of the children. Moreover, Bajaj Allianz also provides add-on coverage like temporary total disablement, assistance service, worldwide emergency, and accident in-patient hospitalisation with personal accident plans. Other than this, if the insured suffers from an accident and has any loan obligations, it will also be taken care of by the insurance provider.</Typography><br />
                        <Typography sx={muiStyle.type_of} textAlign='justify'>8. Mediclaim:</Typography>
                        <Typography textAlign='justify' color='var(--white)'>Illnesses and accidents do not come with a pre-notification. The same goes for the expenses that one has to bear once the person gets hospitalised for any of these. Therefore, one should go for buying a Mediclaim Policy. The Mediclaim Policy ensures compensation for your hospitalisation expenses in case of any illness and accident. It provides coverage for the in-patient expenses that include surgery expenses, doctor’s fees, nursing charges, oxygen, and anaesthesia. The Mediclaim Policy is available in the market as group mediclaim, individual medical insurance, overseas medical insurance, etc.</Typography><br />
                        <Typography sx={muiStyle.type_of} textAlign='justify'>9. Group Health Insurance:</Typography>
                        <Typography textAlign='justify' color='var(--white)'>Group Health is one of the up and coming types of health insurance plans trending these days. Many medium and large-scale enterprises are offering this insurance policy to the employees. This type of health insurance is bought by the employer of the company for its employees. The premium of this policy is comparatively lower than the Individual Health Insurance Policy. It is offered to the group of employees to meet the financial crisis and prudence in the company.</Typography><br />
                        <Typography sx={muiStyle.type_of} textAlign='justify'>10. Disease-Specific (M-Care, Corona Kavach, etc.):</Typography>
                        <Typography textAlign='justify' color='var(--white)'>Nowadays, people are prone to get infected by an array of illnesses, and one of them is Covid-19. Thus, treatment for such infections can be a bit heavy on your pocket. Therefore, to make it easy for the people to avail treatment Bajaj Allianz has introduced some disease-specific insurance policies.Therefore, you must think of buying a health insurance policy that helps you in such severe health problems. Disease-Specific comes under the situation-oriented types of medical insurance policy that provides you coverage for specific diseases. One of the insurance policies is Corona Kavach that provides a fund of Rs. 50,000 to Rs. 5,00,000 to the person insured. The age limit is set between 18 to 65 years. It is a type of Family Floater Policy. If we talk about M-Care Health Insurance Policy, it provides insurance to the insured person against the diseases caused by mosquitoes. There are different types of mosquito-borne diseases that include Dengue Fever, Malaria, Chikungunya, Zika virus, etc. Thus, M-Care offers you coverage for these diseases.</Typography><br />
                        <Typography sx={muiStyle.type_of} textAlign='justify'>11. ULIPs:</Typography>
                        <Typography textAlign='justify' color='var(--white)'>ULIPs expands to Unit Linked Insurance Plans. In these plans, a part of your premium is invested, and the other remaining part is used for buying health covers. Therefore, this plan helps you earn a return besides providing you a safety net. Your savings can run short with the ever-rising cost of health facilities. So, it is always better to have more money at your disposal. ULIPs don’t assure you a fixed amount as it is subjected to market risks. And the returns that are earned from ULIPs are paid to the buyer at the end of the policy term.</Typography><br />
                    </Grid>
                    <Grid item xs={12}>
                        <Marquee>
                            <Box sx={muiStyle.marquee_box}>
                                <img src={relianceGeneralInsurance} alt='relianceGeneralInsurance' width='100%' height='100%' />
                            </Box>
                            <Box sx={muiStyle.marquee_box}>
                                <img src={royalSundaram} alt='royalSundaram' width='100%' height='100%' />
                            </Box>
                            <Box sx={muiStyle.marquee_box}>
                                <img src={iFFCOTokio} alt='iFFCOTokio' width='100%' height='100%' />
                            </Box>
                            <Box sx={muiStyle.marquee_box}>
                                <img src={newIndia} alt='newIndia' width='100%' height='100%' />
                            </Box>
                            <Box sx={muiStyle.marquee_box}>
                                <img src={hDFCErgoHealth} alt='hDFCErgoHealth' width='100%' height='100%' />
                            </Box>
                            <Box sx={muiStyle.marquee_box}>
                                <img src={library} alt='library' width='100%' height='100%' />
                            </Box>
                            <Box sx={muiStyle.marquee_box}>
                                <img src={zuno} alt='zuno' width='100%' height='100%' />
                            </Box>
                            <Box sx={muiStyle.marquee_box}>
                                <img src={sbi} alt='sbi' width='100%' height='100%' />
                            </Box>
                            <Box sx={muiStyle.marquee_box}>
                                <img src={starHealth} alt='starHealth' width='100%' height='100%' />
                            </Box>
                        </Marquee>
                    </Grid>
                </Grid>
                {/* ---Section Three--- */}
                <Grid container columnSpacing={{ lg: 14, md: 10, xs: 6 }} mt={{ md: '80px', sm: '60px', xs: '50px' }}>
                    <Grid item xs={0} md={3} />
                    <Grid item xs={12} md={6} >
                        <Typography sx={muiStyle.main_title}>LIFE INSURANCE</Typography>
                    </Grid>
                    <Grid item xs={12} md={6} textAlign='-webkit-center'>
                        <Typography sx={muiStyle.image_part}>
                            <img src={LifePhoto} alt='LifePhoto' width='100%' height='100%' />
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={6} display='flex' alignItems='center'>
                        <Typography textAlign='justify' color='var(--white)'>Life insurance is a contract between an insurance policy holder and an insurer or assurer, where the insurer promises to pay a designated beneficiary a sum of money upon the death of an insured person (often the policyholder). Depending on the contract, other events such as terminal illness or critical illness can also trigger payment. The policyholder typically pays a premium, either regularly or as one lump sum. The benefits may include other expenses, such as funeral expenses.</Typography>
                    </Grid>
                    <Grid item xs={12}><br />
                        <Typography sx={muiStyle.type_of_heading}>Types of Life Insurance</Typography><br />
                        <Typography sx={muiStyle.type_of}>1. Term Life Insurance:</Typography>
                        <Typography textAlign='justify' color='var(--white)'>Term insurance protects your family’s financial future if something were to happen to you. Designed as a simple and affordable way to give financial cover, a term plan is a vital part of financial planning for the primary wage earner in a family. Term insurance is a pure protection plan and is not market-linked. Moreover, the premiums for term insurance are lower as compared to any other life insurance product. The premiums are also more affordable if you buy them early in life. Experts often suggest that term plan should be a priority for you as soon as you start earning. Term insurance can be used for various purposes. In the absence of an income, your family can use the cover from the insurance to pay for their day to expenditure, education costs, or wedding expenses. If you have any outstanding debts, such as home loan, car loan, etc., your family can pay them off with the cover. Some term plans also give you the option to add riders, like critical illness coverage (providing a lump sum for the treatment of specified critical ailments) and accidental death benefit+ (paid over and above the sum assured in the unfortunate event of death due to an accident). These riders can provide you and your family with an extra layer of protection at a nominal increase in the premium.</Typography><br />
                        <Typography sx={muiStyle.type_of}>2. ULIPs – Unit Linked Life Insurance:</Typography>
                        <Typography textAlign='justify' color='var(--white)'>A unit linked insurance plan (ULIP) is a combination of insurance and investment. A ULIP provides life cover that offers financial protection for your loved ones. In addition to this, it also gives you the potential to create wealth through market-linked returns from systematic investments. A ULIP offers you the opportunity to invest your money in different fund options, depending on your risk appetite. ULIPs come with a 5-year lock-in period, and the money can be invested in bonds, equities, hybrid funds, etc. If you are looking for safer options, bonds can be a good choice. On the other hand, if you are open to more risk, hybrid funds and equities have the potential to offer better returns. Since each individual is different, ULIPs allow great flexibility for investment. Your risk appetite and investment preferences are likely to change with age. ULIPs permit you to take these factors into consideration and alter your investment strategy accordingly. ULIPs also provide flexibility in terms of partial withdrawals and fund-switching. They offer interesting benefits like loyalty additions and wealth boosters to help you generate more wealth over time. Additionally, the maturity amount from ULIPs is tax-free* subject to Section 10(10D) of the Income Tax Act of 1961.</Typography><br />
                        <Typography sx={muiStyle.type_of}>3. Endowment Life Insurance:</Typography>
                        <Typography textAlign='justify' color='var(--white)'>Endowment plans are ideal for people who want guaranteed returns along with the protection of life insurance. An endowment plan is a life insurance policy that provides life coverage along with an opportunity to save regularly. This enables you to receive a lump sum amount on the maturity of the policy. In case of death during the policy term, your nominee(s) also receives a death benefit. Just like ULIPs, endowment plans are quite flexible too. You can choose a suitable method and time frame to pay the premium. Endowment plans also give you a chance to benefit from bonuses, that are paid additionally over and above the sum assured of your policy. Lastly, the returns generated on maturity from an endowment plan are tax-free* subject to Section 10(10D) of the Income Tax Act of 1961. The premiums paid can also be claimed as a deduction under Section 80C* of the same Act.</Typography><br />
                        <Typography sx={muiStyle.type_of}>4. Money Back Life Insurance:</Typography>
                        <Typography textAlign='justify' color='var(--white)'>A money back plan is a life insurance policy where the insured person gets a percentage of sum assured at steady intervals. Since you save regularly, the money back plan rewards you regularly. In simple words, a money back plan is an endowment plan with the benefit of increased liquidity with systematic payouts. Money back plans are designed to help you meet your short-term financial goals. The money back feature can add to your monthly or yearly income. The regular pay-outs, which are tax-free subject to Section 10(10D)* of the Income Tax Act of 1961 makes the process of investing highly rewarding. This is because you can benefit from the policy with immediate effect. For instance, with the ICICI Pru Cash Advantage Plan, as soon as your premium payment term ends, you start receiving money at regular intervals. These payouts are called Guaranteed Cash Benefits (GCB). Money back plans also have a maturity benefit. So, you get a lump sum payout at maturity that can be used to secure your future or help you fulfil your family’s dreams. In addition to the above features, the insurance component of a money back plan allows you to lead a stress-free life. Such plans secure the financial future of your loved ones, even in your absence. Hence, with a money back policy, you can get all-round protection for yourself and your family. In case of an unfortunate event during the policy term, your family will also receive a lump sum amount. Moreover, if you survive the term, you can get regular payouts along with lump sum benefits. Returns generated from money back plans are also tax-free* subject to Section 10 (10D) of the Income Tax Act of 1961.</Typography><br />
                        <Typography sx={muiStyle.type_of}>5. Whole Life Life Insurance:</Typography>
                        <Typography textAlign='justify' color='var(--white)'>A whole life insurance plan is a life insurance policy that gives you life coverage for 99 years. Unlike other policies that have a relatively shorter term of 10-30 years, the long coverage period of such plans ensures protection for your family for an extended period of time. With coverage of up to 99 years, whole life insurance is ideal for those who have financial dependents even in their old age. The biggest advantage of this product is that not only does it provide lifelong protection to the insured but also provides a simple way to leave behind a legacy for their children. Whole insurance plans offer a lot of stability. After paying the premiums for 5 years, you get a guaranteed income on maturity. Moreover, the income received from a whole life insurance policy is tax-free* subject to Section 10(10D) of the Income Tax Act of 1961. Whole life insurance policies are beneficial for those who want to leave a financial legacy for their legal heirs. In the case of death of the policy holder during the term, the nominee receives the policy benefits, including a bonus for the total premiums paid.</Typography><br />
                        <Typography sx={muiStyle.type_of}>6. Child Life Insurance:</Typography>
                        <Typography textAlign='justify' color='var(--white)'>Children deserve the best, and a child insurance plan helps to build a corpus for your child’s future. A child plan is one of the most vital financial planning tools for parents. These plans can help you build a significant sum for your child’s education and marriage expenses. A child plan provides maturity benefits either in the form of annual instalments or as a one-time payout after the child turns 18. There is also in-built insurance coverage for the parent. Protection is an important part of a child plan because the premium is paid by the parent. In case of an unfortunate event where the insured parent passes away during the policy term, child plans can give immediate payment to cover a child’s expenses. One of the most important features of a child plan is that it allows you to choose how and where your money is invested. The premium you pay is invested in your choice of equity, debt, or balanced funds. ULIP child plans also ensure that, over time, your returns are adequate to counter inflation. As compared to fixed return avenues that often fail to beat inflation, child plans allow plenty of room for rising costs. You can also choose from a collection of fund options to invest and switch between them without worrying about their tax* implications. ULIP child plans offer dual tax savings. This includes benefits on premiums paid under Section 80C* and the maturity proceeds under Section 10(10D) of the Income Tax Act of 1961 subject to conditions provided therein. Child plans also offer loyalty additions and wealth boosters that add to your overall savings. Moreover, you can either pay regular premiums or a single premium, based on your capacity. You can also use these plans as an emergency fund and make withdrawals from your investment on the completion of 5 policy years. Lastly, child plans allow you to get wider coverage with critical illness and accidental death benefits.</Typography><br />
                        <Typography sx={muiStyle.type_of}>7. Retirement Life Insurance:</Typography>
                        <Typography textAlign='justify' color='var(--white)'>Retirement plans are designed to help you build a sizeable corpus for your post-retirement days. They help you gain financial independence in your non-working years. A retirement plan allows you to save and invest for the long-term, thereby offering the potential to accumulate a significant amount of wealth. Since retirement plans offer insurance benefits, you can also ensure financial security for your loved ones by investing in these plans. Retirement plans give you the opportunity to get potentially better returns. This is done by investing your money in a mix of equity and debt. Moreover, the money you get on maturity is tax-free* subject to Section 10(10D) of the Income Tax Act of 1961. Retirement plans also allow you to move your money between funds tax-free*.</Typography><br />
                    </Grid>
                    <Grid item xs={12}>
                        <Marquee>
                            <Box sx={muiStyle.marquee_box}>
                                <img src={bajajAllianz} alt='bajajAllianz' width='100%' height='100%' />
                            </Box>
                            <Box sx={muiStyle.marquee_box}>
                                <img src={lic} alt='lic' width='100%' height='100%' />
                            </Box>
                            <Box sx={muiStyle.marquee_box}>
                                <img src={tataAig} alt='tataAig' width='100%' height='100%' />
                            </Box>
                            <Box sx={muiStyle.marquee_box}>
                                <img src={hDFCLife} alt='hDFCLife' width='100%' height='100%' />
                            </Box>
                            <Box sx={muiStyle.marquee_box}>
                                <img src={iciciPrudentialLife} alt='iciciPrudentialLife' width='100%' height='100%' />
                            </Box>
                            <Box sx={muiStyle.marquee_box}>
                                <img src={maxLifeInsurance} alt='maxLifeInsurance' width='100%' height='100%' />
                            </Box>
                        </Marquee>
                    </Grid>
                </Grid>
                {/* ---Section Four--- */}
                <Grid container columnSpacing={{ lg: 14, md: 10, xs: 6 }} mt={{ md: '80px', sm: '60px', xs: '50px' }}>
                    <Grid item xs={0} md={3} />
                    <Grid item xs={12} md={6}>
                        <Typography sx={muiStyle.main_title}>TRAVEL INSURANCE</Typography>
                    </Grid>
                    <Grid item xs={12} md={6} textAlign='-webkit-center'>
                        <Typography sx={muiStyle.image_part}>
                            <img src={TravelPhoto} alt='TravelPhoto' width='100%' height='100%' />
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={6} display='flex' alignItems='center'>
                        <Typography textAlign='justify' color='var(--white)'>Travel insurance is an insurance product for covering unforeseen losses incurred while travelling, either internationally or domestically. Basic policies generally only cover emergency medical expenses while overseas, while comprehensive policies typically include coverage for trip cancellation, lost luggage, flight delays, public liability, and other expenses.</Typography>
                    </Grid>
                    <Grid item xs={12}><br />
                        <Typography sx={muiStyle.type_of_heading}>Types of Travel Insurance</Typography><br />
                        <Typography sx={muiStyle.type_of} textAlign='justify'>1. Domestic Travel Insurance:</Typography>
                        <Typography textAlign='justify' color='var(--white)'>This travel insurance covers the insurance holder for trips that are within the legal boundaries of India. Most of such policies cover lost baggage, lost travel tickets, delay in flights/cancellation, theft of valuable items, sickness, permanent disability, death, legal aid, and third party damages incurred by you during a trip, which are covered under the name Personal Liability. Some insurance providers also provide this policy to foreigners working in India on work permits. People between 18 to 65 years of age are eligible for this policy.</Typography><br />
                        <Typography sx={muiStyle.type_of} textAlign='justify'>2. International Travel Insurance:</Typography>
                        <Typography textAlign='justify' color='var(--white)'>If you are traveling overseas for work or vacation, you must get yourself insured before taking the flight. The international travel insurance will give you life cover, cover for stolen/lost luggage, evacuation to India, cashless hospitalization, hijack risk, loss of documents like passport, ID’s, or tickets, and medical cover.</Typography><br />
                        <Typography sx={muiStyle.type_of} textAlign='justify'>3. Luggage Travel Insurance:</Typography>
                        <Typography textAlign='justify' color='var(--white)'>All of us have heard a couple of stories from your friends and family members about luggage theft or total loss of baggage. Losing one’s luggage will cause distress and financial loss, but with luggage insurance, you can at least recover the monetary loss. One must get luggage insurance beforehand, though it’s covered in other travel insurances like domestic or international travel insurance, but if you want you can buy luggage insurance separately. The insurance covers luggage theft, total baggage loss, damage to the belongings through fire or water, or during riot or strike.</Typography><br />
                        <Typography sx={muiStyle.type_of} textAlign='justify'>4. Senior Citizen Travel Insurance:</Typography>
                        <Typography textAlign='justify' color='var(--white)'>This insurance covers the travelers belonging to the age group of 61 to 70 years. Elderly people may have specific travel requirements or may need immediate medical attention anytime, hence getting them insured through travel insurance is a prerequisite. Most policies cover dental treatment, cashless hospitalization, medical expenditure of an existing illness, along with baggage loss, and flight delay/cancellation.</Typography><br />
                        <Typography sx={muiStyle.type_of} textAlign='justify'>5. Single Trip or Multi-Trip Travel Insurance:</Typography>
                        <Typography textAlign='justify' color='var(--white)'>Travel insurance comes with myriad options, and the best part about them is that you may get them for a single trip or may insure all your trips within a year by paying a higher premium. Multi-Trip insurance saves the policyholder from getting into the insurance application process every time before traveling within a stipulated time. Both the insurances cover medical and non-medical emergencies (theft and delay in flight).</Typography><br />
                        <Typography sx={muiStyle.type_of} textAlign='justify'>6. Corporate Travel Insurance:</Typography>
                        <Typography textAlign='justify' color='var(--white)'>Any medical emergency or any untoward incident will not wait for you to come back from your business tour! It can occur anytime, and insurance can help you deal with it without worrying about the expenses on foreign land or in an unknown city. The corporate travel policy generally covers baggage loss, dental expenses, medical expenses, legal liability, and personal accident cover.</Typography><br />
                        <Typography sx={muiStyle.type_of} textAlign='justify'>7. Medical Travel Insurance:</Typography>
                        <Typography textAlign='justify' color='var(--white)'>Travel Medical Insurance allows the insurance holder to access medical facilities on foreign land while traveling. The facilities that one may receive under this insurance are cashless hospitalization, dental treatment, and coverage for minor illnesses likes flu, exertion, or minor accidents.</Typography><br />
                        <Typography sx={muiStyle.type_of} textAlign='justify'>8. Family Travel Insurance:</Typography>
                        <Typography textAlign='justify' color='var(--white)'>If you always thought that taking your family for at least two vacations every year is your responsibility, then getting them insured is another! Yes, get your family covered in one insurance before heading out for the next vacation. The family insurance covers medical expenses, compensation in case of death or permanent disability, baggage loss, and cancellation of flights. Getting individual insurances for each family member will cause a hole in your pocket, and here comes a family insurance policy to the rescue.</Typography><br />
                        <Typography sx={muiStyle.type_of} textAlign='justify'>9. Pregnancy Travel Insurance:</Typography>
                        <Typography textAlign='justify' color='var(--white)'>If you have planned a luxurious babymoon to pamper yourself or if you are traveling for work or visiting your loved ones during your pregnancy, then you must not ignore the significance of Pregnancy Travel Insurance. With this, you can access immediate medical assistance with the best doctors, even when you are away from your home!</Typography><br />
                    </Grid>
                    <Grid item xs={12}>
                        <Marquee>
                            <Box sx={muiStyle.marquee_box}>
                                <img src={iFFCOTokio} alt='iFFCOTokio' width='100%' height='100%' />
                            </Box>
                            <Box sx={muiStyle.marquee_box}>
                                <img src={tataAig} alt='tataAig' width='100%' height='100%' />
                            </Box>
                            <Box sx={muiStyle.marquee_box}>
                                <img src={universalSompoGeneral} alt='universalSompoGeneral' width='100%' height='100%' />
                            </Box>
                            <Box sx={muiStyle.marquee_box}>
                                <img src={iFFCOTokio} alt='iFFCOTokio' width='100%' height='100%' />
                            </Box>
                            <Box sx={muiStyle.marquee_box}>
                                <img src={tataAig} alt='tataAig' width='100%' height='100%' />
                            </Box>
                            <Box sx={muiStyle.marquee_box}>
                                <img src={universalSompoGeneral} alt='universalSompoGeneral' width='100%' height='100%' />
                            </Box>
                        </Marquee>
                    </Grid>
                </Grid>
                {/* ---Section Five--- */}
                <Grid container columnSpacing={{ lg: 14, md: 10, xs: 6 }} mt={{ md: '80px', sm: '60px', xs: '50px' }}>
                    <Grid item xs={0} md={3} />
                    <Grid item xs={12} md={6} >
                        <Typography sx={muiStyle.main_title}>FIRE INSURANCE</Typography>
                    </Grid>
                    <Grid item xs={12} md={6} textAlign='-webkit-center'>
                        <Typography sx={muiStyle.image_part}>
                            <img src={FirePhoto} alt='FirePhoto' width='100%' height='100%' />
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={6} display='flex' alignItems='center'>
                        <Typography textAlign='justify' color='var(--white)'>Fire insurance covers damage or loss to a property because of fire. It is a specific form of insurance in addition to homeowner’s or property insurance, and it covers the cost of replacement and repair or reconstruction above what the property insurance policy covers. Fire insurance policies cover damage to the property, and may also cover damage to nearby structures, personal property and costs because of not having the capacity to live in or use the property if damages occur. Fire insurance covers a policyholder against fire loss or damage brought about by the ignition of fire, electricity, lightning or explosion of gas, natural disasters, and bursting and overflowing of a water tank or pipes.</Typography>
                    </Grid>
                    <Grid item xs={12}><br />
                        <Typography sx={muiStyle.type_of_heading}>Type of Fire Insurance</Typography><br />
                        <Typography sx={muiStyle.type_of} textAlign='justify'>1. Valued Fire Insurance:</Typography>
                        <Typography textAlign='justify' color='var(--white)'>Under Valued Insurance, the value of a subject matter is decided, upon which the insurer pays if it is destroyed or damaged. This policy doesn’t work on the principle of indemnity. The agreed value that is compensated can be more or less than the market price. This policy is designed for the goods and properties which actual value can’t be decided after their damage or loss. Usually, the work of art, jewellery, paintings, crafts etc. come into this category.</Typography><br />
                        <Typography sx={muiStyle.type_of} textAlign='justify'>2. Specific Fire Insurance:</Typography>
                        <Typography textAlign='justify' color='var(--white)'>This policy paid up to the specific amount the risk is insured. In case of a fire loss, the insurer will pay for the loss that is less that the specific amount or up to the sum insured.</Typography><br />
                        <Typography sx={muiStyle.type_of} textAlign='justify'>3. Average Fire Insurance:</Typography>
                        <Typography textAlign='justify' color='var(--white)'>When an average clause is applicable to fire policy, it is called Average Insurance. This clause is used to penalise the policyholder for taking up a policy with a lesser amount than the actual value of the property. The compensation amount is proportionately reduced in case the value of the policy is less than the insured property.</Typography><br />
                        <Typography sx={muiStyle.type_of} textAlign='justify'>4. Floating Fire Insurance:</Typography>
                        <Typography textAlign='justify' color='var(--white)'>This policy is tailor-made for the businessmen who deal in import and export businesses. The floating policy is taken to cover the goods of an organisation lying at the different places, provided the goods should belong to one person. The premium charged is the average premium that would have been paid, in case a specific policy would have been taken for all these goods. The insurer may put its own clause and conditions.</Typography><br />
                        <Typography sx={muiStyle.type_of} textAlign='justify'>5. Comprehensive Fire Insurance:</Typography>
                        <Typography textAlign='justify' color='var(--white)'>By opting for a comprehensive policy, the insured can be well assured for fire, explosion, lightning, burglary, riots, labour disturbances etc. A single policy covers multiple risks, thus, comprehensive insurance is highly recommended.</Typography><br />
                        <Typography sx={muiStyle.type_of} textAlign='justify'>6. Consequential Loss Fire Insurance:</Typography>
                        <Typography textAlign='justify' color='var(--white)'>Due to a fire incident, factory works will be at a halt. Production will go down despite the fixed expenses continue at the same rate. With a consequential loss policy, all these losses can be covered. This policy pays the policyholder for the loss of profit by calculating the compensation on the basis of loss of sale.</Typography><br />
                        <Typography sx={muiStyle.type_of} textAlign='justify'>7. Replacement Fire Insurance:</Typography>
                        <Typography textAlign='justify' color='var(--white)'>Under this policy, the insurance providers assure compensate for the loss on the basis of the market value of the property. Thus, the amount to be compensated is calculated after considering the depreciation value of the property. The policy ensures that the compensation will be on the replace price. So, the new asset will be of a similar price that has been lost. As the compensation will be on the market price of the new assets, it is replaced without an additional expense.</Typography><br />
                    </Grid>
                    <Grid item xs={12}>
                        <Marquee>
                            <Box sx={muiStyle.marquee_box}>
                                <img src={iFFCOTokio} alt='iFFCOTokio' width='100%' height='100%' />
                            </Box>
                            <Box sx={muiStyle.marquee_box}>
                                <img src={tataAig} alt='tataAig' width='100%' height='100%' />
                            </Box>
                            <Box sx={muiStyle.marquee_box}>
                                <img src={hDFCErgo} alt='hDFCErgo' width='100%' height='100%' />
                            </Box>
                            <Box sx={muiStyle.marquee_box}>
                                <img src={iciciPrudentialLife} alt='iciciPrudentialLife' width='100%' height='100%' />
                            </Box>
                            <Box sx={muiStyle.marquee_box}>
                                <img src={iFFCOTokio} alt='iFFCOTokio' width='100%' height='100%' />
                            </Box>
                            <Box sx={muiStyle.marquee_box}>
                                <img src={tataAig} alt='tataAig' width='100%' height='100%' />
                            </Box>
                            <Box sx={muiStyle.marquee_box}>
                                <img src={hDFCErgo} alt='hDFCErgo' width='100%' height='100%' />
                            </Box>
                            <Box sx={muiStyle.marquee_box}>
                                <img src={iciciPrudentialLife} alt='iciciPrudentialLife' width='100%' height='100%' />
                            </Box>
                        </Marquee>
                    </Grid>
                </Grid>
                {/* ---Section Six--- */}
                <Grid container columnSpacing={{ lg: 14, md: 10, xs: 6 }} mt={{ md: '80px', sm: '60px', xs: '50px' }} pb={{ md: '80px', sm: '60px', xs: '50px' }}>
                    <Grid item xs={0} md={3} />
                    <Grid item xs={12} md={6} >
                        <Typography sx={muiStyle.main_title}>HOME INSURANCE</Typography>
                    </Grid>
                    <Grid item xs={12} md={6} textAlign='-webkit-center'>
                        <Typography sx={muiStyle.image_part}>
                            <img src={HomePhoto} alt='HomePhoto' width='100%' height='100%' />
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={6} display='flex' alignItems='center'>
                        <Typography textAlign='justify' color='var(--white)'>Home insurance is a type of property insurance that covers a private residence. It is an insurance policy that combines various personal insurance protections, which can include losses occurring to one's home, its contents, loss of use (additional living expenses), or loss of other personal possessions of the homeowner, as well as liability insurance for accidents that may happen at the home or at the hands of the homeowner within the policy territory.</Typography>
                    </Grid>
                    <Grid item xs={12}><br />
                        <Typography sx={muiStyle.type_of_heading}>Types of Home Insurance</Typography><br />
                        <Typography sx={muiStyle.type_of} textAlign='justify'>1. Standard Fire and Specials Perils Home Insurance:</Typography>
                        <Typography textAlign='justify' color='var(--white)'>This is the basic home insurance policy and is offered by several general insurance providers in India. As the name of the policy implies, it provides coverage for your home against fire and other special perils. This plan can be purchased by homeowners and landlords to protect the structure of their property. Additionally, tenants can also purchase this plan to protect household goods and other possessions. The sum assured for this policy is calculated based on the cost of reconstruction of the building. It does not include the cost of the land. This is the standard home insurance plan, and when people refer to home insurance, they are generally referring to the Standard Fire and Special Perils policy.</Typography><br />
                        <Typography sx={muiStyle.type_of} textAlign='justify'>2. Home Structure Insurance:</Typography>
                        <Typography textAlign='justify' color='var(--white)'>This is also known as building insurance. It protects the structure of your home from all types of risks and dangers. Additionally, this plan also offers coverage to permanent fixtures inside the home like – kitchen and bathroom fittings, ceiling and roof, etc. If your home has an outdoor structure like a garage, motor shed, gardening shed, etc., then the home structure insurance also extends to these structures.</Typography><br />
                        <Typography sx={muiStyle.type_of} textAlign='justify'>3. Public Liability Home Insurance:</Typography>
                        <Typography textAlign='justify' color='var(--white)'>If a guest, visitor, or any third-person experiences accidents or other damages inside your home, then this insurance policy offers third-party liability coverage.</Typography><br />
                        <Typography sx={muiStyle.type_of} textAlign='justify'>4. Personal Accident Home Insurance:</Typography>
                        <Typography textAlign='justify' color='var(--white)'>This is an extended home insurance plan that not only protects your home but also offers coverage for you and your family members. If you or your family members meet with an accident in the insured home, the insurer pays compensation for death or permanent disability. Additionally, some home insurance policies also offer personal accident coverage for accidents that occur anywhere in the world, and not just within the insured home.</Typography><br />
                        <Typography sx={muiStyle.type_of} textAlign='justify'>5. Thefts and Burglary Home Insurance:</Typography>
                        <Typography textAlign='justify' color='var(--white)'>This insurance cover, as the name implies, offers compensation for the valuable contents inside your home, if they are stolen or damaged due to theft or burglary.</Typography><br />
                        <Typography sx={muiStyle.type_of} textAlign='justify'>6. Contents Home Insurance:</Typography>
                        <Typography textAlign='justify' color='var(--white)'>This home insurance plan offers protection for your home, as well as the contents inside it. It’s true that we spend as much money on furnishing the home with tastefully decorated interiors and other home furnishings as on building the home. Hence, you must protect these precious commodities on which you have spent plenty of money. With Contents Insurance, you protect the goods inside your home from losses and damages due to theft and other natural calamities. Generally, contents insurance covers jewellery, household appliances like TV, washing machine, refrigerator, documents and other goods in the home. This home insurance policy helps you restore your home and its interiors after it was damaged due to a calamity or an accident.</Typography><br />
                        <Typography sx={muiStyle.type_of} textAlign='justify'>7. Tenants Home Insurance:</Typography>
                        <Typography textAlign='justify' color='var(--white)'>As the name implies, this home insurance policy is exclusively for tenants. Tenants need not pay a premium for protecting the building structure. They can just focus on protecting the contents and goods inside the home. The tenant's insurance helps renters protect their household appliances and other goods at low premiums.</Typography><br />
                        <Typography sx={muiStyle.type_of} textAlign='justify'>8. Landlord’s Home Insurance:</Typography>
                        <Typography textAlign='justify' color='var(--white)'>The landlord’s insurance policy is designed specifically to meet the requirements of landlords who rent their property out to tenants. This policy covers loss of rent, third-party liability, as well as offering coverage for the overall structure of the building. However, the landlord’s insurance does not cover loss of property due to war, wear and tear, wilful destruction and loss to property that remains unoccupied over a certain period.</Typography><br />
                    </Grid>
                    <Grid item xs={12}>
                        <Marquee>
                            <Box sx={muiStyle.marquee_box}>
                                <img src={iFFCOTokio} alt='iFFCOTokio' width='100%' height='100%' />
                            </Box>
                            <Box sx={muiStyle.marquee_box}>
                                <img src={tataAig} alt='tataAig' width='100%' height='100%' />
                            </Box>
                            <Box sx={muiStyle.marquee_box}>
                                <img src={bhartiAXALifeInsurance} alt='bhartiAXALifeInsurance' width='100%' height='100%' />
                            </Box>
                            <Box sx={muiStyle.marquee_box}>
                                <img src={iFFCOTokio} alt='iFFCOTokio' width='100%' height='100%' />
                            </Box>
                            <Box sx={muiStyle.marquee_box}>
                                <img src={tataAig} alt='tataAig' width='100%' height='100%' />
                            </Box>
                            <Box sx={muiStyle.marquee_box}>
                                <img src={bhartiAXALifeInsurance} alt='bhartiAXALifeInsurance' width='100%' height='100%' />
                            </Box>
                        </Marquee>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>

    )
}

export default Service;