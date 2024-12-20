import React, { useContext, useState } from "react";
import withAuth from "../utils/withAuth";
import { useNavigate } from "react-router-dom";
import "../App.css";


// navbar -->
import Box from "@mui/material/Box";
import { Button, IconButton, TextField } from "@mui/material";
import { AuthContext } from "../contexts/AuthContext";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import Tooltip from "@mui/material/Tooltip";
import HistoryToggleOffIcon from "@mui/icons-material/HistoryToggleOff";
import Logout from "@mui/icons-material/Logout";

function HomeComponent() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  let navigate = useNavigate();
  const [meetingCode, setMeetingCode] = useState("");

  const { addToUserHistory } = useContext(AuthContext);
  let handleJoinVideoCall = async () => {
    await addToUserHistory(meetingCode);
    navigate(`/${meetingCode}`);
  };

  return (
    <>
      <div className="HomePage">
        <div className="navBar">
          <span>
            VisionLoom
          </span>

          {/* material work */}
          <React.Fragment>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <Tooltip title="Account settings">
                <IconButton
                  onClick={handleClick}
                  size="small"
                  sx={{ ml: 2 }}
                  aria-controls={open ? "account-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                >
                  <Avatar
                    sx={{ width: 32, height: 32, backgroundColor: "green" }}
                  >
                    M
                  </Avatar>
                </IconButton>
              </Tooltip>
            </Box>
            <Menu
              anchorEl={anchorEl}
              id="account-menu"
              open={open}
              onClose={handleClose}
              onClick={handleClose}
              slotProps={{
                paper: {
                  elevation: 0,
                  sx: {
                    overflow: "visible",
                    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                    mt: 1.5,
                    "& .MuiAvatar-root": {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
                    },
                    "&::before": {
                      content: '""',
                      display: "block",
                      position: "absolute",
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: "background.paper",
                      transform: "translateY(-50%) rotate(45deg)",
                      zIndex: 0,
                    },
                  },
                },
              }}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
              <MenuItem onClick={handleClose}>
                <Avatar /> Profile <p></p>
              </MenuItem>
              <MenuItem
                // onClick={() => {
                //   navigate("/profilepage");
                // }}
              >
                <Avatar /> My account
              </MenuItem>
              <Divider />

              <MenuItem 
                onClick={() => {
                  navigate("/history");
                }}
              >
                <HistoryToggleOffIcon>
                  <HistoryToggleOffIcon fontSize="small" />
                </HistoryToggleOffIcon>
                <p className="HistoryIcon">History</p>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <ListItemIcon>
                  <Logout fontSize="small" />
                </ListItemIcon>
                <span
                  onClick={() => {
                    localStorage.removeItem("token");
                    navigate("/auth");
                  }}
                >
                  Logout
                </span>
              </MenuItem>
            </Menu>
          </React.Fragment>
        </div>

        <div className="meetContainer">
          <div className="leftPanel">
            <div>
              <h2>Providing Quality Video Call Just Like Quality Education</h2>

              <div style={{ display: "flex", gap: "10px" }}>
                <TextField
                  onChange={(e) => setMeetingCode(e.target.value)}
                  id="outlined-basic"
                  label="Meeting Code"
                  variant="outlined"
                  style={{ backgroundColor: "white" }}
                />
                <Button onClick={handleJoinVideoCall} variant="contained">
                  Join
                </Button>
              </div>
            </div>
          </div>
          <div className="rightPanel">
            <img srcSet="/HomeFrontIMG.avif" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default withAuth(HomeComponent);
