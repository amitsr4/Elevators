import React, { useState, useEffect } from 'react';

const Floors = () => {
    const [floors, setFloors] = useState([
        {title: '9th', id: 9},
        {title: '8th', id: 8},
        {title: '7th', id: 7},
        {title: '6th', id: 6},
        {title: '5th', id: 5},
        {title: '4th', id: 4},
        {title: '3th', id: 3},
        {title: '2nd', id: 2},
        {title: '1st', id: 1},
        {title: 'Ground Floor', id: 0},
    ])


    return (
        <div className='allFloors'>
            {floors.map((floor) => (
                <div className='floors' key={floor.id}>
                    <a onClick={()=> console.log(floor.id)} >{floor.title} </a>
                </div>
            ))}
        </div>
    )
}


export default Floors;
