import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faTools, faClock } from '@fortawesome/free-solid-svg-icons'

const Feature = () => {
    return (
        <div>
            <h1 className='text-center mt-32 text-4xl font-bold'>THE IMAGINE <span className='text-primary'>INTERIORS</span> ADVANTAGE</h1>
            <br />
            <hr className='w-80 mx-auto' />
            <div className='grid grid-cols-1 lg:grid-cols-3 m-12 gap-8'>
                <div class="card  bg-primary">
                    <div class="card-body items-center text-white text-center">
                        <h2 class="card-title text-xl font-bold">
                        <FontAwesomeIcon
                        className=' text-2xl font-bold mr-2'
                        icon={faUser} />
                            DETAILED CONSULTATION</h2>
                        <p>Extensive discussion with you to understand your need.</p>
                    </div>
                </div>
                <div class="card  bg-primary">
                    <div class="card-body items-center  text-white text-center">
                        <h2 class="card-title text-xl font-bold">
                        <FontAwesomeIcon
                        className=' text-2xl font-bold mr-2'
                        icon={faTools} />
                           PREMIUM MATERIALS</h2>
                        <p>We source the best materials from reputable suppliers.</p>
                    </div>
                </div>
                <div class="card  bg-primary">
                    <div class="card-body items-center  text-white text-center">
                        <h2 class="card-title text-xl font-bold">
                        <FontAwesomeIcon
                        className=' text-2xl font-bold mr-2'
                        icon={faClock} />
                           ON-TIME DELIVERY</h2>
                        <p>We ensure delivery of the project within the agreed deadline.</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Feature;