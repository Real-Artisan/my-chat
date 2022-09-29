import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2 className='name' >Enter Username</h2>
        <TextField
          className='input'
          required
          id="outlined-required"
          label="Name"
        />
        <br></br>
        <Button  variant="contained" >Go</Button>
      </header>
    </div>
  );
}

export default App;
