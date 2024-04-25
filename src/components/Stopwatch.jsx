import { useState, useRef } from "react"

export default function Stopwatch() {
    //create a state
    const [startTime, setStartTime] = useState(null);
    const [now, setNow] = useState(null);
    const intervalRef = useRef(null);

    function handleStart () {
        //start counting
        setStartTime(Date.now());
        setNow(Date.now());

        //clear the interval
        clearInterval(intervalRef.current);
        intervalRef.current = setInterval(() => {
            //update the current time every  ms
            setNow(Date.now());
        }, 10);
    }

    function handleStop() {
        console.log(intervalRef.current);
        clearInterval(intervalRef.current);
    }

    let secondsPassed = 0;
    if (startTime != null && now != null) {
        secondsPassed = (now - startTime)/1000;
    }

    return (
        <>
        <h1>time passed: {secondsPassed.toFixed(3)}</h1>
        <button onClick={handleStart}>start</button>

        <button onClick={handleStop}>stop</button>
        </>
    )
}