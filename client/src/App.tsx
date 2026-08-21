/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import Form from "./components/form/form";
import io from 'socket.io-client';

const socket = io('http://localhost:3000');
// console.log(socket);


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
      <div className="w-[100%] h-[100vh] flex items-center justify-center">
        <Form />
      </div>
    </>
  )
}

export default App;
