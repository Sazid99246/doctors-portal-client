import React from 'react';
import chair from '../../../assets/images/chair.png';
import bgChair from '../../../assets/images/bg.png'
import GetStartedButton from '../../Shared/GetStartedButton/GetStartedButton';

const Banner = () => {
    return (
        <div style={{ backgroundImage: `url(${bgChair})` }} className="hero min-h-screen px-[94px]">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} alt="" className="max-w-sm ml-6 rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <GetStartedButton>Get Started</GetStartedButton>
                </div>
            </div>
        </div>
    );
};

export default Banner;