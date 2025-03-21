import React from 'react';
import { Box, Grid, TextField, Button } from '@mui/material';
import Sidebar from '../components/Sidebar';
import TopBar from '../components/TopBar';

const Settings = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, backgroundColor: '#f4f6f8', padding: 2 }}>
        <TopBar />
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField fullWidth label="App Name" variant="outlined" margin="normal" />
            <TextField fullWidth label="API Key" variant="outlined" margin="normal" />
            <Button variant="contained" color="primary">Save Settings</Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Settings;
