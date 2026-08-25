import type { Props } from "./input.props"
import cn from 'classnames';

const Input = ({placeholder, onChange, name, className, ...props} : Props) => {
  return (
    <>
      <input
        className={cn('p-[10px]', className, {...props})} 
        name={name}
        type="text" 
        onChange={onChange}
        placeholder={placeholder}
      />
    </>
  )
}

export default Input