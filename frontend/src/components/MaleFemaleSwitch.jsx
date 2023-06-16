import * as React from 'react';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Switch from '@mui/material/Switch';
import { alpha, styled } from '@mui/material/styles';
import { pink } from '@mui/material/colors';

export default function MenWomenSwitch() {
  const [state, setState] = React.useState({
    women: false,
    men: false,
  });

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  const PinkSwitch = styled(Switch)(({ theme }) => ({
    '& .MuiSwitch-switchBase.Mui-checked': {
      color: pink[600],
      '&:hover': {
        backgroundColor: alpha(pink[600], theme.palette.action.hoverOpacity),
      },
    },
    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
      backgroundColor: pink[600],
    },
  }));
  

  return (
    <FormControl component="fieldset" variant="standard">
      <FormLabel component="legend">It's your run! Choose any specifics</FormLabel>
      <FormGroup aria-label="position" row>
        <FormControlLabel
          control={
            <PinkSwitch checked={state.women} onChange={handleChange} name="women" />
          }
          label="Women Only"
        />
          <FormControlLabel
          control={
            <Switch checked={state.men} onChange={handleChange} name="men" />
          }
          label="Men Only"
        />

      </FormGroup>
      <FormHelperText>Placeholder text</FormHelperText>
    </FormControl>
  );
}
