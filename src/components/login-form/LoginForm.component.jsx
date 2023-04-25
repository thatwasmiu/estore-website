import { useRef } from "react";
import SignInBtn from "../sign-in-button/SignInBtn.component";

const LoginForm = ({getSubmitData}) => {
    const usernameRef = useRef(null);
    const passwordRef = useRef(null);
    const handleLoginSubmit = (e) => {
        e.preventDefault();
    
        getSubmitData(usernameRef.current.value, passwordRef.current.value);
    }
    return (
        <>
            <div className=" mb-4 form-floating">
                <input type="text" ref={usernameRef} id="loginName" className="form-control" name="username" required placeholder="usename" autoComplete="on"/>
                <label className="form-label" htmlFor="loginName">Username</label>
            </div>  
            <div className=" mb-4 form-floating">
                <input type="password" ref={passwordRef} id="loginPassword" className="form-control" name="password" required placeholder="password" autoComplete="on"/>
                <label className="form-label" htmlFor="loginPassword">Password</label>
            </div>
            <SignInBtn handleClick={handleLoginSubmit} />
        </>
    )
}

export default LoginForm;