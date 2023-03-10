import {useCallback, useEffect, useRef, useState} from "react";
import TextInput from "../text-input/TextInput";
import "./styles.css";

const LoginForm = () => {
    // const [errorMessages, setErrorMessages] = useState({message: "nah"});
    const [isSubmitted, setIsSubmitted] = useState(false);

    console.log("test from login form");
    const usernameRef = useRef();
    const passwordRef = useRef();

    const handleSubmit = useCallback(async (event) => {
        //Prevent page reload
        event.preventDefault();
        console.log(usernameRef.current.value);

        // Find user login info
        const res = await fetch("./token.json");
        const token = await res.json();

        // Compare user info
        if (token) {
            setIsSubmitted(true);
        } else {
            setErrorMessages({ name: "error"});
        }
    }, []);

    // const renderErrorMessage = (name) =>
    //     name === errorMessages.name &&
    //     (<div className="error">{errorMessages.message}</div>)

    const renderForm = (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <TextInput 
                        className="input-container" 
                        label="Username" 
                        type="text" 
                        name="uname" required 
                        ref={usernameRef}
                        autoComplete="on"/>
                <TextInput 
                        className="input-container" 
                        label="Password"
                        type="password" 
                        name="pass" required 
                        ref={passwordRef}
                        autoComplete="on"/>
                <div className="button-container">
                    <input type="submit" />
                </div>
            </form>
        </div>
    );

    return (
        <div className="app">
            <div className="login-form">
                <div className="title">Sign In</div>
                {isSubmitted ? <div className="error-message">User is successfully logged in</div> : renderForm}
            </div>
        </div>
    );
};

export default LoginForm;




