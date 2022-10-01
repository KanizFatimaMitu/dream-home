import React from 'react';

const ConsultModal = () => {
    return (
        <div>
            <label
                for="consult-modal"
                class="btn modal-button bg-primary text-neutral mt-[500px] mb-[50px]"
                data-aos="zoom-in"
                data-aos-delay="1300"

            >
                Sure to set an appointment on your selected date ?

            </label>
            <input type="checkbox" id="consult-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box text-center">
                <label for="consult-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="font-bold text-lg">Congratulations random Internet user!</h3>
                    <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                    <div class="modal-action text-center">
                        <label for="consult-modal" class="btn">Set Meeting</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConsultModal;