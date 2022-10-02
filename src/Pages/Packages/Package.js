import React from 'react';
import Rating from '../../Components/Rating';
import PackageBookingModal from './PackageBookingModal';

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
                        {/* <!-- The button to open modal --> */}
                        <label for="my-modal-6" class="btn modal-button btn-primary">See Details</label>

                        {/* <!-- Put this part before </body> tag --> */}
                        <input type="checkbox" id="my-modal-6" class="modal-toggle" />
                        <div class="modal modal-bottom sm:modal-middle">
                            <div class="modal-box">

                                <div class="modal-action">
                                    <label for="my-modal-6" class="btn">close</label>
                                </div>
                            </div>
                        </div>
                       
                        {/* <!-- The button to open Book Now modal --> */}
                        <label for="booking-modal" class="btn btn-primary modal-button">Book Now</label>

                        {/* <!-- Put this part before </body> tag --> */}
                        <input type="checkbox" id="booking-modal" class="modal-toggle" />
                        <div class="modal modal-bottom sm:modal-middle">
                            <div class="modal-box">
                                <PackageBookingModal perPackage={perPackage}></PackageBookingModal>
                                <div class="modal-action">
                                    <label for="booking-modal" class="btn">Close</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Rating></Rating>
                </div>
               
            </div>
            
        </div >
    );
};

export default Package;