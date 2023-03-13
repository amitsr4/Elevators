import React, { useState, useEffect } from "react";
import Elevator from "./Elevator";

const Elevators = (props) => {
  //   const [Queue, setQueue] = useState([]);
  const Queue = [];

  const [elevatorState, setElevatorState] = useState([
    { floor: 0, state: "IDLE", id: 1 },
    { floor: 0, state: "IDLE", id: 2 },
    { floor: 0, state: "IDLE", id: 3 },
    { floor: 0, state: "IDLE", id: 4 },
    { floor: 0, state: "IDLE", id: 5 },
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
      //TODO: add push to the Queue.
      //   setQueue([...Queue, floor]);
      return undefined;
    }
  };

  return (
    <div className="elevators">
      {elevatorState.map((elevator) => (
        <Elevator  elevatorId = {elevator.id} />
        //height={height}
      ))}
    </div>
  );
};

export default Elevators;
