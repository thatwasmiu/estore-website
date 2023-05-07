import { useContext } from 'react';
import LoginForm from '../../components/login-form/LoginForm.component.jsx';
import { UserLoginContext } from '../../../../context/UserLoginContext.jsx';
import './LoginPage.style.css';
import Footer from '../../../../components/footer/Footer.component.jsx';

const LoginPage = () => {
    const { authUser, authenticate, logout } = useContext(UserLoginContext);
    if (authUser.user !== null) {
        if (authUser.user.role == "CUSTOMER") {
            window.location.replace("/");
            return;
        }
        if (authUser.user.role == "ADMIN") {
            window.location.replace("/admin");
            return;
        }
        logout();
    }
    return (  
        <>
        <div className='container'>
            <form className="body_LoginPage">  
                <LoginForm/>
            </form>
        </div>  
        <Footer />
        </>
    )
}

export default LoginPage;