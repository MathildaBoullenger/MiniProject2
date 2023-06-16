import React, { useState, useEffect } from 'react';
import { Typography, List, ListItem, ListItemText } from '@mui/material';


const RunnersList = () => {
  const [runners, setRunners] = useState([]);

  useEffect(() => {
    let ignore = false;

    fetch('http://localhost:3000')
      .then((response) => response.json())
      .then((json) => {
        !ignore && setRunners(json);
      })
      .catch((error) => console.error('Error fetching posts:', error));

    return () => {
      ignore = true;
    };
  }, []);

  return (
    <div>
       <Typography variant="h2">Runners:</Typography>
       <List>
       {runners.map((runner) => (
          <ListItem key={runner.id}>
            <ListItemText>
              <Typography variant="h3">{runner.name}</Typography>
              <Typography variant="body1">{runner.joined}</Typography>
            </ListItemText>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default RunnersList;
