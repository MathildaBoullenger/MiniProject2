import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { GenderContext } from "./GenderContext";
import { useContext } from "react";

export default function MenWomenSwitch() {
  const { selectedGender, handleValueChange } = useContext(GenderContext);

  const handleSelectionChange = (event) => {
    handleValueChange(event.target.value);
  };

  return (
    <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">
        Preferences?
      </FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        value={selectedGender}
        onChange={handleSelectionChange}
      >
        <FormControlLabel
          value="female"
          control={<Radio />}
          label="Show women only"
        />
        <FormControlLabel
          value="male"
          control={<Radio />}
          label="Show men only"
        />
      </RadioGroup>
    </FormControl>
  );
}
