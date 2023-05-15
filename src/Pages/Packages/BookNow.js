import React from 'react';
import PackageBookingModal from './PackageBookingModal';

const BookNow = ({ perPackage,detail, setDetail }) => {

    const { name } = detail ;
    


    return (
        <div>
            <label
                for="booking-modal"
                class="btn btn-primary modal-button"
                onClick={() => setDetail?.(perPackage)}
                
            >
                Book Now
            </label>


            {/* <!-- Put this part before </body> tag --> */}
            <input type="checkbox" id="booking-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h1 className='text-primary text-xl font-bold'>booking for : {name} </h1>
                    <PackageBookingModal detail={detail}>
                    </PackageBookingModal>
                    <div class="modal-action">
                        <label for="booking-modal" class="btn">Close</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookNow;