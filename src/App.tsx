import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, ButtonGroup, Checkbox, Container, FormControlLabel, Grid, Paper, TextField, Typography } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import DeleteIcon from '@mui/icons-material/Delete';
import { makeStyles } from '@mui/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { green, orange } from '@mui/material/colors';
import 'fontsource-roboto';

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #333, #999)',
    border: '0 !important',
    borderRadius: '15px !important',
    color: 'white !important',
    padding: '15px 30px !important',
    marginBottom: '10px !important',
  },
});

const theme = createTheme({
  typography: {
    h2: {
      fontSize: 18,
    }
  },
  palette: {
    primary: {
      main: green[900]
    },
    secondary: {
      main: orange[900]
    }
  }
});

function App() {
  const [checkbox, setCheckbox] = useState(true);
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheckbox(event.target.checked);
  };
  
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Container
        maxWidth="xs"
      >
        <div className="App">
          <header className="App-header">
            <Typography
              variant="h2"
              component="div"
            >
              Welcome
            </Typography>
            <Button className={classes.root} >buttonStyled</Button>

            <Grid
              container 
              spacing={2}
              justifyContent="center"
            >
              <Grid item xs={12} md={3}>
                <Paper
                  style={{
                    height: 75,
                    width: '100%',
                  }}
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <Paper
                  style={{
                    height: 75,
                    width: '100%',
                  }}
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <Paper
                  style={{
                    height: 75,
                    width: '100%',
                  }}
                />
              </Grid>
            </Grid>

            <TextField
              variant="outlined"
              color="secondary"
              type="email"
              label="Email input"
              placeholder="test@test.com"
            />
            <FormControlLabel
              label="Check-me darling"
              control={
                <Checkbox
                  checked={checkbox} 
                  onChange={handleCheckboxChange}
                  color='error'
                  checkedIcon={<SaveIcon />}
                  icon={<DeleteIcon />}
                />
              }
            />
            <ButtonGroup>
              <Button
                variant="contained"
                color="primary"
                href="#"
                size="large"
                style={{
                  fontSize: 15,
                }}
                startIcon={<SaveIcon />}
              >
                Icon on the left
              </Button>
              <Button
                variant="contained"
                color="secondary"
                href="#"
                size="large"
                style={{
                  fontSize: 15,
                }}
                endIcon={<SaveIcon />}
              >
                Icon on the right
              </Button>
            </ButtonGroup>
            <img src={logo} className="App-logo" alt="logo" />
          </header>
        </div>
      </Container>
    </ThemeProvider>
  );
}

export default App;
