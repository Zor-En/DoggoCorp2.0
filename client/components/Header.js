import React from 'react';
import Typography from '@mui/material/Typography';
import CustomizedBreadcrumbs from './Breadcrumbs';


const Header = () => {

    
  return (
    <div>
      <Typography variant="h2" gutterBottom>
        Welcome to My Homepage
      </Typography>
      <CustomizedBreadcrumbs />
    </div>
  );
};

export default Header;