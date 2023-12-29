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
import SportsBasketballIcon from "@mui/icons-material/SportsBasketball";
import SportsMartialArtsIcon from "@mui/icons-material/SportsMartialArts";

export default function MainCard() {
  const cardStyle = {
    maxWidth: 345,
    flexBasis: "calc(50% - 30px)",
    margin: "8px",
  };

  const containerStyle = {
    display: "flex",
    flexWrap: "wrap",
    gap: "16px",
    justifyContent: "center",
  };

  return (
    <div style={containerStyle}>
      <Card sx={cardStyle} variant="outlined" raised="true">
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
      </Card>
      <Card sx={cardStyle} variant="outlined" raised="true">
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
      </Card>
    </div>
  );
}
