import React from 'react';
import Banner from './Banner/Banner';
import Info from './Info/Info';
import Services from './Services/Services';
import DentalCare from './DentalCare/DentalCare';
import MakeAppointment from './MakeAppointment/MakeAppointment';
import Testimonials from './Testimonials/Testimonials';
import Contact from './Contact/Contact';
import Footer from '../../Pages/Shared/Footer/Footer'
const Home = () => {
    return (
        <div>
            <Banner />
            <Info></Info>
            <Services/>
            <DentalCare/>
            <MakeAppointment/>
            <Testimonials/>
            <Contact/>
            <Footer/>
        </div>
    );
};

export default Home;