import Input from "../input/input"

const Form = () => {
  return  (
    <>
      <form className="flex flex-col w-[300px]" action="/">
        <Input className="mb-[15px] border rounded-[5px]" placeholder="room id"/>
        <Input className="mb-[15px] border rounded-[5px]" placeholder="ваше имя"/>
        <button className="bg-[green] border rounded-[5px] text-[white] p-[10px] cursor-pointer" type="submit">войти</button>
      </form>
    </>
  )
}

export default Form