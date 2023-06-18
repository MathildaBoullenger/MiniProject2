{
  /*import React from "react";
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

export default RunnerCard;*/
}

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import ConnectButton from "./ConnectButton";

const RunnerCard = ({ runner }) => {
  return (
    <Card sx={{ maxWidth: 345, margin: 10 }} elevation={5}>
      <CardMedia
        component="img"
        height="100%"
        width="100%"
        image={runner.image}
        alt="avatar"
        sx={{ objectFit: "cover" }} // Ensures the image covers the entire card space
      />
      <CardContent>
        <Typography variant="h6" component="div" sx={{ marginBottom: 1 }}>
          {runner.name}
        </Typography>

        <div>
          <Stack direction="row" spacing={1}>
            <Chip icon={<CheckCircleIcon />} label="Verified member" />
          </Stack>
          <br></br>
        </div>
        
        <Typography
          variant="body2"
          sx={{ marginBottom: 1 }}
        >
          <strong>Joined:</strong> {runner.joined}
        </Typography>
        <Typography
          variant="body2"
          sx={{ marginBottom: 1 }}
        >
          <strong>About {runner.name}:</strong> {runner.bio}
        </Typography>
        <Typography variant="body2">
          <strong>Area:</strong> {runner.suburb}
        </Typography>
        <br></br>
        <ConnectButton />
      </CardContent>
    </Card>
  );
};

export default RunnerCard;
