import Input from "../input/input"
import type { Props } from "./form.props"

const Form = ({click} :Props) => {
  return  (
    <>
      <form className="flex flex-col w-[300px]" action="/">
        <Input className="mb-[15px] border rounded-[5px]" placeholder="room id"/>
        <Input className="mb-[15px] border rounded-[5px]" placeholder="ваше имя"/>
        <button onClick={click} className="bg-[green] border rounded-[5px] text-[white] p-[10px] cursor-pointer" type="submit">войти</button>
      </form>
    </>
  )
}

export default Form