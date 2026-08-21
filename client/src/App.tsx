<<<<<<< HEAD
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import Form from "./components/form/form";
import io from 'socket.io-client';

const socket = io('http://localhost:3000');
// console.log(socket);

=======
import Login from "./pages/login";
import Room from "./pages/room";
>>>>>>> 02f8be5 (ref styles)

function App() {
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [fooEvents, setFooEvents] = useState([]);

  useEffect(() => {
    function onConnect() {
      setIsConnected(true);
      socket.connect();
      console.log(socket);
    }

    function onDisconnect() {
      setIsConnected(false);
      console.log(isConnected);

    }

    function onFooEvent(value: any) {
      setFooEvents(previous => [...previous, value]);
      console.log(fooEvents);
    }

    socket.on('connect', onConnect);
    socket.on('disconnect', onDisconnect);
    socket.on('foo', onFooEvent);

    return () => {
      socket.off('connect', onConnect);
      socket.off('disconnect', onDisconnect);
      socket.off('foo', onFooEvent);
    };
  }, []);
  // console.log(socket);

  return (
    <>
      <Login />
      <Room />
    </>
  )
}

export default App;
