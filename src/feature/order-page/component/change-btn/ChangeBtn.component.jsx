import { useRef, useState } from "react";
import { Button } from "react-bootstrap";

const ChangeBtn = ({ status, handleClickBtn, id }) => {
    const [btnChange, setBtnChange] = useState(true);
    const btnRef = useRef();
    const handleMouseHover = (e) => {
        if (btnRef.current.textContent == "PENDING") {
            btnRef.current.textContent = "CANCEL";
            setBtnChange(false);
            return;
        }
        btnRef.current.textContent = "PENDING"
        setBtnChange(true);
    }

    const boolean = status != "COMPELETED" && status != "REJECTED";
    return (
        <>
            {boolean && 
            <Button className="cancel-btn" value={id} ref={btnRef} onClick={handleClickBtn} onMouseOver={handleMouseHover} onMouseOut={handleMouseHover} variant={btnChange ? 'primary' : 'danger'}>
                {status}
            </Button>}
        </>   
    )
}

export default ChangeBtn;