import React from 'react';
import Rating from '../../Components/Rating';
import PackageBookingModal from './PackageBookingModal';

const Package = ({ perPackage }) => {

    const { name, price, img, _id, description, catagory,space, consult } = perPackage;




    return (
        <div >
            <div class="card w-96 bg-base-100 shadow-xl">
                <figure class="px-10 pt-10">
                    <img src={img} alt="Shoes" class="rounded-xl" />
                </figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title">{name}</h2>
                    <p>{price}</p>

                    {/* for see detail button */}
                    <div class="card-actions">
                        {/* <!-- The button to open modal --> */}
                        <label
                            for="seeDetail-modal"
                            class="btn modal-button btn-primary"
                        >
                            See Details
                        </label>

                        {/* <!-- Put this part before </body> tag --> */}
                        <input type="checkbox" id="seeDetail-modal" class="modal-toggle" />
                        <div class="modal modal-bottom sm:modal-middle">
                            <div class="modal-box">
                                <h1 className='text-center text-primary font-bold mt-6'>
                                    Package details
                                </h1>
                                <div className='text-left m-12'>
                                    <p className='mb-2'><span className='text-primary font-bold'>Package name : </span> {name}</p>
                                    <p className='mb-2'><span className='text-primary font-bold'>Package id : </span>{_id}</p>
                                    <p className='mb-2'><span className='text-primary font-bold'>Price :  </span>{price}</p>
                                    <p className='mb-2'><span className='text-primary font-bold'>Description :  </span>{description}</p>
                                    <p className='mb-2'><span className='text-primary font-bold'>Catagory : </span>{catagory}</p>
                                    <p className='mb-2'><span className='text-primary font-bold'>Minimum space : </span>{space}</p>
                                    <p className='mb-2'><span className='text-primary font-bold'>Minimum consultation : </span>{consult}</p>
                                </div>
                                <div class="modal-action">
                                    <label for="seeDetail-modal" class="btn">close</label>
                                </div>
                            </div>
                        </div>

                        {/* for book now button */}
                        {/* <!-- The button to open Book Now modal --> */}
                        <label
                            for="booking-modal"
                            class="btn btn-primary modal-button"
                            perPackage={perPackage}
                        >
                            Book Now
                        </label>


                        {/* <!-- Put this part before </body> tag --> */}
                        <input type="checkbox" id="booking-modal" class="modal-toggle" />
                        <div class="modal modal-bottom sm:modal-middle">
                            <div class="modal-box">
                                <h1 className='text-primary text-xl font-bold'>booking for : {name} </h1>
                                <PackageBookingModal>
                                </PackageBookingModal>
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