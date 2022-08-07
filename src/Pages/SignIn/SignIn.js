import React from 'react';
import './SignIn.css'

const SignIn = () => {
    return (

        <div className='sign-image h-[90vh] pt-4 '>
            <div class="card flex-shrink-0 w-full max-w-sm ml-60 shadow-2xl bg-base-100 ">
                <div class="card-body">
                    <h3 className='text-center font-bold text-primary'>SignIn</h3>
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text text-primary">Email</span>
                        </label>
                        <input type="text" placeholder="email" class="input input-bordered" />
                    </div>
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text text-primary">Password</span>
                        </label>
                        <input type="text" placeholder="password" class="input input-bordered" />
                        <label class="label">
                            <a href="#" class="label-text-alt link link-hover text-primary">Forgot password?</a>
                        </label>
                    </div>
                    <div class="form-control mt-6">
                        <button class="btn btn-primary">signin</button>
                    </div>
                    <div class="divider">OR</div>
                    <button className='btn btn-glass hover:btn-primary'>continue with google</button>
                </div>
            </div>
        </div>


    );
};

export default SignIn;