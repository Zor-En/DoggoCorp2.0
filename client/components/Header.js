import React from 'react';
import Typography from '@mui/material/Typography';
import { Box, Button, Toolbar } from '@mui/material';
import CustomizedBreadcrumbs from './Breadcrumbs';
import '../stylesheets/App.css';
import { ThemeProvider } from '@mui/material/styles';
import { HeaderStyle, typographyStyle } from '../stylesheets/HeaderStyle';

const Header = () => {
  return (
    <div>
      <ThemeProvider theme={HeaderStyle.theme}>
        <Box minHeight='80vh' sx={HeaderStyle.style}>
          <Typography
            gutterBottom
            variant='h2'
            textAlign='center'
            sx={typographyStyle.style}
          >
            O hai frens!
            <br></br>
            Welcome to Doggo Corp
          </Typography>
          <CustomizedBreadcrumbs />
        </Box>
      </ThemeProvider>
    </div>
  );
};

export default Header;
