import React from 'react';
import RegistrationForm from './RegistrationForm';
import { Box } from '@mui/system';
import { Grid } from '@mui/material';
function RegistrationPage() {
    return (
      
        <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: '100vh'}}
    >
         <RegistrationForm />
      </Grid> 
    );
  }
  
  export default RegistrationPage;