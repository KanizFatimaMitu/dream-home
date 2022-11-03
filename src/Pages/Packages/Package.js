import React from 'react';
import Rating from '../../Components/Rating';
import BookNow from './BookNow';
import SeeDetail from './SeeDetail';

const Package = ({ perPackage, data, setData}) => {

    const { name, price, img} = perPackage;




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
                        <div  >
                            <SeeDetail perPackage={perPackage} data={data} setData={setData}></SeeDetail>
                        </div>

                        {/* for book now button */}
                        
                        <div>
                            <BookNow perPackage={perPackage} data={data} setData={setData}></BookNow>
                        </div>

                    </div>
                    <Rating></Rating>
                </div>

            </div>

        </div >
    );
};

export default Package;