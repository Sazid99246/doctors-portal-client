import React from 'react';
import quote from '../../../assets/icons/quote.svg'
import people1 from '../../../assets/images/people1.png';
import people2 from '../../../assets/images/people2.png';
import people3 from '../../../assets/images/people3.png';
import Testimonial from '../Testimonial/Testimonial';

const Testimonials = () => {
    const testimonials = [
        {
            id: 1,
            name: "Winson Herry",
            img: people1,
            institute: "California",
            description: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content"
        },
        {
            id: 2,
            name: "Winson Herry",
            img: people2,
            institute: "California",
            description: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content"
        },
        {
            id: 3,
            name: "Winson Herry",
            img: people3,
            institute: "California",
            description: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content"
        }
    ]
    return (
        <div className='mt-[108px] mx-12'>
            <div className='flex justify-between items-center'>
                <div>
                    <h3 className='text-xl text-primary text-bold'>Testimonials</h3>
                    <h2 className='text-[41px]'>What Our Patients Says</h2>
                </div>
                <img style={{ height: "156px", width: "192px" }} src={quote} alt="" />
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3'>
                {
                    testimonials.map(testimonial => <Testimonial
                        key={testimonial.id}
                        testimonial={testimonial}
                    ></Testimonial>)
                }
            </div>
        </div>
    );
};

export default Testimonials;