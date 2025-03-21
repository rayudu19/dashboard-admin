import React, { useState, useEffect } from 'react';
import { Box,  Grid } from '@mui/material';
import Sidebar from '../components/Sidebar';
import TopBar from '../components/TopBar';
import UserManagement from '../components/UserManagement';
import DataTable from '../components/DataTable';
import { fetchUsers } from '../utils/api';

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await fetchUsers();
        setUsers(response);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    getUsers();
  }, []);

  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, backgroundColor: '#f4f6f8', padding: 2 }}>
        <TopBar />
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <UserManagement />
          </Grid>
          <Grid item xs={12}>
            <DataTable data={users} />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Users;
