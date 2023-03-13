import React, { useState } from "react";
import styled from 'styled-components'

const Buttons = (props) => {
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
    const buttonId = parseInt(event.target.parentNode.getAttribute("data-id")); // need to change it because of the order.
    props.call(buttonId);
    setButtons((prevButtons) => {
      const updatedButtons = [...prevButtons];
      updatedButtons[buttonId].title = "Waiting";
      return updatedButtons;
    });
    event.target.classList.add("waitingButton");
  };

  return (
    <div className="allButtons">
      {buttons.map((button, index) => (
        <div className="buttons" key={button.id} data-id={index}>
          <Button onClick={handleCallButtonClick} backColor={'purpel'}  className="callButton">
            {button.title}
          </Button>
        </div>
      ))}
    </div>
  );
};

export default Buttons;

const Button = styled.button`
background-color:${(p)=> p.backColor};
box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
border-color: #d2e8f1;
color: blue;
padding: 5px 15px;
`

