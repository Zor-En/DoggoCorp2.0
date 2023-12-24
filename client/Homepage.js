import React, { useState } from "react";
import { Box, Button, Grid, Stack, TextField, Typography } from "@mui/material";

import Menu from "./components/Menu";

const MainCard = ({ sx }) => (
  <Box
    sx={{
      borderRadius: 4,
      boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
      overflow: "hidden",
      ...sx,
    }}
  >
    {/* {children} */}
  </Box>
);

const HomePage = () => {
  const [value, setValue] = useState("");

  return (
    <Box>
      {/* Header */}
      <Grid container item xs={12} sx={{ backgroundColor: 'black', position: 'fixed', top: 0, width: '100%', height: { xs: '5%', md: '5%' } }}>
        <Grid container alignItems="center" justifyContent="space-between" marginTop={-1}>
          <Grid item>
            <Menu/>
          </Grid>
          <Grid item>
            <Button size="small" color="secondary" variant="text">
              Button 1
            </Button>
            <Button size="small" color="secondary" variant="text">
              Button 2
            </Button>
          </Grid>
        </Grid>
      </Grid>

      {/* Centered Container */}
      <Grid container item xs={12} justifyContent="center" marginTop="3rem" sx={{ minHeight: 'calc(100vh - 3rem)' }}>{/* calc 100vh - the header */}
        <Grid item xs={10} md={8} lg={7}>
          {/* Your content goes here */}
          <Grid container alignItems="flex-start" justifyContent="space-between">
            <Grid item>
              <Typography variant="h5">Test 2</Typography>
            </Grid>
          </Grid>
          {/* MainCard */}
          <MainCard sx={{ mt: 1.75 }}>
            <Stack spacing={1.5} sx={{ mb: -12 }}>
            </Stack>
          </MainCard>
        </Grid>
      </Grid>
    </Box>
  );
};


export default HomePage;
