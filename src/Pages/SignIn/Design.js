import React from 'react';
import { Link } from 'react-router-dom';
import BookingModal from '../../Components/BookingModal';

const Design = ({ design }) => {
    const { name, price } = design;
    return (
        <div >
            <div class="card w-96 bg-base-100 shadow-xl">
                <figure class="px-10 pt-10">
                    <img src="https://placeimg.com/400/225/arch" alt="Shoes" class="rounded-xl" />
                </figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div class="card-actions">
                        <label for="booking" class="btn btn-primary modal-button">Book Now</label>

                        {/* <!-- Put this part before </body> tag --> */}
                        <input type="checkbox" id="booking" class="modal-toggle" />
                        <div class="modal modal-bottom sm:modal-middle ">
                            <div class="modal-box ">
                                <BookingModal></BookingModal>
                                <div class="modal-action">
                                    <label for="booking" class="btn">Close</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default Design;