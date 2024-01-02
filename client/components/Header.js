import React from 'react';
import Typography from '@mui/material/Typography';
import { Toolbar } from '@mui/material';
import CustomizedBreadcrumbs from './Breadcrumbs';
import '../stylesheets/App.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const Header = () => {
  const headerFont = createTheme({  //this shit is not working
    typography: {
      fontFamily: [
        'Pixelify Sans',
        'sans-serif',
      ].join(','),
    },
  });

  return (
    <div>
      <ThemeProvider theme={headerFont}>
        <Typography
          gutterBottom
          variant='h2'
          textAlign='center'
          // fontFamily={'Pixelify Sans'}
          sx={{
            color: 'pink',
            //   textShadow:
            //     "-1px -1px white, 1px 1px hotpink, 3px 3px hotpink, 4px 4px 4px #9e9e9e",
            // }}
            textShadow:
              '-1px -1px white, 1px 1px hotpink, 2px 2px hotpink, 3px 3px 3px #9e9e9e',
          }}
        >
          O hai frens! Welcome to My Homepage
        </Typography>
      </ThemeProvider>

      <CustomizedBreadcrumbs />
    </div>
  );
};

export default Header;
