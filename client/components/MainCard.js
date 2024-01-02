import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import '../stylesheets/App.css';
import SportsBasketballIcon from "@mui/icons-material/SportsBasketball";
import SportsMartialArtsIcon from "@mui/icons-material/SportsMartialArts";
import {
  Box,
  BoxShadow,
  Button,
  TextField,
  Input,
  InputAdornment,
  InputLabelProps,
  InputLabel,
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
  Tooltip,
} from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { blue } from "@mui/material/colors";
import "../stylesheets/LandingPage.css";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import eboshi from "../../assets/eboshi.jpg";

  const headerFont = createTheme({
    //this shit is not working
    typography: {
      fontFamily: ["Pixelify Sans", "sans-serif"].join(","),
    },
    palette: {
      primary: {
        main: "#6a994e",
      },
      secondary: {
        main: "#9c6644",
      },
    },
  });

export default function MainCard() {
  const boxBorder = blue[50];
  const cardStyle = {
    minWidth: 455,
    // flexBasis: "calc(50% - 30px)",
    margin: "8px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Pixelify Sans",
    padding: 3,
    boxShadow: 3,
    borderRadius: 2,
    backgroundColor: "rgba(255, 255, 255, 0.7)", //transparent
    border: 2,
    borderColor: boxBorder,
  };

  // makes two columns for two cards per row
  const containerStyle = {
    display: "flex",
    flexWrap: "wrap",
    gap: "16px",
    justifyContent: "center",
  };

  return (
    <div style={containerStyle}>
      <ThemeProvider theme={headerFont}>
        <Card sx={cardStyle}>
          <CardHeader
            fontFamily="Pixelify Sans"
            title="Eboshi"
            titleTypographyProps={{ variant: "h3" }}
            sx={{
              color: "pink",
              textShadow:
                "-1px -1px white, 1px 1px hotpink, 2px 2px hotpink, 3px 3px 3px #9e9e9e",
            }}
          />
          <CardMedia
            component="img"
            height="250"
            image={eboshi}
            alt="Pixelized picture of dog -?"
            sx={{ objectFit: "contain" }}
          />
          <CardContent sx={{ textAlign: "center" }}>
            <Typography variant="body2" color="text.secondary">
              Basic Dog Info
            </Typography>
            <Button variant="outlined">Edit</Button>
          </CardContent>
          <CardActions sx={{ justifyContent: "center" }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                mb: 1,
              }}
            >
              Add / Remove Watcher
            </Box>
            <IconButton aria-label="Unsure">
              <AddCircleIcon color="primary" />
            </IconButton>
            <IconButton aria-label="share">
              <RemoveCircleIcon color="primary" />
            </IconButton>
          </CardActions>
        </Card>
        {/* <Card sx={cardStyle} variant="outlined" raised={true}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="Dog Init">
              J
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Dog Name"
          subheader="Date added - ?"
        />
        <CardMedia
          component="img"
          height="194"
          image=""
          alt="Pixelized picture of dog -?"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Basic Dog Info
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="Unsure">
            <SportsMartialArtsIcon />
          </IconButton>
          <IconButton aria-label="share">
            <SportsBasketballIcon />
          </IconButton>
        </CardActions>
      </Card> */}
      </ThemeProvider>
    </div>
  );
}
