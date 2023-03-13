import React, { useState, useEffect } from "react";
import photo from "../photo.svg";

const Elevator = (props) => {
  return (
        <div id={"elevator_" + props.elevatorId} key={props.elevatorId}>
          <img src={photo} alt="elevatorPhoto" />
    </div>
  );
};

export default Elevator;
