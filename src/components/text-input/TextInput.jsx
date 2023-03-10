import { forwardRef } from "react";


const TextInput = forwardRef(({className, label, ...otherProps}, ref) => (
    <div className={className}>
    <label>{label}</label>
    <input {...otherProps} ref={ref}/>
    </div>   
)) 

const Child = forwardRef()
export default TextInput;