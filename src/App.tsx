import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, ButtonGroup } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';

function App() {
  return (
    <div className="App">
      <header className="App-header">
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
  );
}

export default App;
