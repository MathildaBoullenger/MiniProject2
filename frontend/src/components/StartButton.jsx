import * as React from 'react';
import Button from '@mui/material/Button';

export default function StartButton() {
  return (
    <Button variant="contained" disableElevation className="start-button" color="primary">
      Start
    </Button>
  );
}