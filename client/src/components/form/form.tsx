import { useState } from "react"
import Input from "../input/input"
import axios from "axios"
import type { Props } from "./form.props"

const Form = ({click} :Props) => {
  const [roomId, setRoomId] = useState('');
  const [userName, setUserName] = useState('');  

  function enter(event: MouseEvent) {
    event.preventDefault();
    axios.post('http://localhost:3000/rooms', {
      roomId,
      userName
    })
  }

  return  (
    <>
      <form className="flex flex-col w-[300px]" action="/">
        <Input 
          className="mb-[15px] border rounded-[5px]" 
          value={roomId} 
          name="room-id"
          onChange={(event: MouseEvent) => setRoomId(event.target.value)} 
          placeholder="room id"
        />
        {/* <p>{roomId}</p> */}
        <Input 
          name="username" 
          className="mb-[15px] border rounded-[5px]" 
          value={userName} 
          placeholder="ваше имя"
          onChange={(event: MouseEvent) => setUserName(event.target.value)} 
        />
        <button onClick={enter} className="bg-[green] border rounded-[5px] text-[white] p-[10px] cursor-pointer" type="submit">войти</button>
      </form>
    </>
  )
}

export default Form