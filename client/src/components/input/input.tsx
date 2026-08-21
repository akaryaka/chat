import type { Props } from "./input.props"
import cn from 'classnames';

const Input = ({placeholder, className, ...props} : Props) => {
  return (
    <>
      <input
        className={cn('p-[10px]', className, {...props})} 
        type="text" 
        placeholder={placeholder}
      />
    </>
  )
}

export default Input