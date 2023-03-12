import React, { useState } from 'react';

const Buttons = () => {
    const [buttons, setButtons] = useState([
        {title: 'Call', id: 0},
        {title: 'Call', id: 1},
        {title: 'Call', id: 2},
        {title: 'Call', id: 3},
        {title: 'Call', id: 4},
        {title: 'Call', id: 5},
        {title: 'Call', id: 6},
        {title: 'Call', id: 7},
        {title: 'Call', id: 8},
        {title: 'Call', id: 9},
    ])

    const handleCallButtonClick = event => {
        const buttonId = parseInt(event.target.parentNode.getAttribute('data-id'));
        setButtons(prevButtons => {
            const updatedButtons = [...prevButtons];
            callElevator 
            updatedButtons[buttonId].title = 'Waiting';
            return updatedButtons;
            
        });
        event.target.classList.add('waitingButton'); 
    }

    return (
        <div className='buttons'>
            {buttons.map((button, index) => (
                <div className='buttons' key={index} data-id={index}>
                    <button onClick={handleCallButtonClick} className='callButton'>{button.title}</button>
                </div>
            ))}
        </div>
    )
}

export default Buttons;


// import React, { useState, useEffect } from 'react';

// const Buttons = () => {
//     const [buttons, setButtons] = useState([
//         {title: 'Call', id: 0},
//         {title: 'Call', id: 1},
//         {title: 'Call', id: 2},
//         {title: 'Call', id: 3},
//         {title: 'Call', id: 4},
//         {title: 'Call', id: 5},
//         {title: 'Call', id: 6},
//         {title: 'Call', id: 7},
//         {title: 'Call', id: 8},
//         {title: 'Call', id: 9},
//     ])


//     const handleCallButtonClick =  evt => {
//         if(evt.title == ''){
//             this.setButtons({title:'Waiting'});
//             console.log(this.title);
//         }
//     }

//     return (
//         <div className='buttons'>
//             {buttons.map((button) => (
//                 <div className='floorButton' key={button.id}>
//                     <button onClick={this.handleCallButtonClick} >{button.title} </button>
//                 </div>
//             ))}
//         </div>
//     )
// }


// export default Buttons;






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
          


