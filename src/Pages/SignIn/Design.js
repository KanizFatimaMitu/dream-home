import React from 'react';

const Design = ({design}) => {
    const { name, price } = design;
    return (
        <div >
            <div class="hero bg-base-200">
                <div class="hero-content flex-col lg:flex-row">
                    <img src="https://placeimg.com/260/400/arch" class="max-w-sm rounded-lg shadow-2xl" />
                    <div className='text-center'>
                        <h1 class="text-5xl font-bold">{name}</h1>
                        <p class="py-6">{price}.00</p>
                        <button class="btn btn-primary">BOOK</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Design;