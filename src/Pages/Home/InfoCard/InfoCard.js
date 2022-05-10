import React from 'react';

const InfoCard = ({ img, cardTitle, cardBody, bgClass }) => {
    return (
        <div className={`card lg:card-side shadow-xl px-4 ${bgClass}`}>
            <figure className='pt-5'><img src={img} alt="Album" /></figure>
            <div className="card-body text-white">
                <h2 className="card-title">{cardTitle}</h2>
                <p>{cardBody}</p>
            </div>
        </div>
    );
};

export default InfoCard;