import React, { useState } from 'react';

const Buttons = (props) => {

    const [buttons, setButtons] = useState([
        {title: 'Call', id: 9},
        {title: 'Call', id: 8},
        {title: 'Call', id: 7},
        {title: 'Call', id: 6},
        {title: 'Call', id: 5},
        {title: 'Call', id: 4},
        {title: 'Call', id: 3},
        {title: 'Call', id: 2},
        {title: 'Call', id: 1},
        {title: 'Call', id: 0},
    ])


    const handleCallButtonClick = event => {
        const buttonId = parseInt(event.target.parentNode.getAttribute('data-id'));
        props.call(buttonId);
        setButtons(prevButtons => {
            const updatedButtons = [...prevButtons];
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

