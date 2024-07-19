import React from "react";
import { InpuT } from "./style";

const Input = React.forwardRef(({ type, placeholder }, ref) => {
  return <InpuT type={type} placeholder={placeholder} ref={ref} />;
});

export default Input;

/* Modo de usar

<Input 
        placeholder="Digite Seu Usuário" 
        type="text" 
        ref={inputRefUsers} 
      />

*/
