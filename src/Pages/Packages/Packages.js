import React, { useEffect, useState } from 'react';
import Package from './Package';
import Footer from '../../Components/Footer';




const Packages = () => {

  const [packages, setPackages] = useState([]);
  const [detail, setDetail] = useState({});


  useEffect(() => {
    fetch('https://dream-home-server.vercel.app/packages')
      .then(res => res.json())
      .then(data => setPackages(data))
  }, [])

  return (
    <div >
      <h1 className='text-2xl font-bold text-primary text-center m-8 p-8'>Our Design Services</h1>
      <div className='grid grid-cols-1 lg:grid-cols-3 text-center gap-4 lg:max-w-6xl mx-auto'>
        {
          packages.map(perPackage => <Package
            key={perPackage._id}
            detail={detail}
            setDetail={setDetail}
            perPackage={perPackage}

          ></Package>)
        }
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Packages;