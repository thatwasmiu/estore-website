import { useContext, useRef } from "react";
import SigninBtn from "../../login-page/components/sign-in-button/SigninBtn.component.jsx";
import { UserLoginContext } from "../../../context/UserLoginContext.jsx";
import { users } from "../../../user.data.js";

const RegisterForm = () => {
    const { authenticate } = useContext(UserLoginContext);
    const emailRef = useRef();
    const usernameRef = useRef();
    const passwordRef = useRef();
    const confirmPasswordRef = useRef();
    const handleSigninSubmit = (e) => {
        e.preventDefault();
        const user = {
            username: usernameRef.current.value, 
            password: passwordRef.current.value,
            role: "CUSTOMER"
        };
        console.log(user);
        if (user.password == confirmPasswordRef.current.value) {
            
            users.push({user});
            authenticate({user})
        }
        
    }
    return (
        <>
            <div className="mb-4 form-floating">
                <input type="text" ref={emailRef} id="email" className="form-control" name="email" required placeholder="email" autoComplete="on"/>
                <label className="form-label" htmlFor="email">Email</label>
            </div>
            <div className="mb-4 form-floating">
                <input type="text" ref={usernameRef} id="loginName" className="form-control" name="username" required placeholder="usename" autoComplete="on"/>
                <label className="form-label" htmlFor="loginName">Username</label>
            </div>  
            <div className=" mb-4 form-floating">
                <input type="password" ref={passwordRef} id="loginPassword" className="form-control" name="password" required placeholder="password" autoComplete="on"/>
                <label className="form-label" htmlFor="loginPassword">Password</label>
            </div>
            <div className=" mb-4 form-floating">
                <input type="password" ref={confirmPasswordRef} id="confirm" className="form-control" name="confirm-password" required placeholder="password" autoComplete="on"/>
                <label className="form-label" htmlFor="confirm">Confirm Password</label>
            </div>
            <SigninBtn handleClick={handleSigninSubmit} />
        
        </>
    )
}

export default RegisterForm;