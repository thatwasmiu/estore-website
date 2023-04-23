
const LoginForm = () => {
    
    return (
        <>
            <div className=" mb-4 form-floating">
                <input type="text" id="loginName" className="form-control" name="username" required placeholder="usename" autoComplete="on"/>
                <label className="form-label" htmlFor="loginName">Username</label>
            </div>  
            <div className=" mb-4 form-floating">
                <input type="password" id="loginPassword" className="form-control" name="password" required placeholder="password" autoComplete="on"/>
                <label className="form-label" htmlFor="loginPassword">Password</label>
            </div>
        </>
    )
}

export default LoginForm;