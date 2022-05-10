import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import clock from '../../../assets/icons/clock.svg';
import marker from '../../../assets/icons/marker.svg';
import phone from '../../../assets/icons/phone.svg';

const Info = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 mx-12'>
            <InfoCard bgClass="bg-gradient-to-r from-secondary to-primary" cardTitle="Opening Hours" cardBody="Lorem Ipsum is simply dummy text of the pri" img={clock} />
            <InfoCard bgClass="bg-accent" cardTitle="Our Location" cardBody="Brooklyn, NY 10036, United States" img={marker} />
            <InfoCard bgClass="bg-gradient-to-r from-secondary to-primary" cardTitle="Contact Us" cardBody="+000 123 456789" img={phone} />
        </div>

    );
};

export default Info;