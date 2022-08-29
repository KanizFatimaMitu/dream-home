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
            <h1 className='text-center text-2xl font-bold text-primary mt-16'>"our Packages"</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 mx-12'>
            {
                packages.slice(0,3).map(perPackage => <Package
                    key={perPackage._id}
                    perPackage={perPackage}
                ></Package>)
            }
            </div>
            
        </div>
    );
};

export default Home;