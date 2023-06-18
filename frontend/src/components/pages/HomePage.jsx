// all components for the homepage
import { Typography } from "@mui/material";
import StartButton from "../StartButton";

export const HomePage = () => {
  return (
    <>
      <div className="container">

        <div className="background-image-homepage">
          <Typography variant="h4" className="title-homepage">
            Don't run alone.<br></br>
            Join other runners in your area.
          </Typography>

          <Typography variant="subtitle1" className="subtitle-homepage">
            <strong>About.</strong>
            <br></br>
            Connect with local runners and enjoy the power of community. Our
            membership-only app helps you find verified running partners in your
            area. Run together, stay motivated, and explore new routes. Join us
            and experience the joy of running with others.
          </Typography>

          <StartButton></StartButton>
        </div>
        
      </div>
    </>
  );
};
