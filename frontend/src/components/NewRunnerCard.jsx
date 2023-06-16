import React from "react";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";

const RunnerCard = ({ runner }) => {
  return (
    <Card sx={{ maxWidth: 345, margin: 10 }} elevation={5}>
      <CardMedia component="img" height="140" image= {runner.image} alt="avatar" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {runner.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <strong>Date joined:</strong> {runner.joined}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <strong>About {runner.name}:</strong> {runner.bio}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <strong>Area:</strong> {runner.suburb}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default RunnerCard;
