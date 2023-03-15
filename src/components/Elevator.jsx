import React, { useState, useEffect } from "react";
import { ElevatorIcon } from "./elevatorIcon.jsx";

const Elevator = (props) => {
  const { matchElevator, calledFloor } = props;

  if (!matchElevator) {
    return null; // Return null if currElevator is undefined
  }
  console.log(matchElevator);

  return (
    <div
      id={"elevator_" + matchElevator.id}
      key={matchElevator.id}
      style={{
        gridRowStart: calledFloor,
        gridColumnStart: matchElevator.id,
        backgroundColor: "white",
      }}
    >
      <ElevatorIcon
        fill={
          matchElevator.state === "IDLE"
            ? "black"
            : matchElevator.state === "MOVING-UP"
            ? "green"
            : "red"
        }
      />
      ,{/* <img src={photo} alt="elevatorPhoto" style={{ fill: "green" }} /> */}
    </div>
  );
};

export default Elevator;
