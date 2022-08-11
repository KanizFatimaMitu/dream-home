import React, { useEffect, useState } from 'react';
import Api from '../Api/Api';

const Packages = () => {
    
    const [packages, setPackages] = useState([])

    useEffect(() => {
        // axios.get("http://localhost:5000/service").then((res) => setServices(res));
    
        (async () => {
          const res = await Api.get("/service");
          setPackages(res.data);
        })();
      }, []);

    return (
        <div>
            <h1>find package here</h1>
        </div>
    );
};

export default Packages;