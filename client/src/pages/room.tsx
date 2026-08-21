const Room = () => {
  return (
    <>
      <div className="w-[100%] h-[100vh] flex items-center justify-center">
        <div className="sidebar w-[20%] h-[100vh] border">

        </div>
        <div className="content w-[80%]">
          <div className="output-message">

          </div>
          <form action="">
            <textarea className="border rounded-[5px]" name="text-message" id="text-message"></textarea>
            <button className="btn btn-primary">отправить</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Room