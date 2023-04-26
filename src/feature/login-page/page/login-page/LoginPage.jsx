import { useContext } from 'react';
import LoginForm from '../../components/login-form/LoginForm.component.jsx';
import { UserLoginContext } from '../../../../context/UserLoginContext.jsx';
import './LoginPage.style.css';

const LoginPage = () => {
    const { authUser, authenticate } = useContext(UserLoginContext);
    if (authUser.user !== null) {
        const url = "/";
        window.location.replace(url);
        return;
    }
    return (  
        <div className='container'>
            <form className="body_LoginPage">  
                <LoginForm/>
            </form>
        </div>  
    )
}

export default LoginPage;