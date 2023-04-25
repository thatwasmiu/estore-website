import { useContext } from 'react';
import LoginForm from '../../components/login-form/LoginForm.component';
import SignInBtn from '../../components/sign-in-button/SignInBtn.component';
import { UserLoginContext } from '../../context/UserLoginContext';
import './LoginPage.style.css';

const LoginPage = () => {
    const { authUser, authenticate } = useContext(UserLoginContext);
    if (authUser.user !== null) {
        const url = "/";
        window.location.replace(url);
        return;
    }
    const getSubmitData = (username, password) => {
        
        const user = {
            username : username,
            password: password,
        }
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
        <div className='container'>
            <form className="body_LoginPage">  
                <LoginForm getSubmitData={getSubmitData}/>
            </form>
        </div>  
    )
}

export default LoginPage;