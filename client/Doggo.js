import React, { useState, useEffect } from 'react';
import Footers from './components/Footer';
import Sky from './components/Sky';
import HeaderDog from './components/HeaderDog';
import dayjs from 'dayjs';
import {
  Box,
  Button,
  TextField,
  Typography,
  Input,
  InputAdornment,
  InputLabelProps,
  IconButton,
  InputLabel,
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
  Tooltip,
} from '@mui/material';
import { blue } from '@mui/material/colors';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { useNavigate } from 'react-router';
import {
  formStyle,
  DoggoTypographyStyle,
  DoggoTextFieldStyle,
  DoggoBoxAgeAndWeightStyle,
  DoggoBoxDataStyle,
  DoggoBoxAddingStyle,
} from './stylesheets/DoggoStyle';
import { useAuth } from './components/Authorization';

//for custom file upload button
// import CloudUploadIcon from "@mui/icons-material/CloudUpload";
// import { styled } from "@mui/material/styles";
// import { DigitalClock } from '@mui/x-date-pickers/DigitalClock';
// import DateFnsUtils from '@date-io/date-fns';

const DogInputPage = () => {
  const { user, addDog } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    console.log('Doggo page User:', user);
    if (!user) {
      console.log('there is no user');
      navigate('/');
    }
  }, [user, navigate]);

  if (!user) return null;
  // console.log('in Doggo.js', user);
  const [dogData, setDogData] = useState({
    name: '',
    owner_id: user.user_id,
    birthday: '',
    age: '',
    weight: '',
    breed: '',
    meals: [],
    medications: [],
    groomers: [],
    miscellaneous: [],
    photo: null,
  });

  console.log('in adding dog: ', dogData);

  const handleChange = (e) => {
    if (e.target.name.startsWith('meal-')) {
      // Handle meal changes
      const index = parseInt(e.target.name.split('-')[1], 10);
      const field = e.target.name.split('-')[2];
      handleMealChange(index, field, e.target.value);
    } else {
      setDogData({ ...dogData, [e.target.name]: e.target.value });
    }
  };

  const handleMealChange = (index, field, value) => {
    const newMeals = [...dogData.meals];
    newMeals[index][field] = value;
    setDogData({ ...dogData, meals: newMeals });
  };

  const handleAddMeal = () => {
    const newMeal = { type: '', instructions: '', times: dayjs() };
    setDogData({ ...dogData, meals: [...dogData.meals, newMeal] });
  };

  const handleRemoveMeal = (index) => {
    const updatedMeals = dogData.meals.filter((_, i) => i !== index);
    setDogData({ ...dogData, meals: updatedMeals });
  };

  const handleMealTypeChange = (index, value) => {
    const updatedMeals = [...dogData.meals];
    updatedMeals[index].type = value;
    setDogData({ ...dogData, meals: updatedMeals });
  };

  // Handler for adding medication
  const handleAddMedication = () => {
    const addMedications = { name: '', instructions: '', date: dayjs() };
    setDogData({
      ...dogData,
      medications: [...dogData.medications, addMedications],
    });
  };

  // Handler for removing medication
  const handleRemoveMedication = (index) => {
    const removeMedications = dogData.medications.filter((_, i) => i !== index);
    setDogData({ ...dogData, medications: removeMedications });
  };

  // Handler for medication changes
  const handleMedicationChange = (index, field, value) => {
    const updateMedications = [...dogData.medications];
    updateMedications[index][field] = value;
    setDogData({ ...dogData, medications: updateMedications });
  };

  // Handler for groomers
  const handleAddGroomer = () => {
    const newGroomer = {
      name: '',
      time: dayjs(),
      date: dayjs(),
      instructions: '',
    };
    setDogData({ ...dogData, groomers: [...dogData.groomers, newGroomer] });
  };

  const handleGroomerChange = (index, field, value) => {
    const updatedGroomers = [...dogData.groomers];
    updatedGroomers[index][field] = value;
    setDogData({ ...dogData, groomers: updatedGroomers });
  };
  const handleRemoveGroomer = (index) => {
    const removeGroomer = dogData.groomers.filter((_, i) => i !== index);
    setDogData({ ...dogData, groomers: removeGroomer });
  };

  // Handler for adding misc
  const handleAddMisc = () => {
    const newMisc = {
      name: '',
      instructions: '',
      time: dayjs(),
      date: dayjs(),
    };
    setDogData({
      ...dogData,
      miscellaneous: [...dogData.miscellaneous, newMisc],
    });
  };

  // Handler for removing misc
  const handleRemoveMisc = (index) => {
    const newMisc = dogData.miscellaneous.filter((_, i) => i !== index);
    setDogData({ ...dogData, miscellaneous: newMisc });
  };

  // Handler for misc changes
  const handleMiscChange = (index, field, value) => {
    const newMisc = [...dogData.misc];
    newMisc[index][field] = value;
    setDogData({ ...dogData, misc: newMisc });
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = async () => {
        const dataUrl = reader.result;
        setDogData({ ...dogData, photo: dataUrl });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(dogData);
    dogData.meals = JSON.stringify(dogData.meals);
    // Submit logic here
    try {
      const response = await addDog(dogData);

      console.log('added dog is ', response);

      // Check if the request was successful
      if (response.ok) {
        console.log('Dog added successfully!');
        navigate('/homepage');
        // Optionally, reset the form or perform other actions
      } else {
        console.error('Error adding dog:', response.statusText);
        navigate('/homepage');
        // Handle errors or display error messages to the user
      }
    } catch (error) {
      console.error('Error adding dog:', error.message);
    }
  };

  return (
    <div>
      <Sky />
      <HeaderDog />
      <Box
        display='flex'
        justifyContent='center'
        alignItems='center'
        minHeight='80vh' // Full screen height
        // sx={{ backgroundColor: 'pink' }}
      >
        <Box component='form' onSubmit={handleSubmit} noValidate sx={formStyle}>
          <Typography {...DoggoTypographyStyle}>
            Add Your Dog's Information
          </Typography>
          <TextField
            label="Dog's Name"
            name='name'
            type='text'
            value={dogData.name}
            onChange={handleChange}
            required
            fullWidth
            autoFocus
            margin='normal'
            sx={DoggoTextFieldStyle}
          />
          <Box sx={DoggoBoxAgeAndWeightStyle}>
            <TextField
              label='Age'
              name='age'
              type='text'
              value={dogData.age}
              onChange={handleChange}
              required
              sx={DoggoTextFieldStyle}
            />
            <TextField
              label='Weight'
              name='weight'
              type='text'
              value={dogData.weight}
              onChange={handleChange}
              required
              sx={DoggoTextFieldStyle}
              InputProps={{
                endAdornment: (
                  <InputAdornment position='end'>lbs</InputAdornment>
                ),
              }}
            />
          </Box>
          <input
            type='date'
            name='birthday'
            onChange={(e) => {
              setDogData({ ...dogData, birthday: e.target.value });
              console.log('birthday is ', e.target.value);
            }}
          />
          <TextField
            borderRadius='30'
            label='Breed'
            name='breed'
            type='text'
            fullWidth
            margin='normal'
            value={dogData.breed}
            onChange={handleChange}
            sx={DoggoTextFieldStyle}
          />
          {/* handles meals adding/subtracting */}
          <Box sx={DoggoBoxAddingStyle}>
            <Typography variant='h6' sx={{ mr: 2 }}>
              Add Meals
            </Typography>
            <IconButton onClick={handleAddMeal}>
              <AddCircleIcon color='primary' />
            </IconButton>
          </Box>

          {dogData.meals.map((meal, index) => (
            <Box key={index} sx={{ width: '100%', mb: 2 }}>
              <Typography sx={{ mr: 2, marginBottom: 2 }}>{`Meal ${
                index + 1
              }:`}</Typography>
              <Box sx={DoggoBoxDataStyle}>
                <FormControl sx={{ mr: 1, flex: 1 }}>
                  <InputLabel htmlFor={`meal-type-select-${index}`}>
                    Meal Type
                  </InputLabel>
                  <Select
                    focused
                    labelId={`meal-type-label-${index}`}
                    label='Meal Type'
                    id={`meal-type-select-${index}`}
                    value={meal.type}
                    onChange={(e) =>
                      handleMealTypeChange(index, e.target.value)
                    }
                    sx={DoggoTextFieldStyle}
                  >
                    <MenuItem value='Breakfast'>Breakfast</MenuItem>
                    <MenuItem value='Lunch'>Lunch</MenuItem>
                    <MenuItem value='Dinner'>Dinner</MenuItem>
                    <MenuItem value='Snack'>Snack</MenuItem>
                  </Select>
                </FormControl>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <TimePicker
                    label='Time'
                    name={`meal-${index}-time`}
                    value={meal.times}
                    onChange={(newTime) =>
                      handleMealChange(index, 'times', newTime)
                    }
                    sx={DoggoTextFieldStyle}
                    renderInput={(params) => (
                      <TextField {...params} sx={{ flex: 2 }} />
                    )}
                  />
                </LocalizationProvider>
              </Box>
              <TextField
                label='Instructions:'
                fullWidth
                multiline
                name={`meal-${index}-instructions`}
                value={meal.instructions}
                onChange={handleChange}
                margin='normal'
                sx={DoggoTextFieldStyle}
              />

              <IconButton onClick={() => handleRemoveMeal(index)}>
                <RemoveCircleIcon color='primary' />
              </IconButton>
            </Box>
          ))}
          {/* handles meds adding/subtracting */}
          <Box sx={DoggoBoxAddingStyle}>
            <Typography variant='h6' sx={{ mr: 2 }}>
              Add Medication
            </Typography>
            <IconButton onClick={handleAddMedication}>
              <AddCircleIcon color='primary' />
            </IconButton>
          </Box>

          {dogData.medications.map((medications, index) => (
            <Box key={index} sx={{ width: '100%', mb: 2 }}>
              <Typography sx={{ mr: 2, mb: 2 }}>{`Medication ${
                index + 1
              }:`}</Typography>
              <Box sx={DoggoBoxDataStyle}>
                <FormControl sx={{ mr: 1, flex: 1 }}>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <TimePicker
                      label='Time'
                      name={`medications-${index}-time`}
                      value={medications.times}
                      onChange={(newTime) =>
                        handleMedicationChange(index, 'times', newTime)
                      }
                      sx={DoggoTextFieldStyle}
                      renderInput={(params) => (
                        <TextField {...params} sx={{ flex: 2 }} />
                      )}
                    />
                  </LocalizationProvider>
                </FormControl>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    label='Date'
                    name={`medications-${index}-date`}
                    value={medications.times}
                    onChange={(newDate) =>
                      handleMedicationChange(index, 'date', newTime)
                    }
                    sx={DoggoTextFieldStyle}
                    renderInput={(params) => (
                      <TextField {...params} sx={{ flex: 2 }} />
                    )}
                  />
                </LocalizationProvider>
              </Box>
              <TextField
                label='Instructions:'
                fullWidth
                multiline
                name={`medications-${index}-instructions`}
                value={medications.instructions}
                onChange={handleChange}
                margin='normal'
                sx={DoggoTextFieldStyle}
              />
              <IconButton onClick={() => handleRemoveMedication(index)}>
                <RemoveCircleIcon color='primary' />
              </IconButton>
            </Box>
          ))}

          <Box sx={DoggoBoxAddingStyle}>
            <Typography variant='h6' sx={{ mr: 2 }}>
              Add Groomer
            </Typography>
            <IconButton onClick={handleAddGroomer}>
              <AddCircleIcon color='primary' />
            </IconButton>
          </Box>
          {/* handles groomers */}
          {dogData.groomers.map((groomers, index) => (
            <Box key={index} sx={{ width: '100%', mb: 2 }}>
              <Box sx={DoggoBoxDataStyle}>
                <FormControl sx={{ mr: 1, flex: 1 }}>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <TimePicker
                      label='Time'
                      name={`groomers-${index}-time`}
                      value={groomers.times}
                      onChange={(newTime) =>
                        handleGroomerChange(index, 'times', newTime)
                      }
                      sx={DoggoTextFieldStyle}
                      renderInput={(params) => (
                        <TextField {...params} sx={{ flex: 2 }} />
                      )}
                    />
                  </LocalizationProvider>
                </FormControl>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    label='Date'
                    name={`groomers-${index}-time`}
                    value={groomers.times}
                    onChange={(newDate) =>
                      handleGroomerChange(index, 'date', newDate)
                    }
                    sx={DoggoTextFieldStyle}
                    renderInput={(params) => (
                      <TextField {...params} sx={{ flex: 2 }} />
                    )}
                  />
                </LocalizationProvider>
              </Box>
              <TextField
                label='Instructions'
                multiline
                fullWidth
                margin='normal'
                name={`groomers-${index}-instructions`}
                value={groomers.instructions}
                onChange={(e) =>
                  handleGroomerChange(index, 'instructions', e.target.value)
                }
                sx={DoggoTextFieldStyle}
              />
              <IconButton onClick={() => handleRemoveGroomer(index)}>
                <RemoveCircleIcon color='primary' />
              </IconButton>
            </Box>
          ))}

          {/* handles misc adding/subtracting */}
          <Box sx={DoggoBoxAddingStyle}>
            <Typography variant='h6' sx={{ mr: 2 }}>
              Add Miscellaneous
            </Typography>
            <IconButton onClick={handleAddMisc}>
              <AddCircleIcon color='primary' />
            </IconButton>
          </Box>

          {dogData.miscellaneous.map((miscellaneous, index) => (
            <Box key={index} sx={{ width: '100%', mb: 2 }}>
              <Typography sx={{ mr: 2, marginBottom: 2 }}>{`Misc ${
                index + 1
              }:`}</Typography>
              <Box sx={DoggoBoxDataStyle}>
                <FormControl sx={{ mr: 1, flex: 1 }}>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <TimePicker
                      label='Time'
                      name={`misc-${index}-time`}
                      value={miscellaneous.times}
                      onChange={(newTime) =>
                        handleMiscChange(index, 'times', newTime)
                      }
                      sx={DoggoTextFieldStyle}
                      renderInput={(params) => (
                        <TextField {...params} sx={{ flex: 2 }} />
                      )}
                    />
                  </LocalizationProvider>
                </FormControl>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    label='Date'
                    name={`miscellaneous-${index}-date`}
                    value={miscellaneous.times}
                    onChange={(newDate) =>
                      handleMiscChange(index, 'date', newTime)
                    }
                    sx={DoggoTextFieldStyle}
                    renderInput={(params) => (
                      <TextField {...params} sx={{ flex: 2 }} />
                    )}
                  />
                </LocalizationProvider>
              </Box>
              <TextField
                label='Instructions:'
                fullWidth
                multiline
                name={`misc-${index}-instructions`}
                value={miscellaneous.instructions}
                onChange={handleChange}
                margin='normal'
                sx={DoggoTextFieldStyle}
              />
              <IconButton onClick={() => handleRemoveMisc(index)}>
                <RemoveCircleIcon color='primary' />
              </IconButton>
            </Box>
          ))}

          <Input
            type='file'
            name='photo'
            content='Upload File'
            onChange={handlePhotoChange}
            cursor='pointer'
            size='90'
          />

          <Button
            type='submit'
            fullWidth
            variant='contained'
            onClick={handleSubmit}
            sx={{ mt: 3, mb: 2, zIndex: 10 }}
          >
            Submit
          </Button>
        </Box>
      </Box>
      <Footers />
    </div>
  );
};

export default DogInputPage;
