import React,{useEffect, useRef, useState, useCallback} from 'react';
import './App.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Avatar from '@mui/material/Avatar';

function App() {
  const user = sessionStorage.getItem('me');
  window.addEventListener('storage', (() => {
    window.location.reload();
  }))

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
const space = useRef();
// space.current.scrollIntoView({ behaviour: 'smooth'});

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
const j = [message, ...i ];

localStorage.setItem('messages', JSON.stringify(j));

}
else {
localStorage.setItem('messages', JSON.stringify([message]));

}
// eslint-disable-next-line no-undef

space.current.scrollIntoView({ behavior: 'smooth'});


setFormValue('');


  
}
 
  return (
  <div className='App'>


    <header>
      <ChatRoomHead />
    </header>

    <main className='mt-100'>
      {messages && messages.map( (msg, i) => <EachMessage key={i} message={msg} />)}
    </main>
    <span className='empty-space' ref={space}></span>
    <form onSubmit={sendMessage}>

    <textarea value={formValue} onChange={(message) => setFormValue(message.target.value)} placeholder="Type Message" />
    
    <button className='sendMessage' type="submit" disabled={!formValue}>Send</button>

    </form>
  </div>
    
  )
}

function ChatRoomHead() {
  return (
    <div className='nav-bar'>
    <div className='title'>Chats</div>
    <Logout />
    
    </div>
  )
}

function EachMessage(props) {
  const { message, user, } = props.message;

  const messageClass = user === sessionStorage.getItem('me') ? 'sent' : 'received';

  return (
    <div>
    <div className={`message ${messageClass}`} >
    <Avatar {...stringAvatar(user)} />
      <p>{message}</p>
    </div>
    </div>
  )
}

function stringToColor(string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#';

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

function stringAvatar(name) {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name.split(' ')[0][0]}`,
  };
}

function Logout() {
 const logout = () =>{
  sessionStorage.removeItem('me');
  window.location.reload();
 }
  return (
    <button className='logout' onClick={logout} variant="contained" >Logout</button>

  )
}

export default App;
