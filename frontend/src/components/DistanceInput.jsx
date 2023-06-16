import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function Distance() {
  return (
    <TextField
          id="outlined-number"
          label="Distance (km)"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
        />
    
           ) 
        }    
