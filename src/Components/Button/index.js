import React from "react";
import { Button as ButtonContainer } from "./style";

const Button = ({ children, type, status, ...props }) => {
  return (
    <ButtonContainer {...props} type={type} status={status}>
      {children}
    </ButtonContainer>
  );
};

export default Button;
