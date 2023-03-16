import React, { useState, useEffect } from "react";
import Elevator from "./Elevator";

const ElevatorsSystem = (props) => {
  const { calledFloor } = props;
  const queue = [];
  const [matchElevator, setMatchElevator] = useState({
    floor: 0,
    state: "STANDING",
    id: 0,
  });

  const [elevatorState, setElevatorState] = useState([
    { floor: 0, prevFloor: 0, state: "STANDING", id: 0 },
    { floor: 0, prevFloor: 0, state: "STANDING", id: 1 },
    { floor: 0, prevFloor: 0, state: "STANDING", id: 2 },
    { floor: 0, prevFloor: 0, state: "STANDING", id: 3 },
    { floor: 0, prevFloor: 0, state: "STANDING", id: 4 },
  ]);
  //Elevator's state can be: STANDING / MOVING-UP / MOVING-DOWN

  useEffect(() => {
    const elevator = findElevatorByFloor(calledFloor);
    if (elevator === null) {
      setMatchElevator({ floor: 0, state: "STANDING", id: -1 });
    } else {
      setMatchElevator(elevator);
    }
  }, [calledFloor]);

  const findElevatorByFloor = (floor) => {
    if (floor != null) {
      floor = 9 - floor; //setted the floors in the other direction.
      let closestElevator = null;
      let minDistance = Infinity;
      let prevFloor = 0;
      let state = "STANDING";
      //search for the closests elevator to the desire floor and put in closestElevator.
      elevatorState.forEach((elevator) => {
        state = "STANDING";
        if (elevatorState[elevator.id].state === "STANDING") {
          const currDistance = Math.abs(elevatorState[elevator.id].floor - floor);
          if (currDistance < minDistance) {
            minDistance = currDistance;
            closestElevator = elevatorState[elevator.id];
            prevFloor = elevatorState[elevator.id].floor;

          }
        }
      });

      if (closestElevator) {
        if (closestElevator.floor < floor) {
          state = "MOVING-UP";
        } else if (closestElevator.floor > floor) {
          state = "MOVING-DOWN";
        }
        let tempElevatorState = elevatorState;
        tempElevatorState[closestElevator.id] = {
          ...tempElevatorState[closestElevator.id],
          floor: floor,
          prevFloor:prevFloor,
          state: state,

        };
        setElevatorState(tempElevatorState);
        // console.log("Selected elevator: ,", closestElevator.id);
        // console.log("closestElevator: ", closestElevator.id);

        return closestElevator;
      }
      queue.push(floor);
      return null;
      //TODO Add check when redering if there is available elevator
    }
  };

  return (
    <div className="elevators">
      {elevatorState.map((elevator) => (
        <Elevator
          key={elevator.id}
          elevator={elevator}
          matchElevator={matchElevator}
          calledFloor={elevator.floor}
          elevatorState={elevatorState}
          setElevatorState={setElevatorState}
        />
      ))}
    </div>
  );
};

export default ElevatorsSystem;
