import React from 'react';

const SeeDetail = ( {  perPackage,detail, setDetail } ) => {

    const { name, price, _id, description, catagory, space, consult } = detail;

    return (
        <div>
            <label
                for="seeDetail-modal"
                class="btn modal-button btn-primary"
                // onClick ={ () => setDetail (perPackage) }

            >
                See Details
            </label>
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
        </div>
    );
};

export default SeeDetail;