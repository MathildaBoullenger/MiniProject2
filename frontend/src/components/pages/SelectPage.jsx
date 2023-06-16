// all components for the select page
import React from "react";
import { Typography } from "@mui/material";
import { AreaDropDown } from "../AreaDropDown";
import { StartTime } from "../StartTime";
import MenWomenSwitch from "../MaleFemaleSwitch";
import FindButton from "../FindButton";

export const SelectPage = ( props ) => {
console.log(props)
  return (
    <>
      <div className="container">
        <div className="background-image-select-page">
          <div className="select-page-container">
            <Typography variant="h4" className="select-page-title">
              When are you going?
            </Typography>
            <br></br>
            <div className="select-page-content">
              <div className="dropdown-container">
              <AreaDropDown onValueChange={props.onValueChange}/>
              </div>
              <div className="date-time-container">
                <StartTime />
              </div> 
              </div>
              <div>
                <br></br>
                <MenWomenSwitch></MenWomenSwitch> 
              </div>  
                <FindButton></FindButton>
          </div>
        </div>
      </div>
    </>
  );
};
