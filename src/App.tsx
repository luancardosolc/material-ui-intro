import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, ButtonGroup, Checkbox, FormControlLabel } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import DeleteIcon from '@mui/icons-material/Delete';

function App() {
  const [checkbox, setCheckbox] = useState(true);
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheckbox(event.target.checked);
  };

  return (
    <div className="App">
      <header className="App-header">
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
  );
}

export default App;
