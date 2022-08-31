import React from 'react';
import DesignBookingModal from './DesignBookingModal';


const Design = ({ design }) => {
    const { name, price } = design;
    return (
        <div >
            <div class="card card-side bg-base-100 shadow-xl">
                <figure><img src="https://placeimg.com/200/280/arch" alt="Movie" /></figure>
                <div class="card-body">
                    <h2 class="card-title">{name}</h2>
                    <p>{price}</p>
                    <div class="card-actions justify-end">

                        {/* Button for modal */}
                        <label for="booking-modal" class="btn btn-primary modal-button">Book Now</label>
                        {/* <!-- Put this part before </body> tag --> */}
                        <input type="checkbox" id="booking-modal" class="modal-toggle" />
                        <div class="modal modal-bottom sm:modal-middle">
                            <div class="modal-box">
                                {/* booking modal's body */}
                                <DesignBookingModal></DesignBookingModal>
                                <div class="modal-action">
                                    <label for="booking-modal" class="btn">Close</label>
                                </div>
                            </div>
                            {/* modal end here */}
                        </div>
                    </div>
                </div>
            </div>




        </div>
    );
};

export default Design;