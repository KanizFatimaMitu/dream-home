import React from 'react';

const Bookings = () => {
    return (
        <div class="card w-96 mx-auto bg-base-100 shadow-xl">
            <figure class="px-10 pt-10">
                <img src="https://placeimg.com/400/225/arch" alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title text-primary">Please Confirm</h2>
                <p>package name : {}</p>
                <div class="card-actions">
                    <button class="btn btn-primary">Check Out</button>
                    <button class="btn btn-primary">cancel</button>
                </div>
            </div>
        </div>
    );
};

export default Bookings;