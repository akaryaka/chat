import io from 'socket.io-client';
import Login from "./pages/login";
import Room from "./pages/room";


function App() {
  const connect = (event: Event) => {
    event.preventDefault();
    const socket = io('http://localhost:3000');
  }
  return (
    <>
      <Login click={connect}/>
      <Room />
    </>
  )
}

export default App;
