import React, { useState, useEffect } from 'react';
import { Box, Grid, Button } from '@mui/material';
import Sidebar from '../components/Sidebar';
import TopBar from '../components/TopBar';
import { fetchReports } from '../utils/api';

const Reports = () => {
  const [ setReports] = useState([]);

  useEffect(() => {
    const getReports = async () => {
      try {
        const response = await fetchReports();
        setReports(response);
      } catch (error) {
        console.error('Error fetching reports:', error);
      }
    };

    getReports();
  }, );

  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, backgroundColor: '#f4f6f8', padding: 2 }}>
        <TopBar />
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Button variant="contained" color="primary">Export Report</Button>
          </Grid>
          <Grid item xs={12}>
            <div> {/* Render reports here */} </div>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Reports;
