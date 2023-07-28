import { useContext, useRef } from "react";
import SigninBtn from "../sign-in-button/SigninBtn.component.jsx";
import { UserLoginContext } from "../../../../context/UserLoginContext.jsx";
import { useAppDataContext } from "../../../../context/AppDataContext.jsx";
import { NavLink } from "react-router-dom";
import { Container } from "react-bootstrap";
import { users } from "../../../../user.data.js";

const LoginForm = () => {
    const { authenticate } = useContext(UserLoginContext);
    const {setProductContext, setCategoryContext} = useAppDataContext();
    const usernameRef = useRef(null);
    const passwordRef = useRef(null);
    const handleLoginSubmit = (e) => {
        e.preventDefault();
        const user = {
            username: usernameRef.current.value, 
            password: passwordRef.current.value
        };
        
    
    
        for (const authUser of users) {
            if (user.username == authUser.user.username && user.password == authUser.user.password) {
                authenticate(authUser)
                return;
            }
        }
            
            
        
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
            <p className="text-center">Not a member? <NavLink to="/register">Register</NavLink></p>
        </>
    )
}

export default LoginForm;