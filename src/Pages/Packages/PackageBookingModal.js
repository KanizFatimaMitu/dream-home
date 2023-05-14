import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const PackageBookingModal = () => {
    const [user, loading] = useAuthState(auth);

    return (
        <div>
            <div>
                <div class="hero">
                    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl ">
                        <div class="card-body">

                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Name</span>
                                </label>
                                <input type="text" value={user?.displayName} class="input input-bordered" />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Email</span>
                                </label>
                                <input type="email" value={user?.email} class="input input-bordered" />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Phone Number</span>
                                </label>
                                <input type="your phone number" placeholder="your phone number" class="input input-bordered" />
                            </div>
                            <div class="form-control mt-6">
                                <button

                                    class="btn btn-primary">
                                    <Link to='/'> confirm</Link>
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default PackageBookingModal;