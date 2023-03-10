import {useCallback, useState} from "react";


const Test = () => {
    const [isToggleOn, setToggle] = useState(false)

    const handleClick = useCallback(() => {
        console.log("render")
        setToggle(prevState => !prevState)
    }, [])

    return (
        <button onClick={handleClick}>
            {isToggleOn ? 'ON' : 'OFF'}
        </button>
    )
}

export default Test;