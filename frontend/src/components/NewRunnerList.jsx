{/*import React, { useState, useEffect } from "react";
import { Typography, List, ListItem, ListItemText } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { StartTime } from "./StartTime";
import { AreaDropDown } from "./AreaDropDown";

export const NewRunnersList = ({ area }) => {
  const [runners, setRunners] = useState([]);

  useEffect(() => {
    let ignore = false;

    fetch("http://localhost:3000")
      .then((response) => response.json())
      .then((json) => {
        !ignore && setRunners(json);
      })
      .catch((error) => console.error("Error fetching posts:", error));

    return () => {
      ignore = true;
    };
  }, []);


  return (
    <>
    <p>Area: {area}</p>
    <div>
      <Card sx={{ maxWidth: 345, margin: 10 }} elevation={5}>
        <CardMedia
          component="img"
          image="https://source.unsplash.com/random"
          alt="avatar"
        />
        <CardContent>
          {runners.map((runner) => (
            <div key={runner.id}>
              <Typography variant="h3">{runner.name}</Typography>
              <Typography variant="body1">
                <strong>Date joined:</strong> {runner.joined}
              </Typography>
              <Typography variant="body1">
                <strong>About {runner.name}:</strong> {runner.bio}
              </Typography>
              <Typography variant="body1">
                <strong>Area:</strong> {runner.suburb}
              </Typography>
            </div>
          ))}
        </CardContent>
      </Card>
          </div>
    </>
  );
};*/}


import React, { useState, useEffect } from "react";
import NewRunnerCard from "./NewRunnerCard";
import { StartTime } from "./StartTime";
import { AreaDropDown } from "./AreaDropDown";

const NewRunnerList = (selectedValue) => {
  const [runners, setRunners] = useState([]);

  useEffect(() => {
    let ignore = false;

    fetch("http://localhost:3000")
      .then((response) => response.json())
      .then((json) => {
        !ignore && setRunners(json);
      })
      .catch((error) => console.error("Error fetching posts:", error));

    return () => {
      ignore = true;
    };
  }, []);

  const filteredRunners = runners.filter((runner) => {
   {/*} console.log(runner.suburb, typeof runner.suburb);
    console.log(selectedValue, typeof selectedValue);
    console.log(runner.suburb === selectedValue);*/}
    return runner.suburb === selectedValue.selectedValue;
  });

console.log(filteredRunners.length);

  return (
    <>
      <div>
        {filteredRunners.map((runner) => (
          <NewRunnerCard key={runner.id} runner={runner} />
        ))}
      </div>
    </>
  );
};

export default NewRunnerList;

