import React, { useState, useEffect } from 'react';


function ElevatorSystem(props){

    const [callsQueue, setCallsQueue] = useState([]);
    const currCall = props.floorNumber;
    return (
        <div className='system'>

            {/* {elevatorStates.map((elevator) => (
                <div className={'elevator' + elevatorStates.id} key={elevatorStates.id}>
                    <img src={photo} alt="elevatorPhoto" />
                </div> */}
            {/* ))} */}
        </div>
    )

}

export default ElevatorSystem;