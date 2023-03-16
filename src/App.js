import "./App.css";
import React, { useState, useEffect } from "react";
import ElevatorsSystem from "./components/elevators-system";
import Buttons from "./components/buttons";
import Floors from "./components/floors";
import { ElevatorIcon } from "./components/elevatorIcon";

function App() {
  const [selectedButton, setSelectedButton] = useState({
    title: "Call",
    id: 0,
  });

  //I'll use button's id to identify the floor
  const [buttons, setButtons] = useState([
    { title: "Call", id: 0 },
    { title: "Call", id: 1 },
    { title: "Call", id: 2 },
    { title: "Call", id: 3 },
    { title: "Call", id: 4 },
    { title: "Call", id: 5 },
    { title: "Call", id: 6 },
    { title: "Call", id: 7 },
    { title: "Call", id: 8 },
    { title: "Call", id: 9 },
  ]);

  const handleCallButtonClick = (event) => {
    //TODO add if statement that check title is "Call"
    // const button = event.target;
    // console.log(button.title);
    // if (button.title === "Call") {
    const buttonId = parseInt(event.target.parentNode.getAttribute("data-id"));
    setSelectedButton(buttonId);
    setButtons((prevButtons) => {
      const updatedButtons = [...prevButtons];
      updatedButtons[buttonId].title = "Waiting";
      return updatedButtons;
    });
    event.target.classList.add("waitingButton");
    // }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1> Elevator Execrise</h1>
        <div className="layout">
          <Floors />
          <ElevatorsSystem calledFloor={selectedButton} />
          <Buttons
            handleCallButtonClick={handleCallButtonClick}
            buttons={buttons}
          />
        </div>
      </header>
    </div>
  );
}

export default App;
