// using @mui/x-date-pickers

import { useState, useRef } from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';

export const StartTime = () => {
    const [selectedDate, setSelectedDate] = useState(null);
    const inputRef = useRef();
  
    function handleDateChange() {
      setSelectedDate(inputRef.current.value);
      console.log(inputRef.current);
    }

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker ref={inputRef} onChange={handleDateChange} />
      <TimePicker />
    </LocalizationProvider>
  );
};
