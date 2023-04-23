import LoginForm from '../../components/login-form/LoginForm.component';
import SignInBtn from '../../components/sign-in-button/SignInBtn.component';
import './LoginPage.style.css';

const LoginPage = () => {
    return (  
        <div className='container'>
            <form className="body_LoginPage">  
                <LoginForm />
                <SignInBtn />
            </form>
        </div>  
    )
}

export default LoginPage;