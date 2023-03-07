import {useCallback, useEffect, useState} from "react";
import "./styles.css";

const LoginForm = () => {
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (event) => {
        //Prevent page reload
        event.preventDefault();

        // Find user login info
        const res = await fetch("./token.json");
        const token = await res.json();

        // Compare user info
        if (token) {
            setIsSubmitted(true);
        } else {
            setErrorMessages({ name: "error"});
        }
    };

    const renderErrorMessage = (name) =>
        name === errorMessages.name && (
            <div className="error">{errorMessages.message}</div>
        );

    const renderForm = (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <div className="input-container">
                    <label>Username </label>
                    <input type="text" name="uname" required />
                    {renderErrorMessage("error")}
                </div>
                <div className="input-container">
                    <label>Password </label>
                    <input type="password" name="pass" required />
                    {renderErrorMessage("ror")}
                </div>
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




