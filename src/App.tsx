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
          I am a Button!
        </Button>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
