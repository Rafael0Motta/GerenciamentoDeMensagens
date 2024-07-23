import React from "react";
import { InpuT } from "./style";

const Input = React.forwardRef(({ type, placeholder, ref, ...props }) => {
  return <InpuT {...props} type={type} placeholder={placeholder} ref={ref} />;
});

export default Input;
