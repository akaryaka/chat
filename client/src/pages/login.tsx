import Form from "../components/form/form"
import type { Props } from "./login.props"

const Login = ({click}: Props) => {
  return (
    <>
      <div className="w-[100%] h-[100vh] flex items-center justify-center">
        <Form click={click}/>
      </div>
    </>
  )
}

export default Login