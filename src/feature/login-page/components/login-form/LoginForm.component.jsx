import { useContext, useRef } from "react";
import SigninBtn from "../sign-in-button/SigninBtn.component.jsx";
import { UserLoginContext } from "../../../../context/UserLoginContext.jsx";

const LoginForm = () => {
    const { authenticate } = useContext(UserLoginContext);
    const usernameRef = useRef(null);
    const passwordRef = useRef(null);
    const handleLoginSubmit = (e) => {
        e.preventDefault();
        const user = {
            user: usernameRef.current.value, 
            password: passwordRef.current.value
        };
        
        console.log(user)
        const object = {
            method : 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        }
    
        fetch('http://localhost:8080/login', object)
        .then((res) => res.json())
        .then((d) => authenticate(d));
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
            <SigninBtn handleClick={handleLoginSubmit} />
        </>
    )
}

export default LoginForm;