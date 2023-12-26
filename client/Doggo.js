import React, { useState } from "react";
import {
    Box,
    Button,
    TextField,
    Typography,
    Input,
    InputProps,
    InputAdornment,
    IconButton
} from '@mui/material';

import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';


// import Menu from "./components/Menu";

const DogInputPage = () => {
    const [dogData, setDogData] = useState({
        name: '',
        age: '',
        weight: '',
        breed: '',
        meals: [{ instructions: '', times: ''}],
        groomers: '',
        photo: null,
    });

    const handleChange = (e) => {
        if (e.target.name.startsWith('meal-')) {
          // Handle meal changes
          const index = parseInt(e.target.name.split('-')[1], 10);
          const field = e.target.name.split('-')[2];
          handleMealChange(index, field, e.target.value);
        } else {
          setDogData({ ...dogData, [e.target.name]: e.target.value });
      };
    }

    const handlePhotoChange = (e) => {
        setDogData({ ...dogData, photo: e.target.files[0] });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(dogData);
        // Submit logic here
    };

    const handleMealChange = (index, field, value) => {
      const newMeals = [...dogData.meals];
      newMeals[index][field] = value;
      setDogData({ ...dogData, meals: newMeals });
    };

    const handleAddMeal = () => {
        setDogData({ ...dogData, meals: [...dogData.meals, { instructions: '', times: '' }] });
    };

    const handleRemoveMeal = (index) => {
        const newMeals = [...dogData.meals];
        if (newMeals.length > 1) {
            newMeals.splice(index, 1);
            setDogData({ ...dogData, meals: newMeals });
        }
    };

    return (
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ display: 'flex', flexWrap: 'wrap' }}>
          <Typography variant="h6">Add Your Dog's Information</Typography>
          <TextField
            label="Dog's Name"
            name="name"
            type="text"
            value={dogData.name}
            onChange={handleChange}
            required
            fullWidth
            autoFocus
            margin="normal"
          />       
          <TextField
            label="Age"
            name="age"
            type="text"
            value={dogData.age}
            onChange={handleChange}
            required
            sx={{ m: 1, width: '25ch' }}
            fullWidth
            margin="normal"
            
          />
          <TextField 
            label="Weight"
            name="weight"
            type="text"
            value={dogData.weight}
            onChange={handleChange}
            required
            sx={{ m: 1, width: '25ch' }}
            InputProps={{
              endAdornment: <InputAdornment position="end">lbs</InputAdornment>,
            }}
          />
          <TextField
            label="Breed"
            name="breed"
            type="text"
            fullWidth
            margin="normal"
            value={dogData.breed}
            onChange={handleChange}
          />
            {/* handles meals adding/subtracting */}
            {dogData.meals.map((meal, index) => (
            <Box key={index} sx={{ display: 'flex', alignItems: 'center', width: '100%', mb: 2 }}>
                <TextField
                    label={`Meal ${index + 1} Instructions`}
                    name={`meal-${index}-instructions`}
                    type="text"
                    value={meal.instructions}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label={`Meal ${index + 1} Times`}
                    name={`meal-${index}-times`}
                    type="text"
                    value={meal.times}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                />
                {index === dogData.meals.length - 1 && (
                    <IconButton onClick={handleAddMeal}>
                        <AddCircleOutlineIcon />
                    </IconButton>
                )}
                {dogData.meals.length > 1 && (
                    <IconButton onClick={() => handleRemoveMeal(index)}>
                        <RemoveCircleOutlineIcon />
                    </IconButton>
                )}
            </Box>
          ))}
          
          <TextField label="Medication" type="text" fullWidth margin="normal" />
          <TextField label="Groomers" type="text" fullWidth margin="normal" />
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