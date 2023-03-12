import React, { useState, useEffect } from 'react';

const Floors = () => {
    const [floors, setFloors] = useState([
        {title: '9nd', id: 9},
        {title: '8nd', id: 8},
        {title: '7nd', id: 7},
        {title: '6nd', id: 6},
        {title: '5nd', id: 5},
        {title: '4nd', id: 4},
        {title: '3nd', id: 3},
        {title: '2nd', id: 2},
        {title: '1st', id: 1},
        {title: 'Ground Floor', id: 0},


    ])

    return (
        <div className='floors'>
            {floors.map((floor) => (
                <div className='floors' key={floor.id}>
                    <a onClick={()=> console.log(floor.id)} >{floor.title} </a>
                </div>
            ))}
        </div>
    )
}


export default Floors;
