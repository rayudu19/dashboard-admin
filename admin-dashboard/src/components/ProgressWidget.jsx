import React from 'react';
import { LinearProgress,  Typography } from '@mui/material';

const ProgressWidget = () => {
  return (
    <div style={{ backgroundColor: 'white', padding: '16px', borderRadius: '8px' }}>
      <Typography variant="h6">Syncing Data</Typography>
      <LinearProgress variant="determinate" value={60} />
    </div>
  );
};

export default ProgressWidget;
