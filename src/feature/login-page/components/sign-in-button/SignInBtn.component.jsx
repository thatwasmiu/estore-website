
const SigninBtn = ({ handleClick }) => {
    return (
        <>
            <div className="text-center">    
                <button type="submit" className="btn btn-primary btn-block mb-4" onClick={handleClick}>Sign In</button>
            </div>
        </>
    )
}

export default SigninBtn;