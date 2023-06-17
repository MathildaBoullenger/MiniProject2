import React, { createContext, useState } from 'react';

export const GenderContext = createContext();

export const GenderProvider = ({ children }) => {
    const [selectedGender, setSelectedGender] = useState('');
  
    const handleValueChange = (value) => {
      setSelectedGender(value);
      console.log(value);
    };
  
    return (
      <GenderContext.Provider value={{ selectedGender, handleValueChange }}>
      {children}
      </GenderContext.Provider>
    );
  };