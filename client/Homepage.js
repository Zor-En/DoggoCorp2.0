import React, { useState } from "react";
import { Box, Button, Grid, Stack, TextField, Typography } from "@mui/material";
import MainCard from "./components/MainCard";
import Menu from "./components/Menu";

const HomePage = () => {
  const [value, setValue] = useState("");

  return (
    <Box sx={{ minWidth: "100vw" }}>
      {/* Header */}
      <Grid
        container
        item
        xs={12}
        sx={{
          position: "fixed",
          top: 0,
          width: "100%",
          height: { xs: "5%", md: "5%" },
        }}
      >
        <Grid
          container
          alignItems="center"
          justifyContent="space-between"
          marginTop={-1}
        >
          <Grid item>
            <Menu />
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
      <Grid
        container
        item
        xs={12}
        justifyContent="center"
        marginTop="3rem"
        sx={{ minHeight: "calc(100vh - 3.5rem)" }}
      >
        {/* calc 100vh - the header */}
        <Grid item xs={10} md={8} lg={7}>
          <Grid
            container
            alignItems="flex-start"
            justifyContent="space-between"
          ></Grid>
          {/* MainCard */}
          <MainCard sx={{ mt: 1.75 }}>
            <Stack spacing={1.5} sx={{ mb: -12 }}></Stack>
          </MainCard>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HomePage;
