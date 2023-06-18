import * as React from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

export default function FindButton() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/runners');
  };

  return (
    <Button size="large" variant="contained" disableElevation className="find-button" color="primary" onClick={handleClick}>
      Find
    </Button>
  );
}