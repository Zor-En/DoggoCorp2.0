import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import Switch from "@mui/material/Switch";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SnackbarAlert from "./components/SnackbarAlert";
import LinearProgress from "@mui/material/LinearProgress";
import { useNavigate } from "react-router";
import { useGoogleLogin, GoogleLogin } from "react-google-login";
import Sky from "./components/Sky";
import HeaderDog from "./components/HeaderDog";
import Footers from "./components/Footer";


export default function SignIn() {
  const [rememberMe, setRememberMe] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");
  const [loading, setLoading] = useState(false);

  const handleSetRememberMe = () => setRememberMe(!rememberMe);

  const navigate = useNavigate();

  const handleSnackbarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbarOpen(false);
  };

  const handleSignInClick = () => {
    navigate("/signup");
  };

  const handleSignIn = async () => {
    try {
      // initiate loading bar
      setLoading(true);

      // fake loading time
      await new Promise((resolve) => setTimeout(resolve, 1000));

      if (!response.ok) {
        throw new Error("Login failed!");
      }
      // if successful
      setSnackbarMessage("Login successful!");
      setSnackbarSeverity("success");
      setSnackbarOpen(true);
      navigate("/homepage");
    } catch (error) {
      //if error
      setSnackbarMessage("Login failed!");
      setSnackbarSeverity("error");
      setSnackbarOpen(true);
    } finally {
      // turn off loading bar
      setLoading(false);
    }
  };

  const handleLoginSuccess = () => {
    console.log("login success!");
  };

  const handleLoginFailure = (response) => {
    console.log("login failure!");
    console.log("\t🥩 response:", response);
    if (response.error) {
      console.error("error code:", response.error);
      if (response.details) {
        console.error("error details:", response.details);
      }
    }
  };

  // const google = window.google;
  // const handleCallbackResponse = (response) => {
  //   console.log("Encoded JWT ID token:" + response.credential);
  // };
  // useEffect(() => {
  //   google.accounts.id.initialize({
  //     client_id:
  //       "654380610871-b70h1a8224333s0jgls1fvhsrmq3r0p4.apps.googleusercontent.com",
  //     callback: handleCallbackResponse,
  //   });

  //   google.accounts.id.renderButton(document.getElementById("sign-in-div"), {
  //     theme: "outline",
  //     size: "large",
  //   });
  // }, []);

  return (
    <div className="login">
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
              Sign in
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
              Don't have an account?{" "}
              <Link
                style={{ cursor: "pointer" }}
                onClick={handleSignInClick}
                variant="body2"
              >
                Sign up
              </Link>
            </Typography>
          </Box>
        </Card>
        <div id="sign-in-div"></div>
        {/* <GoogleLogin
        clientId="654380610871-b70h1a8224333s0jgls1fvhsrmq3r0p4.apps.googleusercontent.com"
        buttonText="Login with Google"
        onSuccess={handleLoginSuccess}
        onFailure={handleLoginFailure}
        cookiePolicy={"single_host_origin"}
        data-ux_mode="redirect"
        data-login_uri="http://localhost:3000/auth/google/callback"
      /> */}
      </Box>
    </div>
  );
}
