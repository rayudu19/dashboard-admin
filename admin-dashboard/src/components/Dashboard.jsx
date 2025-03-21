import React from 'react';
import Sidebar from '../components/Sidebar';
import TopBar from './components/TopBar';
import { Box, Grid } from '@mui/material';
import ChartWidget from '../components/ChartWidget';
import ProgressWidget from '../components/ProgressWidget';
import DataTable from '../components/DataTable';

const Dashboard = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, backgroundColor: '#f4f6f8', padding: 2 }}>
        <TopBar />
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <ChartWidget />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <ProgressWidget />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <DataTable />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Dashboard;
