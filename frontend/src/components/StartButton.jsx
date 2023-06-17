import React from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

export default function StartButton() {
  const navigate = useNavigate();

  const handleClick = () => {
    // Navigate to the next page
    navigate('/select');
  };

  return (
    <Button
      variant="contained"
      disableElevation
      className="start-button"
      color="primary"
      onClick={handleClick}
    >
      Start
    </Button>
  );
}
