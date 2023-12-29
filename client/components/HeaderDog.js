import * as React from "react";
import {
  Badge,
  Box,
  Button,
  IconButton,
  InputLabel,
  FormControl,
  Menu,
  Select,
  SelectChangeEvent,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MenuIcon from "@mui/icons-material/Menu";
import { styled } from "@mui/material/styles";

export default function HeaderDog() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

// const MenuButton = styled(Button)({
//   boxShadow: "none",
//   textTransform: "none",
//   position: "absolute",
//   border: "none",
//   outline: "none",
//   width: "120px",
//   height: "40px",
//   backgroundColor: " #FFD139",
//   textAlign: "center",
//   lineHeight: " 40px",
//   cursor: "pointer",
//   color: "white",
//   userSelect: "none",
//   "&:before": {
//     // content: '',
//     position: "absolute",
//     width: "40px",
//     height: "10px",
//     left: -"25px",
//     bottom: "10px",
//     backgroundColor: "#F9DD8F",
//     transform: "rotate(90deg) skew(45deg)",
//   },
//   " &:after": {
//     // content: '',
//     position: "absolute",
//     width: "120px",
//     height: "10px",
//     bottom: "-10px",
//     left: "-5px",
//     backgroundColor: " #E2B537",
//     transform: "skew(-45deg) rotate(0deg)",
//   },
//   " &.clicked": {
//     left: "-5px",
//     bottom: "-5px",
//     "&:before": {
//       height: "5px",
//       left: "-22px",
//       bottom: "15px",
//     },
//     " &:after": {
//       height: "5px",
//       bottom: "-5px",
//       left: "-2px",
//     },
//   },
// });

const renderMenu = (
  <div>
    <Button
      disable="true"
      aria-controls={open ? "basic-menu" : undefined}
      aria-haspopup="true"
      aria-expanded={open ? "true" : undefined}
      disableRipple="true"
      onClick={handleClick}
      style={{ backgroundColor: "transparent" }}
      sx={{
        fontFamily: "Pixelify Sans",
        fontSize: "30px",
        color: "white",
        textShadow: "2px 2px pink",
      }}
    >
      Menu
    </Button>
    <Menu
      id="basic-menu"
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      MenuListProps={{
        "aria-labelledby": "basic-button",
      }}
      // keep for chat bar?
      keepMounted
      color="pink"
      style={{ backgroundColor: "transparent" }}
      sx={{}}
    >
      <MenuItem onClick={handleClose}>Profile</MenuItem>
      <MenuItem onClick={handleClose}>My account</MenuItem>
      <MenuItem onClick={handleClose}>Logout</MenuItem>
    </Menu>
  </div>
);


  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Toolbar>
          <IconButton
            style={{ backgroundColor: "transparent" }}

            // size="large"
            // edge="start"
            // color="inherit"
            // aria-label="open drawer"
            // sx={{ mr: 2 }}
          >
            {renderMenu}
          </IconButton>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {/* // mail icon */}
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
              style={{ color: "white"}}
            >
              <Badge badgeContent={1} color="error">
                <MailIcon />
              </Badge>
            </IconButton>

            {/* // notification icon */}
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
              style={{ color: "white" }}
            >
              <Badge badgeContent={6} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            {/* // button for ipsom */}
            {/* <Button
              size="small"
              color="secondary"
              variant="text"
              edge="end"
              handles dog ipsom
              onClick={handleProfileMenuOpen}
            > */}
            {/* // custom button  */}
            {/* Button 1 */}
            {/* chatroom button */}
            {/* </Button>
            <Button size="small" color="secondary" variant="text">
              Button 2
            </Button> */}
          </Box>
        </Toolbar>
      </Box>
    </div>
  );
}



//  <Typography
//    variant="h4"
//    textAlign="center"
//    fontFamily={"Pixelify Sans"}
//    sx={{
//      color: "pink",
//      textShadow: "2px 2px hotpink",
//      // textShadow:"-1px 0 hotpink, 0 1px hotpink, 1px 0 hotpink, 0 -1px hotpink",
//    }}
//  >
//    Add Your Dog's Information
//  </Typography>;