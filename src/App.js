import './App.css';
import React, { useState, useEffect } from 'react';
import Elevators from './components/elevators';
import Buttons from './components/buttons';
import Floors from './components/floors';
import ElevatorSystem from './components/elevatorSystem';


function App() {


  const [selectedButton, setSelectedButton] = useState(null);


  const buttonClicked = (call) =>{ 
      setSelectedButton(call);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1> Elevator Execrise</h1>
        <div className="layout">
          <Floors />
          <Elevators currElevator={selectedButton}/>
          <Buttons call={buttonClicked}/>
        </div>
      </header>
    </div>
  );
}

export default App;















// function App() {
//   const [elevatorStates, setElevatorStates] = useState([
//     { floor: 0, state: 'IDLE', queue: [] },
//     { floor: 0, state: 'IDLE', queue: [] },
//     { floor: 0, state: 'IDLE', queue: [] },
//     { floor: 0, state: 'IDLE', queue: [] },
//     { floor: 0, state: 'IDLE', queue: [] },
//   ]);

//   const [floorQueues, setFloorQueues] = useState([...Array(10)].map(() => []));

//   useEffect(() => {
//     // Move each elevator to its next destination
//     const newElevatorStates = elevatorStates.map((elevatorState, index) => {
//       if (elevatorState.queue.length > 0) {
//         const nextFloor = elevatorState.queue[0];
//         if (elevatorState.floor < nextFloor) {
//           return { ...elevatorState, state: 'MOVING_UP' };
//         } else if (elevatorState.floor > nextFloor) {
//           return { ...elevatorState, state: 'MOVING_DOWN' };
//         } else {
//           return { ...elevatorState, state: 'IDLE', queue: elevatorState.queue.slice(1) };
//         }
//       } else {
//         return elevatorState;
//       }
//     });

//     setElevatorStates(newElevatorStates);
//   }, [elevatorStates]);

//   const handleCallButtonClick = (floorIndex) => {
//     // Find the closest idle elevator
//     const closestElevatorIndex = elevatorStates.reduce((prevIndex, currentState, currentIndex) => {
//       const prevDistance = Math.abs(prevIndex - floorIndex);
//       const currentDistance = Math.abs(currentIndex - floorIndex);
//       if (currentState.state === 'IDLE' && currentDistance < prevDistance) {
//         return currentIndex;
//       } else {
//         return prevIndex;
//       }
//     }, 0);

//     // Add the floor request to the queue of the closest elevator
//     setElevatorStates([
//       ...elevatorStates.slice(0, closestElevatorIndex),
//       { floor: elevatorStates[closestElevatorIndex].floor, state: 'IDLE', queue: [...elevatorStates[closestElevatorIndex].queue, floorIndex] },
//       ...elevatorStates.slice(closestElevatorIndex + 1),
//     ]);

//     // Add the floor request to the queue of the corresponding floor
//     setFloorQueues([...floorQueues.slice(0, floorIndex), [...floorQueues[floorIndex], closestElevatorIndex], ...floorQueues.slice(floorIndex + 1)]);
//   };

//   const handleFloorButtonClicks = (elevatorIndex, floorIndex) => {
//     // Remove any duplicate floor requests from the elevator's queue
//     const elevatorQueue = [...new Set(elevatorStates[elevatorIndex].queue)];

//     // Find the closest idle or moving elevator
//     const closestElevatorIndex = elevatorStates.reduce((prevIndex, currentState, currentIndex) => {
//       const prevDistance = Math.abs(prevIndex - elevatorIndex);
//       const currentDistance = Math.abs(currentIndex - elevatorIndex);
//       if ((currentState.state === 'IDLE' || (currentState.state === 'MOVING_UP' && currentState.floor <= floorIndex) || (currentState.state === 'MOVING_DOWN' && currentState.floor >=        floorIndex)) && currentDistance < prevDistance) {
//         return currentIndex;
//       } else {
//         return prevIndex;
//       }
//     }, elevatorIndex);

//     // Update the elevator's queue
//     setElevatorStates([
//       ...elevatorStates.slice(0, closestElevatorIndex),
//       { floor: elevatorStates[closestElevatorIndex].floor, state: elevatorStates[closestElevatorIndex].state, queue: elevatorQueue },
//       ...elevatorStates.slice(closestElevatorIndex + 1),
//     ]);

//     // Remove the floor request from the corresponding floor's queue
//     setFloorQueues([...floorQueues.slice(0, floorIndex), floorQueues[floorIndex].filter(queueIndex => queueIndex !== elevatorIndex), ...floorQueues.slice(floorIndex + 1)]);
//   }


// return (
//   <div className="App">
//     <h1>Elevator Control System</h1>
//     <div className="floor-buttons">
//       {[...Array(10)].map((_, floorIndex) => (
//         <div key={floorIndex} className="floor-button">
//           <button className="call-button" onClick={() => handleCallButtonClick(floorIndex)}>
//             Call
//           </button>
//           <div className="floor-number">{10 - floorIndex}</div>
//           {[...Array(5)].map((_, elevatorIndex) => (
//             <button
//               key={elevatorIndex}
//               className={`floor-button ${floorQueues[floorIndex].includes(elevatorIndex) ? 'active' : ''}`}
//               onClick={() => handleFloorButtonClicks(elevatorIndex, floorIndex)}
//               disabled={elevatorStates[elevatorIndex].queue.includes(floorIndex)}
//             >
//               {elevatorStates[elevatorIndex].floor === 9 - floorIndex && elevatorStates[elevatorIndex].state === 'IDLE' ? 'OPEN' : ''}
//             </button>
//           ))}
//         </div>
//       ))}
//     </div>
//   </div>
// )};
          


