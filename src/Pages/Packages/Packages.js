import React, { useEffect, useState } from 'react';
import Package from './Package';

const Packages = () => {

  const [packages, setPackages] = useState([])

  // useEffect(() => {
  //     // axios.get("http://localhost:5000/package").then((res) => setPackages(res));

  //     (async () => {
  //       const res = await Api.get("/package");
  //       setPackages(res.data);
  //     })();
  //   }, []);


  useEffect(() => {
    fetch('http://localhost:5000/packages')
      .then(res => res.json())
      .then(data => setPackages(data))
  }, [])

  return (
    <div >
      <h1 className='text-2xl font-bold text-primary text-center m-8 p-8'>our packages</h1>
      <div className='grid grid-cols-1 lg:grid-cols-3 text-center gap-y-4 ml-0 lg:ml-20'>
        {
          packages.map(perPackage => <Package
            key={perPackage._id}
            perPackage={perPackage}
          ></Package>)
        }
      </div>
    </div>
  );
};

export default Packages;