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
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import { blue } from "@mui/material/colors";
import { useNavigate } from "react-router";


const theme = createTheme({
  transitions: {
    // So we have `transition: none;` everywhere
    create: () => "none",
  },
  typography: {},
  palette: {
    primary: {
      main: "#6a994e",
    },
    secondary: {
      main: "#9c6644",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        "*, *::before, *::after": {
          transition: "none !important",
          animation: "none !important",
        },
      },
    },
    MuiButtonBase: {
      defaultProps: {
        // The props to change the default for.
        disableRipple: true,
      },

      root: {
        borderRadius: 30,
        padding: 15,
      },
    },
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Pixelify Sans';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: local('Pixelify Sans'), @import
          url('https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;600;700&family=Pixelify+Sans:wght@700&display=swap');
        }`,
    },
  },
});

export default function HeaderDog() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const navigate = useNavigate();
  const [state, setState] = React.useState({
    left: false,
  });
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSignOut = () => {
    if (text === "Logout") {
    navigate("/");
    }
  };

 const handleMenuClick = (text) => {
   if (text === "Add Dog") {
     navigate("/addDog");
   }
   if (text === "Profile") {
     navigate("/homepage");
   }
 };

const shadowColor = blue[50];
const renderMenu = (
  <div>
    <ThemeProvider theme={theme}>
      <Button
        variant="contained"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        style={{ backgroundColor: "transparent", boxShadow: "none" }}
        sx={{
          fontFamily: "Pixelify Sans",
          fontSize: "30px",
          color: "white",
          boxShadow: "none",
          textShadow:
            "1px 1px #ffc2df, 2px 2px #ffc2df, 3px 3px #ffc2df, 3px 3px 3px #9e9e9e",
          "&:hover": {
            boxShadow: "0",
            textShadow:
              "1px 1px #ffc2df, 2px 2px #ffc2df, 3px 3px #ffc2df, 3px 3px 3px #9e9e9e, 1px 1px 10px white, -1px -1px 10px white",
          },
          "&:active": {
            variant: "contained",
            boxShadow: "0",
            boxShadow: "none",
            position: "relative",
            top: "2px",
            left: "2px",
            textShadow: "1px 1px #ffc2df, 3px 3px 3px #9e9e9e",
            disableElevation: "true",
          },
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
      >
        <MenuItem onClick={() => handleMenuClick("Profile")}>
          My account
        </MenuItem>
        <MenuItem onClick={() => handleMenuClick("Add Dog")}>Add Dog</MenuItem>
        <MenuItem onClick={() => handleMenuClick("Logout")}>Logout</MenuItem>
      </Menu>
    </ThemeProvider>
  </div>
);


  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Toolbar>
          {renderMenu}
          <Box sx={{ flexGrow: 1 }} />

          <IconButton
            style={{ backgroundColor: "transparent" }}
            // size="large"
            // edge="start"
            // color="inherit"
            // aria-label="open drawer"
            // sx={{ mr: 2 }}
          ></IconButton>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {/* // mail icon */}
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
              style={{ color: "white" }}
              sx={{ shadow: "3px 3px 3px black" }}
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


