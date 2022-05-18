import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import Loading from '../../Shared/Loading/Loading';
import BookingModal from '../BookingModal/BookingModal';
import Service from '../Service/Service';

const AvailableAppointments = ({ date }) => {
    const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null);
    const formattedDate = format(date, 'PP');
    useEffect(() => {
        fetch(`https://boiling-earth-01998.herokuapp.com/available?date=${formattedDate}`)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    if(services.length === 0){
        return <Loading/>
    }
    return (
        <div>
            <h4 className='text-center text-primary text-[22px]'>Available Appointments on {format(date, 'PP')}</h4>
            <div className='mx-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                        setTreatment={setTreatment}
                    ></Service>)
                }
            </div>
            {treatment && <BookingModal 
            date={date} 
            treatment={treatment}
            setTreatment={setTreatment}
            ></BookingModal>}
        </div >
    );
};

export default AvailableAppointments;