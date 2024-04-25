import { useRef, useState } from 'react'

export default function Counter () {
    //use useRef
    let ref = useRef(0);
    const [divFive, setDivFive] = useState(0);

    function handleClick () {
        ref.current = ref.current + 1;
        alert('you clicked ' + ref.current + ' times');

        //add the following in do demonstrate the difference between a state and a ref
        //state change = whole thing re-renders
        if (ref.current % 5 === 0) {
            setDivFive(ref.current/5)
        }
    }
    //start with just an alert that shows useRef counting up
    return (
        <>
        <button onClick={handleClick}>
            click me!
        </button>

        <p>ref count is: {ref.current}</p>
        <p>div 5 count (which is state) is: {divFive}</p>
        </>
    )

}