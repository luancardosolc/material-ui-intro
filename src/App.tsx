import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button
          variant="contained"
          color="secondary"
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
            marginTop: 20,
            fontSize: 15,
          }}
          endIcon={<SaveIcon />}
        >
          Icon on the right
        </Button>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
