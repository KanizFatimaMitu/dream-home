import React from 'react';
import { Link } from 'react-router-dom';

const ConfirmationModal = () => {

    return (
        <div className='flex justify-center items-center mt-12 '>
            <div class=" card w-96 bg-base-100 shadow-xl">
                <div class="card-body items-center text-center">
                    <h2 class="card-title text-primary font-bold">Congratulations !</h2>
                    <p>Thank you for your Booking.</p>
                    <div className='text-left'>
                    <p><span className='text-primary font-bold'>Your booking number is :</span></p>
                    <p><span className='text-primary font-bold'>Your name :</span></p>
                    <p><span className='text-primary font-bold'>Your email :</span></p>
                    <p><span className='text-primary font-bold'>Your address :</span></p>
                    <p><span className='text-primary font-bold'>Your phone number :</span></p>
                    <p><span className='text-primary font-bold'>Total cost :</span></p>
                    </div>
                    <div class="card-actions">
                        <button class="btn btn-primary">
                            <Link to='/dashboard/booking'>Okay</Link>
                        </button>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default ConfirmationModal;