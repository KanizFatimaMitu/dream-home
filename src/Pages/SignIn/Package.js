import React from 'react';

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
                                <h3 class="font-bold text-lg">Congratulations random Internet user!</h3>
                                <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                                <div class="modal-action">
                                    <label for="my-modal-6" class="btn">close</label>
                                </div>
                            </div>
                        </div>
                        {/* <!-- The button to open Book Now modal --> */}
                        <label for="my-modal-6" class="btn btn-primary modal-button">Book Now</label>

                        {/* <!-- Put this part before </body> tag --> */}
                    <input type="checkbox" id="my-modal-6" class="modal-toggle" />
                    <div class="modal modal-bottom sm:modal-middle">
                        <div class="modal-box">
                            <h3 class="font-bold text-lg">Congratulations random Internet user!</h3>
                            <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                            <div class="modal-action">
                                <label for="my-modal-6" class="btn">Close</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div >
    );
};

export default Package;