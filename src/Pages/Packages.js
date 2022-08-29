import React, { useEffect, useState } from 'react';
import Package from './SignIn/Package';

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
    <div className='text-2xl font-bold text-primary text-center m-8 p-8'>
      <h1>our packages</h1>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 mx-12'>
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