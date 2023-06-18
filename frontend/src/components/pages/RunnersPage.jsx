// all components for the runners page
import { Typography } from "@mui/material";
import NewRunnerList from "../NewRunnerList";
import RunCircleIcon from '@mui/icons-material/RunCircle';

export const RunnersPage = () => {
  return (

    <div className="runners-page-container">
    <header className="runners-page-header">
      <Typography variant="h4" color="primary"><RunCircleIcon style={{ fontSize: '48px' }}></RunCircleIcon><br></br>Matched runners</Typography>
    </header>


    <div className="runners-page-content">
  <NewRunnerList></NewRunnerList>
  </div>

  <footer className="runners-page-footer">
        <p>Contact us</p>
      </footer>
    </div>
  )
}
