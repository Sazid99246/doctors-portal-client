import React from 'react';

const Testimonial = ({ testimonial }) => {
    const { name, img, description, institute } = testimonial;
    return (
        <div className="card w-96 shadow-xl">
            <div className="card-body">
                <p>{description}</p>
            </div>
            <div className='flex items-center'>
                <div className='px-3 pb-3'>
                    <figure><img src={img} alt="people" /></figure>
                </div>
                <div>
                    <h3 className='card-title'>{name}</h3>
                    <p>{institute}</p>
                </div>
            </div>

        </div>
    );
};

export default Testimonial;