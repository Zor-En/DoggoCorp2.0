import React, { useState } from 'react';
import {
    Box,
    Button,
    Grid,
    Stack,
    TextField,
    Typography
} from '@mui/material';

import Menu from './components/Menu';


const MainCard = ({ sx }) => (
    <Box
        sx={{
            borderRadius: 4,
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
            overflow: 'hidden',
            ...sx
        }}
    >
        {/* {children} */}
    </Box>
);

const HomePage = () => {
    const [value, setValue] = useState('');
  
    return (
      <Grid container rowSpacing={4.5} columnSpacing={2.75}>
        <Grid item xs={12} sx={{ mb: -2.25 }}>
          <Menu />
        </Grid>
  
        <Grid item xs={12} md={7} lg={8}>
          <Grid container alignItems="center" justifyContent="space-between">
            <Grid item>
              {/* Content for the first part of the header */}
            </Grid>
            <Grid item>
              <Stack direction="row" alignItems="center" spacing={0}>
                <Button
                  size="small"
                  color={'secondary'}
                  variant={'text'}
                >
                  Button 1
                </Button>
                <Button
                  size="small"
                  color={'secondary'}
                  variant={'text'}
                >
                  Button 2
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </Grid>
  
        <Grid item xs={12} md={5} lg={4}>
        </Grid>
  
        <Grid item xs={12} md={7} lg={8}>
          <Grid container alignItems="center" justifyContent="space-between">
            <Grid item>
              <Typography variant="h5">Test 2</Typography>
            </Grid>
            <Grid item>
              <TextField
                id="standard-select-currency"
                size="small"
                select
                value={value}
                onChange={(e) => setValue(e.target.value)}
                sx={{ '& .MuiInputBase-input': { py: 0.5, fontSize: '0.875rem' } }}
              />
            </Grid>
          </Grid>
          <MainCard sx={{ mt: 1.75 }}>
            <Stack spacing={1.5} sx={{ mb: -12 }}>
              <Typography variant="h6" color="secondary">
                Test 3
              </Typography>
              <Typography variant="h4">Test 4</Typography>
            </Stack>
          </MainCard>
        </Grid>
      </Grid>
    );
  };

export default HomePage;