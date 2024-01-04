import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import '../stylesheets/App.css';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import SportsMartialArtsIcon from '@mui/icons-material/SportsMartialArts';
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
} from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { blue } from '@mui/material/colors';
import '../stylesheets/LandingPage.css';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import eboshi from '../../assets/eboshi.jpg';
import { useAuth } from './Authorization';
import { cardStyle, containerStyle } from '../stylesheets/MainCardStyle';

const headerFont = createTheme({
  //this shit is not working
  typography: {
    fontFamily: ['Pixelify Sans', 'sans-serif'].join(','),
  },
  palette: {
    primary: {
      main: '#6a994e',
    },
    secondary: {
      main: '#9c6644',
    },
  },
});

export default function MainCard() {
  const [dogsArr, setDogsArr] = useState([]);
  const { user, fetchDogs } = useAuth();
  const userId = user.user_id;
  const getDogs = async () => {
    try {
      const dogs = await fetchDogs(userId);
      console.log(dogs);
      setDogsArr(dogs);
      // console.log('all dogs', dogsArr);
    } catch (error) {
      console.log(error, 'error accessing database');
    }
  };
  useEffect(() => {
    console.log('useEffect is working');
    getDogs();
  }, []);

  return (
    <div style={containerStyle}>
      <ThemeProvider theme={headerFont}>
        {dogsArr.map((dog) => (
          <DogCard dog={dog} key={dog.dog_id} />
        ))}
      </ThemeProvider>
    </div>
  );
}

function DogCard({ dog }) {
  return (
    <Card sx={cardStyle}>
      <CardHeader
        fontFamily='Pixelify Sans'
        title={dog.dog_name}
        titleTypographyProps={{ variant: 'h3' }}
        sx={{
          mb: 1,
          color: 'pink',
          textShadow:
            '-1px -1px white, 1px 1px hotpink, 2px 2px hotpink, 3px 3px 3px #9e9e9e',
        }}
      />
      <CardMedia
        component='img'
        height='250'
        // image={eboshi}
        src={dog.photo}
        alt='Pixelized picture of dog -?'
        sx={{ objectFit: 'contain', mb: 1 }}
      />

      {Object.keys(dog)
        .filter(
          (key) => !['dog_id', 'owner_id', 'dog_name', 'groomer'].includes(key)
        )
        .map((key) => (
          <DogDetails detail={key} data={dog[key]} key={key} />
        ))}
      <CardActions
        sx={{
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography variant='body2' color='text.secondary' sx={{ mb: 1 }}>
          Add / Remove Watcher
        </Typography>
        <Box sx={{ display: 'flex' }}>
          <IconButton aria-label='add'>
            <AddCircleIcon color='primary' />
          </IconButton>
          <IconButton aria-label='remove'>
            <RemoveCircleIcon color='primary' />
          </IconButton>
        </Box>
      </CardActions>
    </Card>
  );
}

function DogDetails({ detail, data }) {
  return (
    <CardContent
      sx={{ textAlign: 'center', display: 'flex', alignItems: 'center' }}
    >
      <Typography variant='body' color='text.secondary' sx={{ mb: 2 }}>
        {detail}: {data}
      </Typography>
      <br></br>
      <Button variant='outlined' sx={{ mt: 2 }}>
        Edit
      </Button>
    </CardContent>
  );
}
