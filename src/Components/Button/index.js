import React from "react";
import { Button as ButtonContainer } from "./style";

const Button = ({ children, type, ...props }) => {
  return <ButtonContainer {...props} type={type}>{children}</ButtonContainer>;
};

export default Button;
