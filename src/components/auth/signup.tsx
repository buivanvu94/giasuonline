// app/components/RegisterForm.tsx
'use client';

import React from 'react';
import { Box, TextField, Button, Typography, Card, CardContent } from '@mui/material';

export default function Signup() {
  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'linear-gradient(135deg, #ece9e6 0%, #ffffff 100%)',
      }}
    >
      <Card sx={{ width: 400, boxShadow: 6, borderRadius: 4, p: 2 }}>
        <CardContent>
          <Typography variant="h4" sx={{ textAlign: 'center', mb: 3, color: '#1976d2' }}>
            Sign Up
          </Typography>
          <form>
            <TextField
              fullWidth
              label="Full Name"
              variant="outlined"
              margin="normal"
              required
              sx={{
                mb: 2,
                '& .MuiOutlinedInput-root': {
                  borderRadius: '12px',
                },
              }}
            />
            <TextField
              fullWidth
              label="Email Address"
              type="email"
              variant="outlined"
              margin="normal"
              required
              sx={{
                mb: 2,
                '& .MuiOutlinedInput-root': {
                  borderRadius: '12px',
                },
              }}
            />
            <TextField
              fullWidth
              label="Password"
              type="password"
              variant="outlined"
              margin="normal"
              required
              sx={{
                mb: 2,
                '& .MuiOutlinedInput-root': {
                  borderRadius: '12px',
                },
              }}
            />
            <TextField
              fullWidth
              label="Confirm Password"
              type="password"
              variant="outlined"
              margin="normal"
              required
              sx={{
                mb: 2,
                '& .MuiOutlinedInput-root': {
                  borderRadius: '12px',
                },
              }}
            />
            <Button
              fullWidth
              variant="contained"
              color="primary"
              sx={{
                mt: 2,
                mb: 2,
                borderRadius: '12px',
                p: 1.5,
                fontSize: '1rem',
                fontWeight: 'bold',
              }}
            >
              Register
            </Button>
            <Typography variant="body2" sx={{ textAlign: 'center', mt: 2 }}>
              Already have an account?{' '}
              <Button href="/auth/signin" variant="text" sx={{ fontWeight: 'bold' }}>
                Sign In
              </Button>
            </Typography>
          </form>
        </CardContent>
      </Card>
    </Box>
  );
}
