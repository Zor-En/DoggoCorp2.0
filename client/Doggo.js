import React, { useState } from 'react';
import {
    Box,
    Button,
    TextField,
    Typography
} from '@mui/material';

import Menu from './components/Menu';

const DogInputPage = ({ sx }) => {
    const [dogData, setDogData] = useState({
        name: '',
        age: '',
        breed: '',
        meals: '',
        timesToEat: '',
        groomers: '',
        photo: null,
    });

    // const handleChange = (e) => {
    //     setDogData({ ...dogData, [e.target.name]: e.target.value });
    // };

    // const handlePhotoChange = (e) => {
    //     setDogData({ ...dogData, photo: e.target.files[0] });
    // };

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     console.log(dogData);
    //     // Submit logic here
    // };
    return (
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <Typography variant="h6">Add Your Dog's Information</Typography>
          <TextField
            margin="normal"
            required
            fullWidth
            label="Name"
            name="name"
            autoFocus
            value={dogData.name}
            onChange={handleChange}
          />       
          <TextField label="Dog Name" type="name" fullWidth margin="normal" />
          <TextField label="Breed" type="breed" fullWidth margin="normal" />
          <TextField label="Age" type="age" fullWidth margin="normal" />
          <TextField label="Meals" type="meals" fullWidth margin="normal" />
          <TextField label="Time to Eat" type="timeEat" fullWidth margin="normal" />
          <TextField label="groomers" type="groomers" fullWidth margin="normal" />
          <Input
            type="file"
            name="photo"
            onChange={handlePhotoChange}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Submit
          </Button>
        </Box>
      )
    };

 export default DogInputPage;