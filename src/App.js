import React,{useState} from 'react';
import './App.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


function App() {
  const user = sessionStorage.getItem('me');

    // localStorage.setItem('messages', JSON.stringify([
    // {user: sessionStorage.getItem('me'), message: 'hi', createdAt: Date.now()},
    // {user: sessionStorage.getItem('me'), message: 'hello', createdAt: Date.now()}]));
  
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
        <Button onClick={login} disabled={!userName} variant="contained" >Go</Button>
  </header>

)
}

function ChatRoom() {

if(JSON.parse(localStorage.getItem('messages')))
{
  var messages = JSON.parse(localStorage.getItem('messages'));
}
else {
  // const m = 'no messages';
  // console.log(m)
}


const [formValue, setFormValue] = useState('');





const sendMessage = async (event) => {
  event.preventDefault();
  const message = {
    user: sessionStorage.getItem('me'),
    message: formValue,
    profilePic: '',
    createdAt: Date.now()
  };


if(messages)
{

const i = messages
const j = [...i, message];

localStorage.setItem('messages', JSON.stringify(j));

}
else {
localStorage.setItem('messages', JSON.stringify([message]));
}
setFormValue('');


  
}
 
  return (
  <div className='App'>
    <header>
      <ChatRoomHead />
    </header>
    <form onSubmit={sendMessage}>
    <input value={formValue} onChange={(message) => setFormValue(message.target.value)} placeholder="say something nice" />

    <button type="submit" disabled={!formValue}>🕊️</button>
    </form>
  </div>
    
  )
}

function ChatRoomHead() {
  return (
    <>
    <div>Chats</div>
    <Logout />
    
    </>
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
