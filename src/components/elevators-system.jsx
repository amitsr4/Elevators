import React, { useState, useEffect } from "react";
import Elevator from "./Elevator";

const ElevatorsSystem = (props) => {
  const { calledFloor } = props;

  const queue = [];

  const [elevatorState, setElevatorState] = useState([
    { floor: 0, state: "IDLE", id: 1 },
    { floor: 1, state: "IDLE", id: 2 },
    { floor: 2, state: "IDLE", id: 3 },
    { floor: 8, state: "IDLE", id: 4 },
    { floor: 4, state: "IDLE", id: 5 },
  ]);
  //Elevator's state can be: IDLE / MOVING-UP / MOVING-DOWN

  useEffect(() => {
    const elevator = findElevatorByFloor(calledFloor);
  }, [calledFloor]);
  let prevFloor = 0;

  const findElevatorByFloor = (floor) => {
    if (floor != null) {
      floor = 9 - floor; //setted the floors in the other direction.
      let closestElevator = null;
      let minDistance = Infinity;
      let direction = "IDLE";
      //search for the closests elevator to the desire floor and put in closestElevator.
      elevatorState.forEach((elevator) => { 
        direction = "IDLE";
        if (elevator.state === "IDLE") {
          const currDistance = Math.abs(elevator.floor - floor);
          if (currDistance < minDistance) {
            minDistance = currDistance;
            closestElevator = elevator;
            prevFloor = elevator.floor;
          }
        }
      });

      if (closestElevator.floor < floor) {
        direction = "MOVING-UP";
      } else if (closestElevator.floor > floor) {
        direction = "MOVING-DOWN";
      }

      if (closestElevator) {
        setElevatorState(
          elevatorState.map((elevator) => {
            if (elevator.id === closestElevator.id) {
              return { ...elevator, state: direction, floor: floor };
            } else {
              return elevator;
            }
          })
        );
        return { elevator: closestElevator };
      } else {
        queue.push(floor);
        return null;

        //TODO Add check when redering if there is available elevator
      }
    }
  };
  return (
    <div className="elevators">
      {elevatorState.map((elevator) => (
        <Elevator
          key={elevator.id}
          matchElevator={elevator}
          calledFloor={elevator.floor}
          prevFloor={prevFloor}
        />
      ))}
    </div>
  );
};

export default ElevatorsSystem;
