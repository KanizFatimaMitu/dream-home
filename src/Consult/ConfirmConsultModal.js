import { format } from 'date-fns';
import React from 'react';
import { Button } from 'react-day-picker';
import { Link } from 'react-router-dom';



const ConfirmConsultModal = ({fixedDate}) => {
    return (
        <div>
           
            <div className='flex justify-center items-center mt-40'>
                <div class=" card w-96 bg-base-100 shadow-xl">
                    <div class="card-body items-center justify-center text-center">
                        <h2 class="card-title text-primary font-bold">Congratulations !</h2>
                        <div>
                            <Button  class="btn btn-primary text-neutral mt-2">
                                <p>Meeting is set at 3.00PM On {format(fixedDate, 'PP')}</p>
                            </Button>
                        </div>
                    </div>
                </div>
            </div >
        </div>
    );
};

export default ConfirmConsultModal;