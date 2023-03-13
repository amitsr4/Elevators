import React, { useState, useEffect } from 'react';
import photo from "../photo.svg"

const Elevators = (props) => {

    const [Queue, setQueue] = useState([]);

    const [elevatorState, setElevatorState] = useState([
        { floor: 0, state: 'IDLE', id: 1 },
        { floor: 0, state: 'IDLE', id: 2 },
        { floor: 0, state: 'IDLE', id: 3 },
        { floor: 0, state: 'IDLE', id: 4 },
        { floor: 0, state: 'IDLE', id: 5 },
      ]);
      
    const [matchingElevator, setMatchingElevator] = useState(undefined);
    const calledFloor = props.currElevator;

    useEffect(() => {
        const elevator = findElevatorByFloor(calledFloor);
        setMatchingElevator(elevator);
      }, [calledFloor]);
      
      
      const findElevatorByFloor = (floor) => {
        const elevator = elevatorState.find((elevator) => elevator.floor === floor);
        if (elevator) {
          return elevator;
        } else {
          setQueue([...Queue, floor]);
          return undefined;
        }
      };

      return (
        <div className='elevators'>
            {elevatorState.map((elevator) => (
                <div id={'elevator_' + elevatorState.id} key={elevator.id}>
                    <img src={photo} alt="elevatorPhoto" />
                </div> 
            ))}
        </div>
    )
}

export default Elevators;