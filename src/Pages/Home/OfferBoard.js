import React from 'react';
import offer from '../../Assets/offer.png';

const OfferBoard = () => {
    return (
        <div className='mt-8 mb-8'>
           
            <div class="card w-80 lg:w-[1300px] h-[280px] lg:h-[200px] mx-auto  shadow-xl image-full  ">
                <figure ><img  src={offer} alt="" /></figure>
                <div class="card-body items-center m-4">
                    <h2 class="card-title text-5xl font-extrabold fw-12 text-primary">!! Mega sale !!</h2>
                    <button class="btn btn-error mt-4 text-white font-bold">Upto 70% OFF </button>
                </div>
               
            </div>
        </div>
    );
};

export default OfferBoard;