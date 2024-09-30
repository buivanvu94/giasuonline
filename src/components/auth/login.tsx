// app/components/RegisterForm.tsx
'use client';

import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Card, CardContent, FormControl, InputLabel, OutlinedInput, IconButton, InputAdornment, Divider, Avatar, Alert } from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { LoadingButton } from '@mui/lab';


export default function Login() {
  const router = useRouter();
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };
  const [loading, setLoading] = useState(false);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [isErrorEmail, setIsErrorEmail] = useState(false);
  const [isErrorPassword, setIsErrorPassword] = useState(false);

  const [isLoginFail, setIsLoginFail] = useState(false);

  const [errorEmail, setErrorEmail] = useState<string>("");
  const [errorPassword, setErrorPassword] = useState<string>("");
  const [errorLoginFail, setErrorLoginFail] = useState<string>("");

  const handleSubmitForm = async () => {
    setLoading(false)
    setIsErrorEmail(false);
    setIsErrorPassword(false);
    setErrorEmail("");
    setErrorPassword("");
    if (!username) {
      setIsErrorEmail(true);
      setErrorEmail("Vui lòng nhập Email đăng nhập!");
      return;
    }
    if (!password) {
      setIsErrorPassword(true);
      setErrorPassword("Vui lòng nhập mật khẩu!");
      return;
    }
    setLoading(true)
    const res = await signIn("credentials", {
      username: username,
      password: password,
      redirect: false
    });

    if (!res?.error) {
      router.push("/")
    } else {
      setLoading(false)
      setIsLoginFail(true);
      setErrorLoginFail(res?.error);
    }

  }
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
      <Card sx={{ width: 500, boxShadow: 6, borderRadius: 0, p: 2 }}>
        <CardContent >
          <Box sx={{
            textAlign: 'center',
          }}><LockIcon fontSize='large' /></Box>
          <Typography variant="h4" sx={{ textAlign: 'center', mb: 3, color: '#1976d2' }}>

            Sign in
          </Typography>
          <form>
            <TextField
              onChange={(event) => setUsername(event.target.value)}
              fullWidth
              label="Email Address"
              type="email"
              variant="outlined"
              margin="normal"
              required
              error={isErrorEmail}
              helperText={errorEmail}
              sx={{
                mb: 2,
                '& .MuiOutlinedInput-root': {
                  borderRadius: '12px',
                },
              }}

            />

            <TextField
              onChange={(event) => setPassword(event.target.value)}
              onKeyDown={(e) => {

                if (e.key == "Enter") {
                  handleSubmitForm()
                }
              }}
              fullWidth
              label="Password"
              type={showPassword ? 'text' : 'password'}
              variant="outlined"
              margin="normal"
              required
              error={isErrorPassword}
              helperText={errorPassword}
              sx={{
                mb: 2,
                '& .MuiOutlinedInput-root': {
                  borderRadius: '12px',
                },
              }}
              InputProps={{
                endAdornment:
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      onMouseUp={handleMouseUpPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
              }}

            />
            {/* <Button
              onClick={() => handleSubmitForm()}
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
              Login
            </Button> */}
            <LoadingButton

              color="secondary"
              onClick={() => handleSubmitForm()}
              loading={loading}
              loadingPosition="end"
              variant="contained"
              sx={{
                mt: 2,
                mb: 2,
                borderRadius: '12px',
                p: 1.5,
                fontSize: '1rem',
                fontWeight: 'bold',
                backgroundColor: 'green',
                width: '100%'
              }}
            >
              Login
            </LoadingButton>

          </form>

          {
            isLoginFail ?
              <Alert severity="error" color="error">
                {errorLoginFail}
              </Alert>
              :
              null
          }


          <Divider>Or Using</Divider>
          <Box sx={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            mt: "20px",
            cursor: "pointer"
          }}>
            <Avatar onClick={() => {
              signIn("github")
            }}>
              <GitHubIcon sx={{
                backgroundColor: "orange",
                padding: "10px",
                borderRadius: "100px",
                color: "white",
                fontSize: "30px",
                cursor: "pointer"
              }}

              />
            </Avatar>
            <Avatar>
              <GoogleIcon sx={{
                backgroundColor: "orange",
                padding: "10px",
                borderRadius: "100px",
                color: "white",
                fontSize: "30px"
              }} />
            </Avatar>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}
