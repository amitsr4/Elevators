import React, { useState, useEffect } from 'react';
import photo from "../photo.svg"

const Elevators = () => {
    const [elevatorState, setElevatorState] = useState([
        { floor: 0, state: 'IDLE', id: 1 },
        { floor: 0, state: 'IDLE', id: 2 },
        { floor: 0, state: 'IDLE', id: 3 },
        { floor: 0, state: 'IDLE', id: 4 },
        { floor: 0, state: 'IDLE', id: 5 },
      ]);

    return (
        //check the key warning!
        <div className='elevators'>    
            {elevatorState.map((elevator) => (
                <div className='elevator' key={elevatorState.id}>
                    <img src={photo} alt="elevatorPhoto" />
                </div>
            ))}
        </div>
    )
}
//                 <div className={'elevator' + elevatorState.id} key={elevatorState.id}>


export default Elevators;