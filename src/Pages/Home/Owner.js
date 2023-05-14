import React from 'react';
import CEO from '../../Assets/ceo.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Owner = () => {
    return (
        <div class="card lg:card-side bg-base-100 shadow-xl">
            <figure><img src={CEO} className="w-[350px] h-[450px] lg:m-28 rounded-lg shadow-2xl" alt="Album" /></figure>
            <div class="card-body">
                <br />
                <br />
                <br />
                <h2 class="card-title">Our founder CEO <span className='text-2xl text-primary font-bold'>MR. SUBROTA BISWAS</span></h2>
                <br />
                <p>
                    <FontAwesomeIcon
                        className=' text-primary text-2xl font-bold  mr-2'
                        icon={faCheckCircle} />
                    Mr. Subrota Biswas is a young talented and creative designer with a bulk volume of project management & handover experience with local & multinational companies.
                </p>
                
                <p>
                    <FontAwesomeIcon
                        className=' text-primary text-2xl font-bold  mr-2'
                        icon={faCheckCircle} />
                    Over the years, we have expanded slowly but surely due to our credibility, speed, and quality of work.
                </p>
                <p>
                    <FontAwesomeIcon
                        className=' text-primary text-2xl font-bold  mr-2'
                        icon={faCheckCircle} />
                   We try to stay within budget and on schedule. Our principles are creativity and appropriate interior style to maximize customer satisfaction.
                </p>
                <p>
                    <FontAwesomeIcon
                        className=' text-primary text-2xl font-bold  mr-2'
                        icon={faCheckCircle} />
                  We have consideration for environmental conditions and consider advanced technology.
                </p>
                
                <div class="card-actions justify-end">
                    <button class="btn btn-primary"><a target="_blank" href="https://www.linkedin.com/in/kaniz-mitu/">know more</a></button>
                </div>
            </div>
        </div>
    );
};

export default Owner;