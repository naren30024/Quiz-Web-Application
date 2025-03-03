import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate, navigate } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from './AuthContext';
import { useContext } from 'react';

function Copyright(props) {
  

  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="#">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function Login() {
  let navigate = useNavigate();
  const {login} = useContext(AuthContext);
  const[user,setUser]=React.useState({email:'',password:''})
  const handleChange=(e)=>{
    setUser({...user,[e.currentTarget.name]: e.currentTarget.value});
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const senddata={
      email: data.get('email'),
      password: data.get('password'),
    };
    
    if (senddata["email"] === "" || senddata["password"] === ""){
      alert("please enter Credentails");
    }
    else{
      const senddata1={
        "email":senddata["email"],
        "password":senddata["password"]
        }
        console.log(senddata)
        axios.post('http://localhost/php-react/register-login-php/login.php',senddata1).then((result)=>{
          console.log(result.data)
          localStorage.setItem("datas",JSON.stringify(result.data));
          let hell=JSON.parse(localStorage.getItem("datas"));
          console.log(hell[2]);
          
          if (result.status === 200){
            navigate('/home',{state:result.data});
            login(result.data)
            localStorage.setItem('email',JSON.stringify(result.data.email));
            localStorage.setItem('username',JSON.stringify((result.data.firstName+' '+result.data.lastName)));
            console.log(JSON.parse(localStorage.getItem("email")));
            console.log(JSON.parse(localStorage.getItem("usename")));
            
            
          }
          else{
            
            alert("invalid user");
            
            
            
            
          }
    
        })

    }
    
  };

  return (
    
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <Box method='POST' component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={handleChange}
                  value={user.email}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  onChange={handleChange}
                  value={user.password}
                />
              </Grid>
              <Grid item xs={12}>
                
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              
                Login
              
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/signup" variant="body2">
                  Don't have an account? Sign up
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}