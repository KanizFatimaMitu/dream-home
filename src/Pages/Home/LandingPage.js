import React from 'react';
import './LandingPage.css'

const LandingPage = () => {
  return (
    //   <div class="hero h-[90vh] image">
    //   <div class="hero-overlay bg-opacity-30"></div>
    //   <div class="hero-content  text-neutral-content">
    //     <div>
    //       <h1 class="mb-5 text-5xl font-bold">Hello there</h1>
    //       <p class="mb-5 text-left">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    //       <button class="btn btn-primary">Get Started</button>
    //     </div>
    //   </div>
    // </div>

    <div class="hero h-[90vh] bg-base-200 image">

      <div className='mr-72'>
        <div className='w-3/5' data-aos="fade-right">
          <h1 class="text-5xl text-primary font-bold">Your Dream</h1>
          <h3 class="text-xl text-primary font-bold pt-2">Our responsibility</h3>
          <p class="py-6 text-lg font-medium text-accent">"You can choose however you want.We'll provide you that at best budget in town."
          </p>
          <button class="btn btn-primary text-bold">Login</button>
        </div>
      </div>
    </div>


  );
};

export default LandingPage;