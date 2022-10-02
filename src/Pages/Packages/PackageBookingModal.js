import React from 'react';
import { Link } from 'react-router-dom';

const PackageBookingModal = ({ setBooking , booking}) => {
    const { name, price } = booking;
    
   
    return (
        <div>
            <div>
                <div class="hero">
                    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl ">
                        <div class="card-body">
                        <h1>booking for : {name}</h1>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="your email" class="input input-bordered" />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Address</span>
                                </label>
                                <input type="text" placeholder="your address" class="input input-bordered" />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Phone Number</span>
                                </label>
                                <input type="your phone number" placeholder="your phone number" class="input input-bordered" />
                            </div>
                            <div class="form-control mt-6">
                                <button 
                                class="btn btn-primary">
                                    <Link to='/dashboard/booking'> confirm</Link>

                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default PackageBookingModal;