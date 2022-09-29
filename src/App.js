import React,{useState} from 'react';
import './App.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

function App() {
  const user = sessionStorage.getItem('me');
  
  return (
    <div className="App">
      <header>
        
      </header>
      <section>
        {user ? <ChatRoom /> : <Login />}
      </section>
    </div>
  );
}

function Login() {

  const login = () =>
  {
    sessionStorage.setItem('me', userName);
    window.location.reload();

  }
  const [userName, setUserName] = useState('');
return (
  <header className='App-header'>
    <h2 className='name' >Enter Username</h2>
        <TextField
          onChange={(name) =>setUserName(name.target.value) }
          className='input'
          required
          value={userName}
          id="outlined-required"
          label="Name"

        />
        <br></br>
        <Button onClick={login} variant="contained" >Go</Button>
  </header>

)
}

function ChatRoom() {
  return (
    <header>
      <ChatRoomHead />
    </header>
  )
}

function ChatRoomHead() {
  return (
    <><div>Chats</div><Logout /></>
  )
}

function Logout() {
 const logout = () =>{
  sessionStorage.removeItem('me');
  window.location.reload();
 }
  return (
    <Button onClick={logout} variant="contained" >Logout</Button>

  )
}

export default App;
