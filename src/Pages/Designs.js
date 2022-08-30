import React, { useEffect, useState } from 'react';
import Design from './SignIn/Design';

const Designs = () => {
    const [designs, setDesigns] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/designs')
            .then(res => res.json())
            .then(data => setDesigns(data))
    })
    return (
        <div>
             <h1 className='text-2xl text-center text-primary my-4 py-4 font-bold'>"You can Book here <br/> only single design too !!"</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 ml-0 lg:ml-20'>
            {
                designs.map(design => <Design
                    key={design._id}
                    design={design}
                ></Design>)
            }
        </div>
        </div>
    );
};

export default Designs;