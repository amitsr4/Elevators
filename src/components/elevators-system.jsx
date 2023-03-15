import React, { useState, useEffect } from "react";
import Elevator from "./Elevator";
import { ElevatorIcon } from "./elevatorIcon";

const ElevatorsSystem = (props) => {
  const queue = [];

  const [elevatorState, setElevatorState] = useState([
    { floor: 0, state: "IDLE", id: 1 },
    { floor: 0, state: "IDLE", id: 2 },
    { floor: 0, state: "IDLE", id: 3 },
    { floor: 0, state: "IDLE", id: 4 },
    { floor: 0, state: "IDLE", id: 5 },
  ]);
  //Elevator's state can be: IDLE / MOVING-UP / MOVING-DOWN

  const [matchElevator, setMatchingElevator] = useState(undefined);
  const [distance, setDistance] = useState(0);

  const { calledFloor } = props; //better syntax for: const calledFloor = props.calledFloor;
  useEffect(() => {
    const elevator = findElevatorByFloor(calledFloor);
    setMatchingElevator(elevator);
  }, [calledFloor]);

  const findElevatorByFloor = (floor) => {
    if (floor != null) {
      let closestElevator = null;
      let direction = "IDLE";
      elevatorState.forEach((elevator) => {
        let minDistance = Infinity;
        if (elevator.state === "IDLE") {
          const currDistance = Math.abs(elevator.floor - floor);
          if (currDistance < minDistance) {
            minDistance = currDistance;
            closestElevator = elevator;

            if (elevator.floor < floor) {
              direction = "MOVING-UP";
            } else if (elevator.floor > floor) {
              direction = "MOVING-DOWN";
            }
          }
        }
      });
      if (closestElevator) {
        setDistance(closestElevator.floor - floor);
        setElevatorState(
          elevatorState.map((elevator) => {
            if (elevator.id === closestElevator.id) {
              return { ...elevator, state: direction, floor: calledFloor };
            } else {
              return elevator;
            }
          })
        );
        return { elevator: closestElevator };
      } else {
        queue.push(floor);
        return null;
      }
    }
  };
  return (
    <div className="elevators">
      {elevatorState.map((elevator) => (
        <Elevator key={elevator.id}
          matchElevator={elevator}  
          calledFloor={elevator.floor}

          />

      ))}
    </div>
  );
};

export default ElevatorsSystem;
