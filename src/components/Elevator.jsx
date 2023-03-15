import React, { useState, useEffect } from "react";
import { ElevatorIcon } from "./elevatorIcon.jsx";
import { easeIn, motion } from "framer-motion";

const Elevator = (props) => {
  const { matchElevator, calledFloor, prevFloor} = props;
  console.log(prevFloor);
  // console.log(calledFloor);

  if (!matchElevator) {
    return null; // Return null if currElevator is undefined
  }

  return (
    <div
      id={"elevator_" + matchElevator.id}
      key={matchElevator.id}
      style={{
        gridRowStart: 10 - calledFloor,
        gridColumnStart: matchElevator.id,
      }}
    >
      <motion.div
        animate={{ x:  100 }}
        transition={{ delay: 2 }}
      ></motion.div>
      <ElevatorIcon
        fill={
          matchElevator.state === "IDLE"
            ? "black"
            : matchElevator.state === "MOVING-UP"
            ? "green"
            : "red"
        }
      />
    </div>
  );
};

export default Elevator;
