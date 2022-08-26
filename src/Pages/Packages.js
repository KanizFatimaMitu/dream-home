import React, { useEffect, useState } from 'react';
import Api from '../Api/Api';
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
    fetch('http://localhost:5000/package')
      .then(res => res.json())
      .then(data => setPackages(data))
  }, [])

  return (
    <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 mx-12'>
      {
        packages.map(perPackage => <Package
          key={perPackage._id}
          perPackage={perPackage}
        ></Package>)
      }
    </div>
  );
};

export default Packages;