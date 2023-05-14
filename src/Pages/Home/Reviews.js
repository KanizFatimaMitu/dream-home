import React from 'react';
import Rating from '../../Components/Rating'

const Reviews = () => {
    return (
        <div >
            <h1 className='text-center mt-12 mb-8 text-4xl font-bold'><span className='text-6xl text-primary'>100+</span> Happy Customers <small className='text-center text-lg'>and still counting....</small></h1>

            <div className='grid grid-cols-1 lg:grid-cols-3 lg:max-w-6xl gap-2 mx-auto'>
                <div class="card w-96">
                    <div class="card-body">
                        <h2 class="card-title font-bold">PROFESSIONAL & TALENTED</h2>
                        <Rating></Rating>
                        <p>My past experience with interior design had not been very good.</p>
                        <p>Not so with Imagine Interiors.</p>
                        <p>They handled my project very professionally. I was kept up to date on the progress of the project at every stage. And the final output was exactly what I wanted. Thank you, Imagine!</p>
                    </div>
                </div>
                <div class="card w-96">
                    <div class="card-body">
                        <h2 class="card-title font-bold">THEY DID A FANTASTICS JOB!</h2>
                        <Rating></Rating>
                        <p>A big thanks to Imagine Interiors for completing our house design at a low cost and within time!</p>
                        <p>They do the office design within the budget agreed upon. This helps keep a limit on spending.</p>
                        <p>I think Imagine Interiors is one of the best house design companies in Bangladesh.</p>
                    </div>
                </div>
                <div class="card w-96">
                    <div class="card-body">
                        <h2 class="card-title font-bold">A BIG THANKS TO IMAGINE INTERIORS</h2>
                        <Rating></Rating>
                        <p>When you are starting a business, capital protection is very important. There are so many expenses involved it is very difficult to keep track.</p>

                        <p>They handled my project very professionally. I was kept up to date on the progress of the project at every stage. And the final output was exactly what I wanted. Thank you, Imagine!</p>
                    </div>
                </div>
                <div class="card w-96">
                    <div class="card-body">
                        <h2 class="card-title font-bold">WITHIN BUDGET</h2>
                        <Rating></Rating>
                        <p>This is where Imagine Interiors does a very good job in office design. They do the office design within the budget agreed upon. This helps keep a limit on spending.</p>
                        <p>Not so with Imagine Interiors.</p>
                        <p> I would recommend Imagine Interiors to anyone looking to get their office designed..</p>
                    </div>
                </div>
                <div class="card w-96">
                    <div class="card-body">
                        <h2 class="card-title font-bold">PLEASURE TO WORK WITH</h2>
                        <Rating></Rating>
                        <p>We got our house designed by Imagine a while back and it’s still as good as new.</p>
                        <p>Without a doubt a very good interior design company.</p>
                        <p>They handled my project very professionally. I was kept up to date on the progress of the project at every stage. And the final output was exactly what I wanted. Thank you, Imagine!</p>
                    </div>
                </div>
                <div class="card w-96">
                    <div class="card-body">
                        <h2 class="card-title font-bold">VERY PROFESSIONAL</h2>
                        <Rating></Rating>
                        <p>They are the ideal company to entrust responsibility for your interior design project to..</p>
                        <p>Fortunately, we located Imagine Interiors who executed our office interior design project very professionally, without problems.</p>
                        <p>Any interior design project can be a huge headache if the entire responsibility falls on your shoulders.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reviews;