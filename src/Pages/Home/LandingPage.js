import React from 'react';
import './LandingPage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleDown } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const LandingPage = () => {


  return (

    <div class="hero h-[100vh] lg:h-[70vh] bg-base-200 image">

      <div className='flex justify-center mt-4 mb-72 lg:mb-20 mr-0 lg:ml-[-72vh] text-center'>
        <div className='w-3/5' >
          <h1
            class="text-5xl text-primary font-bold"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            Your Dream
          </h1>
          <h3
            class="text-xl text-primary font-bold pt-2"
            data-aos="fade-right"
            data-aos-duration="900"
            data-aos-delay="400"
          >
            Our responsibility
          </h3>
          <p
            class="py-6 text-lg font-medium text-accent"
            data-aos="fade-right"
            data-aos-duration="800"
            data-aos-delay="600"
          >
            "You can choose however you want.We'll provide you that at best budget in town."
          </p>
          <button
            class="btn btn-primary text-bold text-neutral"
            data-aos="zoom-in"
            data-aos-delay="1100"
          >
            <Link to="/consult" >Contact with us</Link>
          </button>

        </div>

      </div>
      <FontAwesomeIcon
        data-aos="fade-down"
        data-aos-delay="1100"
        className='mt-[80vh] text-primary text-2xl font-bold invisible lg:visible'
        icon={faArrowCircleDown} />
    </div>


  );
};

export default LandingPage;