import React from 'react';
import { TextField, Button, Box } from '@mui/material';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email format').required('Email is required'),
});

const UserManagement = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <TextField label="Name" {...register('name')} error={!!errors.name} helperText={errors.name?.message} />
      <TextField label="Email" {...register('email')} error={!!errors.email} helperText={errors.email?.message} />
      <Button type="submit" variant="contained" color="primary">
        Add User
      </Button>
    </Box>
  );
};

export default UserManagement;
