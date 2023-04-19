import React, { useContext, useEffect, useState } from 'react';


const NavLeft = () => {

    const [catagories,setCatagoris]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/catagories')
        .then(res=>res.json())
            .then(data => setCatagoris(data))
        .catch(error=>console.log(error))

    },[])
    return (
        <div>
            <h4>All Caterogy</h4>
            {
                catagories && catagories.map(catagory=><h5 className='my-5 text-secondary' key={catagory.id}>{catagory.name}</h5>)
            }
        </div>
    );
};

export default NavLeft;