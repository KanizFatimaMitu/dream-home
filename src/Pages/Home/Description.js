import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Description = () => {
    return (
        <div>
            <h1 className='text-center mt-32 text-4xl font-bold'>THE IMAGINE INTERIORS ADVANTAGE</h1>
            <div class="card lg:card-side bg-base-100 shadow-xl mt-4">
                <div class="card-body">
                    <FontAwesomeIcon
                        className=' text-primary text-2xl font-bold visible lg:invisible mr-2'
                        icon={faQuestionCircle} />
                    <p class="text-xl font-bold pt-2">
                        <FontAwesomeIcon
                            className=' text-primary text-2xl font-bold invisible lg:visible mr-2'
                            icon={faQuestionCircle} />
                        Are you looking to create an awesome space to live/work in?</p>
                    <p class="text-xl  font-bold pt-2">
                        <FontAwesomeIcon
                            className=' text-primary text-2xl font-bold invisible lg:visible mr-2'
                            icon={faQuestionCircle} />
                        Do you look forward to a hassle-free interior design process?</p>
                    <p class="text-xl  font-bold pt-2">
                        <FontAwesomeIcon
                            className=' text-primary text-2xl font-bold invisible lg:visible mr-2'
                            icon={faQuestionCircle} />
                        Would you like your interior design project to be long lasting?</p>
                    <p class="text-xl font-bold pt-2">
                        <FontAwesomeIcon
                            className=' text-primary text-2xl font-bold invisible lg:visible mr-2'
                            icon={faQuestionCircle} />
                        Then you’ve come to the right place!</p>
                    <p class="text-xl font-bold pt-2">
                        <FontAwesomeIcon
                            className=' text-primary text-2xl font-bold invisible lg:visible mr-2'
                            icon={faQuestionCircle} />
                        Our portfolio in both residential interior design and commercial interior design speaks for itself.</p>
                </div>


                <div class="card-body">
                    <FontAwesomeIcon
                        className=' text-primary text-2xl font-bold visible lg:invisible mr-2'
                        icon={faCheckCircle} />
                    <p class="text-xl  font-bold pt-2">
                        <FontAwesomeIcon
                            className=' text-primary text-2xl font-bold invisible lg:visible mr-2'
                            icon={faCheckCircle} />
                        We make interior design completely hassle-free.
                    </p>
                    <p class="text-xl  font-bold pt-2">
                        <FontAwesomeIcon
                            className=' text-primary text-2xl font-bold invisible lg:visible mr-2'
                            icon={faCheckCircle} />
                        We are fully transparent about costs.</p>
                    <p class="text-xl  font-bold pt-2">
                        <FontAwesomeIcon
                            className=' text-primary text-2xl font-bold invisible lg:visible mr-2'
                            icon={faCheckCircle} />
                        We deliver on time.</p>
                    <p class="text-xl  font-bold pt-2">
                        <FontAwesomeIcon
                            className=' text-primary text-2xl font-bold invisible lg:visible mr-2'
                            icon={faCheckCircle} />
                        We allow for environmental conditions and employ advanced technology.</p>
                    <p class="text-xl  font-bold pt-2">
                        <FontAwesomeIcon
                            className=' text-primary text-2xl font-bold invisible lg:visible mr-2'
                            icon={faCheckCircle} />
                        We will extensively consult with you and ensure the final design is exactly what you wanted.</p>
                </div>
            </div>
            <div className='flex align-item-center justify-center mt-10 '>
                <button class="btn btn-primary font-bold" > <Link to="/consult" >Get in touch with us today !</Link></button>
            </div>
        </div>
    );
};



export default Description;