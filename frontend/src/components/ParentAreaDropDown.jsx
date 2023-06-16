import React, { useState } from 'react';
import SelectPage from './SelectPage';
import NewRunnerCard from './NewRunnerList';

const ParentAreaDropDown = () => {
  const [selectedValue, setSelectedValue] = useState(null);

  const handleValueChange = (value) => {
    setSelectedValue(value);
  };

  return (
    <div>
      <SelectPage onValueChange={handleValueChange} />
      <NewRunnerCard selectedValue={selectedValue} />
    </div>
  );
};

export default ParentAreaDropDown;