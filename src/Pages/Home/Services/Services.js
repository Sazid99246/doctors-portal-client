import React from 'react';
import fluoride from '../../../assets/images/fluoride.png';
import cavity from '../../../assets/images/cavity.png';
import teeth from '../../../assets/images/whitening.png'
import Service from '../Service/Service';

const Services = () => {
    const services = [
        {
            id: 1,
            img: fluoride,
            head: "Fluoride Treatment",
            body: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"
        },
        {
            id: 2,
            img: cavity,
            head: "Cavity Filling",
            body: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"
        },
        {
            id: 3,
            img: teeth,
            head: "Teeth Whitening",
            body: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"
        }
    ]
    return (
        <div className='mx-12'>
            <p className='text-xl text-primary font-bold text-center mt-[150px]'>Our services</p>
            <h2 className='text-4xl text-center'>Services We Provide</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-[34px] mt-[70px]">
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;