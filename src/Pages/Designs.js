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
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mx-12 my-12'>
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