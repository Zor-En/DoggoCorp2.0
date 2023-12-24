import React, { useState } from "react";
import Card from "@mui/material/Card";
import Switch from "@mui/material/Switch";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function SignUp() {
  const [rememberMe, setRememberMe] = useState(false);
  const [watcher, setWatcher] = useState(false)

  const handleSetRememberMe = () => setRememberMe(!rememberMe);
  const handleSetWatcher = () => setWatcher(!watcher);

  return (
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
          <Box display="flex" alignItems="center"  mt={2}>
            <Switch checked={rememberMe} onChange={handleSetRememberMe} />
            <Typography variant="body2" color="textSecondary">
              &nbsp;&nbsp;Remember me
            </Typography>
            <Switch checked={watcher} onChange={handleSetWatcher} sx={{marginLeft: '25px'}}/>
            <Typography variant="body2" color="textSecondary">
              &nbsp;&nbsp;Sign In as Watcher
            </Typography>
          </Box>
          <Button variant="text" color="primary" fullWidth mt={2}>
            Sign In
          </Button>
        </Box>

        <Box mt={2} textAlign="center">
          <Typography variant="body2" color="textSecondary">
            Have an account?{" "}
            <Link to="/authentication/sign-up/cover" variant="body2">
              Sign In
            </Link>
          </Typography>
        </Box>
      </Card>
    </Box>
  );
}
