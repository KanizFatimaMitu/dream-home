import React, { useState } from 'react';
import { format } from 'date-fns';
import { Link } from 'react-router-dom';
import ConfirmConsultModal from './ConfirmConsultModal';



const ConsultModal = ({ date }) => {
    const [fixedDate, setFixedDate] =useState(null);
    return (
        <div>
            <label
                for="consult-modal"
                class="btn modal-button bg-primary text-neutral mt-[830px] lg:mt-[500px] mb-[60px] lg:mb-[50px]"
            >
                Sure to set an appointment on your selected date ?

            </label>
            <input type="checkbox" id="consult-modal" class="modal-toggle" />
            <div class="modal modal-middle sm:modal-middle text-center">
                <div class="modal-box text-center">
                    <label for="consult-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="font-bold text-lg text-primary">On {format(date, 'PP')}</h3>
                    <h1 className='text-lg font-bold p-4'>select your time</h1>
                    <select class="select select-bordered w-full max-w-xs">
                        <option className='text-primary hover:text-neutral font-bold hover:bg-primary' selected>10.00 AM</option>
                        <option className='text-primary hover:text-neutral font-bold hover:bg-primary'>3.00 PM</option>
                        <option className='text-primary hover:text-neutral font-bold hover:bg-primary'>5.00 PM</option>
                    </select>
                    <div class="modal-action text-center">
                        <label
                            for="consult-modal"
                            class="btn btn-primary"
                            onClick={() => setFixedDate(date)}
                            >
                        </label>
                        
                    </div>
                    { fixedDate && <ConfirmConsultModal  fixedDate={fixedDate}></ConfirmConsultModal>}
                    {/* <Link to='/dashboard/consultation'>Set Meeting</Link> */}
                </div>

            </div>
         
        </div>
    );
};

export default ConsultModal;