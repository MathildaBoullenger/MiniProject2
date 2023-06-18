import * as React from 'react';
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
