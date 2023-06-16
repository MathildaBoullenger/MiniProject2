import React, { useState } from 'react';
import {SelectPage} from './pages/SelectPage'
import NewRunnerList from './NewRunnerList';

const ParentAreaDropDown = () => {
  const [selectedValue, setSelectedValue] = useState(null);

  const handleValueChange = (value) => {
    setSelectedValue(value);
    console.log(value);
  };

  return (
    <div>
      <SelectPage onValueChange={handleValueChange} />
      <NewRunnerList selectedValue={selectedValue} />
    </div>
  );
};

export default ParentAreaDropDown;
