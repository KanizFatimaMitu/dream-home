import React from 'react';

const Rating = () => {
    return (
        <div className='p-4'>
            <div class="rating">
                <input type="radio" name="rating-2" class="mask mask-star-2 bg-primary" />
                <input type="radio" name="rating-2" class="mask mask-star-2 bg-primary" checked />
                <input type="radio" name="rating-2" class="mask mask-star-2 bg-primary" />
                <input type="radio" name="rating-2" class="mask mask-star-2 bg-primary" />
                <input type="radio" name="rating-2" class="mask mask-star-2 bg-primary" />
            </div>
        </div>
    );
};

export default Rating;