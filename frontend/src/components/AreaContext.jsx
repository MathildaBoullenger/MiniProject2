import React, { createContext, useState } from 'react';

export const AreaContext = createContext();

export const AreaProvider = ({ children }) => {
    const [selectedValue, setSelectedValue] = useState('');
  
    const handleValueChange = (value) => {
      setSelectedValue(value);
      console.log(value);
    };
  
    return (
      <AreaContext.Provider value={{ selectedValue, handleValueChange }}>
      {children}
      </AreaContext.Provider>
    );
  };
