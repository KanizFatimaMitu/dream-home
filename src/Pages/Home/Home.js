import React, { useEffect, useState } from 'react';
import LandingPage from './LandingPage';
import Packages from '../Packages';
import Package from '../SignIn/Package';

const Home = () => {
    const [packages, setPackages] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/packages')
            .then(res => res.json())
            .then(data => setPackages(data))
    }, [])

    return (
        <div>
            <LandingPage></LandingPage>
            <div className='m-0 lg:m-28'>
                <h1 className='text-center text-2xl font-bold text-primary mt-16 flex justify-center'>"our Packages"</h1>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-2 '>
                    {
                        packages.slice(0, 3).map(perPackage => <Package
                            key={perPackage._id}
                            perPackage={perPackage}
                        ></Package>)
                    }
                </div>
                <div className='text-center mt-8'>
                    <button class="btn btn-xs btn-primary sm:btn-sm md:btn-md lg:btn-lg">see all</button>
                </div>
            </div>
        </div>
    );
};

export default Home;