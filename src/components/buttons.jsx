import React, { useState } from "react";
import styled from "styled-components";

const Buttons = (props) => {
  const { handleCallButtonClick, buttons } = props;

  return (
    <div className="allButtons">
      {buttons.map((button, index) => (
        <div className="buttons" key={button.id} data-id={index}>
          <Button onClick={handleCallButtonClick} className="callButton">
            {button.title}
          </Button>
        </div>
      ))}
    </div>
  );
};

export default Buttons;





//I'v started learning how to use styled-components and tried to use it here.
const Button = styled.button`
  background-color: ${(p) => p.backColor};
  box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
    0 17px 50px 0 rgba(0, 0, 0, 0.19);
  border-color: #d2e8f1;
  border-radius: 7px;
  color: white;
  width: 70px;
  height: 35px;
`;
