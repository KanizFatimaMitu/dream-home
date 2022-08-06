import React from 'react';
import cover from '../../Assets/cover.jpg'

const LandingPage = () => {
    return (
      <div>
          <div class="hero min-h-screen bg-base-200">
            <div class="hero-content flex-col lg:flex-row">
                <div>
                    <h1 class="text-5xl font-bold">Box Office News!</h1>
                    <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button class="btn btn-primary">Get Started</button>
                </div>
                <img className='max-w-sm' src={ cover} />
            </div>
        </div>
        
      </div>
    );
};

export default LandingPage;