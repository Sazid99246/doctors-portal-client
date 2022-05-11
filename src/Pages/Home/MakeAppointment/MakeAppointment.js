import React from 'react';
import doctor from '../../../assets/images/doctor.png'
import appointment from '../../../assets/images/appointment.png'
import GetStartedButton from '../../Shared/GetStartedButton/GetStartedButton';

const MakeAppointment = () => {
    return (
        <div className='flex justify-center items-center mt-[200px] mx-12' style={{background: `url(${appointment})`}}>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-120px]' src={doctor} alt="" />
            </div>
            <div className='flex-1 text-white mr-[134px]'>
                <h3 className='text-xl text-primary'>Appointment</h3>
                <br />
                <h2 className='text-4xl'>Make an Appointment Today</h2>
                <br />
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <br />
                <GetStartedButton>Get Started</GetStartedButton>
            </div>
        </div>
    );
};

export default MakeAppointment;