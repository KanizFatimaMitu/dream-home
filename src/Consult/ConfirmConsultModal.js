import React from 'react';



const ConfirmConsultModal = ({date}) => {
    return (
        <div>
            <div className='flex justify-center items-center mt-40'>
                <div class=" card w-96 bg-base-100 shadow-xl">
                    <div class="card-body items-center justify-center text-center">
                        <h2 class="card-title text-primary font-bold">Congratulations !</h2>
                        <div>
                            <button class="btn btn-primary text-neutral mt-2">
                                <p>Meeting is set at 3.00PM On 1 nov ,2022</p>
                            </button>
                        </div>
                    </div>
                </div>
            </div >
        </div>
    );
};

export default ConfirmConsultModal;