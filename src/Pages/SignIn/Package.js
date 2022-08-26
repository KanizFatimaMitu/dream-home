import React from 'react';
import { NavLink } from 'react-router-dom';

const Package = ({ perPackage }) => {
    const { name, price } = perPackage;
    return (
        <div >
            <div class="card w-96 bg-base-100 shadow-xl">
                <figure class="px-10 pt-10">
                    <img src="https://placeimg.com/400/225/arch" alt="Shoes" class="rounded-xl" />
                </figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title">{name}</h2>
                    <p>{price}</p>
                    <div class="card-actions">
                        <button class="btn btn-primary">
                            <NavLink>See Details</NavLink>
                        </button>
                        <button class="btn btn-primary">Book Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Package;