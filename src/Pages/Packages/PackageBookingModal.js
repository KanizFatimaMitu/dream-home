import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';

const PackageBookingModal = ({ detail }) => {
    const [user, loading] = useAuthState(auth);
    const navigate = useNavigate();
    const { name, price } = detail

    const handleBooking = (event) => {
        event.preventDefault();
        const userName = user.displayName;
        const Email = user.email;
        const Phone = event.target.phone.value
        const Package = name;
        const cost = price;
        const userDetail = { userName, Email, Phone,Package,cost }

        fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userDetail)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data?.insertedId
                ) {
                    toast(`your order is confirmed`)
                    navigate('/')
                }
                else {
                    toast(`try again`)
                    navigate('/')
                }
                event.target.reset();
            })

    }


    return (
        <div>
            <div>
                <div class="hero">
                    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl ">
                        <form class="card-body" onSubmit={handleBooking}>

                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Name</span>
                                </label>
                                <input type="name" value={user?.displayName} class="input input-bordered" />
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
                                {/* <input type="phone" placeholder="your phone number" class="input input-bordered" /> */}
                                <input type="text" name="phone" placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />
                            </div>
                            <div class="form-control mt-6">
                                <input type="submit" value="confirm" className="btn btn-primary w-full max-w-xs" />
                                
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default PackageBookingModal;