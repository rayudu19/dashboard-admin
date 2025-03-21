import React, { useEffect, useState } from 'react';
import { Box, Grid } from '@mui/material';
import Sidebar from '../components/Sidebar';
import TopBar from '../components/TopBar';
import ChartWidget from '../components/ChartWidget';
import ProgressWidget from '../components/ProgressWidget';
import DataTable from '../components/DataTable';
import { fetchDashboardData } from '../utils/api';

const Dashboard = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetchDashboardData();
        setData(response);
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
      }
    };

    getData();
  }, []);

  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, backgroundColor: '#f4f6f8', padding: 2 }}>
        <TopBar />
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <ChartWidget data={data?.chartData} />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <ProgressWidget progress={data?.progress} />
          </Grid>
          <Grid item xs={12}>
            <DataTable data={data?.users} />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Dashboard;
