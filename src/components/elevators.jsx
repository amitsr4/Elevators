import React, { useState, useEffect } from 'react';
import photo from "../photo.svg"

const Elevators = () => {
    const [elevatorStates, setElevatorStates] = useState([
        { floor: 0, state: 'IDLE', id: 1 },
        { floor: 0, state: 'IDLE', id: 2 },
        { floor: 0, state: 'IDLE', id: 3 },
        { floor: 0, state: 'IDLE', id: 4 },
        { floor: 0, state: 'IDLE', id: 5 },
      ]);

    return (
        <div className='elevators'>
            {elevatorStates.map((elevator) => (
                <div className={'elevator' + elevatorStates.id} key={elevatorStates.id}>
                    <img src={photo} alt="elevatorPhoto" />
                </div>
            ))}
        </div>
    )
}


export default Elevators;