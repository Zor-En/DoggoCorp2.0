import React, { useState } from "react";
import Card from "@mui/material/Card";
import Switch from "@mui/material/Switch";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import TableFooter from '@mui/material/TableFooter';

export default function SignIn() {
  const [rememberMe, setRememberMe] = useState(false);

  const handleSetRememberMe = () => setRememberMe(!rememberMe);

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
            Sign in
          </Typography>
        </Box>

        <Box component="form">
          <TextField label="Username" type="username" fullWidth margin="normal" />
          <TextField label="Password" type="password" fullWidth margin="normal" />
          <Box display="flex" alignItems="center" mt={2}>
            <Switch checked={rememberMe} onChange={handleSetRememberMe} />
            <Typography variant="body2" color="textSecondary">
              &nbsp;&nbsp;Remember me
            </Typography>
          </Box>
          <Button variant="text" color="primary" fullWidth mt={2}>
            Sign In
          </Button>
        </Box>

        <Box mt={2} textAlign="center">
          <Typography variant="body2" color="textSecondary">
            Don't have an account?{" "}
            <Link to="/authentication/sign-up/cover" variant="body2">
              Sign up
            </Link>
          </Typography>
        </Box>
      </Card>
    </Box>
  );
}