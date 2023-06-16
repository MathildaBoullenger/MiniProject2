import * as React from 'react';
import Button from '@mui/material/Button';

export default function FindButton() {
  return (
    <Button variant="contained" disableElevation className="find-button" color="primary">
      Find
    </Button>
  );
}