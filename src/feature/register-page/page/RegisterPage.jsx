import { useContext } from "react";
import RegisterForm from "../components/RegisterForm";
import { UserLoginContext } from "../../../context/UserLoginContext";
import Footer from "../../../components/footer/Footer.component";


const RegisterPage = () => {
    const { authUser} = useContext(UserLoginContext);
    if (authUser.user !== null) {
        const url = "/";
        window.location.replace(url);
        return;
    }
    return (  
        <>
        <div className='container'>
            <form className="body_LoginPage">  
                <RegisterForm />
            </form>
        </div> 

        <Footer />
        </> 
    )
}

export default RegisterPage;