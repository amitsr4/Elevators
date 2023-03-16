import React, { useState, useEffect } from "react";
import { ElevatorIcon } from "./elevatorIcon.jsx";
import { easeIn, motion } from "framer-motion";
import styled, { keyframes } from "styled-components";

const Elevator = (props) => {
  const {
    elevator,
    matchElevator,
    calledFloor,
    elevatorState,
    setElevatorState,
  } = props;

  const [current, setCurrrent] = useState(elevator.prevFloor);
  const [stage, setStage] = useState(0);
  const [gap, setGap] = useState(0);
  const [flag, setFlag] = useState(true);

  useEffect(() => {
    if (matchElevator.id === elevator.id) {
      setGap(calledFloor - elevatorState[elevator.id].prevFloor);
      console.log(calledFloor, elevatorState[elevator.id].prevFloor);
    }
    if (matchElevator.id === elevator.id) {
      console.log("GAP: ", gap);
      if (current == !calledFloor) {
        setFlag(true);
        const tick = setTimeout(() => {
          let tempElevatorState = elevatorState;
          tempElevatorState[matchElevator.id] = {
            ...tempElevatorState[matchElevator.id],
            state: "STANDING",
            floor: calledFloor,
          };
          setElevatorState(tempElevatorState);

          setFlag(false);
        }, 2000);
        return function cleanUp() {
          clearTimeout(tick);
        };
      }
    }
  }, [setStage, matchElevator, stage, current]);

  return (
    <Container
      id={"elevator_" + elevator.id}
      key={elevator.id}
      flag={flag}
      style={{
        position: "relative",
        bottom: `${elevatorState[elevator.id].floor * 100}px`,
      }}
    >
      {/* <motion.div
        animate={{ x: 100 * stage }}
        transition={{ delay: 2 }}
      ></motion.div> */}
      <ElevatorIcon
        fill={
          elevatorState[elevator.id].state === "MOVING-DOWN"
            ? "red"
            : elevatorState[elevator.id].state === "MOVING-UP"
            ? "green"
            : "black"
        }
      />
    </Container>
  );
};

export default Elevator;

const example = keyframes`
  from {background-color: red;}
  to {background-color: #7bf07b;}
`;
const Container = styled.div`
  animation-name: ${(p) => (p.flag ? example : null)};
  animation-duration: 4s;
`;
