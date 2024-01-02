import React, { useState } from "react";
import Card from "@mui/material/Card";
import Switch from "@mui/material/Switch";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SnackbarAlert from "./components/SnackbarAlert";
import LinearProgress from '@mui/material/LinearProgress';
import { useNavigate } from "react-router";
import Sky from "./components/Sky";
import HeaderDog from "./components/HeaderDog";
import Footers from "./components/Footer";

export default function SignUp() {
  const [rememberMe, setRememberMe] = useState(false);
  const [watcher, setWatcher] = useState(false)
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");
  const [loading, setLoading] = useState(false);

  const handleSetRememberMe = () => setRememberMe(!rememberMe);
  const handleSetWatcher = () => setWatcher(!watcher);

  const navigate = useNavigate();

  const handleSignInClick = () => {
    navigate('/signin');
  };


  const handleSnackbarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbarOpen(false);
  };

  const handleSignIn = async () => {
    try {
    // initiate loading bar
    setLoading(true); 

    // fake loading time
    await new Promise((resolve) => setTimeout(resolve, 1000));

    if (!response.ok){
      throw new Error('Login failed!');
    }
    // if successful
    setSnackbarMessage("Login successful!");
    setSnackbarSeverity("success");
    setSnackbarOpen(true);
    navigate('/homepage');
    
    }catch(error){
    //if error
    setSnackbarMessage("Login failed!");
    setSnackbarSeverity("error");
    setSnackbarOpen(true);
    }
    finally {
      // turn off loading bar
      setLoading(false); 
    }
  };

  return (
    <>
      <Sky />
      <Footers />

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
        }}
      >
        <Card sx={{ maxWidth: 400, width: "100%", p: 3 }}>
          <Box textAlign="center" mb={2}>
            <Typography variant="h4" fontWeight="medium">
              Sign Up
            </Typography>
          </Box>

          <Box component="form">
            <TextField
              label="Username"
              type="username"
              fullWidth
              margin="normal"
            />
            <TextField
              label="Password"
              type="password"
              fullWidth
              margin="normal"
            />
            <Box display="flex" alignItems="center" mt={2}>
              <Switch checked={rememberMe} onChange={handleSetRememberMe} />
              <Typography variant="body2" color="textSecondary">
                &nbsp;&nbsp;Remember me
              </Typography>
              <Switch
                checked={watcher}
                onChange={handleSetWatcher}
                sx={{ marginLeft: "25px" }}
              />
              <Typography variant="body2" color="textSecondary">
                &nbsp;&nbsp;Sign In as Watcher
              </Typography>
            </Box>
            <Button
              variant="text"
              color="primary"
              fullWidth
              mt={2}
              onClick={handleSignIn}
              disabled={loading}
            >
              Sign In
            </Button>
            {loading && (
              <LinearProgress color="primary" sx={{ marginTop: 2 }} />
            )}
            <SnackbarAlert
              open={snackbarOpen}
              onClose={handleSnackbarClose}
              message={snackbarMessage}
              severity={snackbarSeverity}
            />
          </Box>

          <Box mt={2} textAlign="center">
            <Typography variant="body2" color="textSecondary">
              Have an account?{" "}
              <Link
                variant="body2"
                style={{ cursor: "pointer" }}
                onClick={handleSignInClick}
              >
                Sign In
              </Link>
            </Typography>
          </Box>
        </Card>
      </Box>
    </>
  );
}
