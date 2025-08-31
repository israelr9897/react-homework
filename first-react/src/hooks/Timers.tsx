import React, { useRef, useState } from 'react'

export default function Timers() {
    const [count, setCount] = useState(0)
    const idTimer = useRef(0)
    const [isRun, setIsRun] = useState(false)
    function startTimer(){
        if (!isRun) {
            setIsRun(!isRun)
            idTimer.current = setInterval(() => {
                setCount((c) => c + 1)
            }, 1000);
        }
    }
  return (
    <div>
        <p>Timer: {count}</p>
        <button disabled={isRun} onClick={() => startTimer()}>Start</button>
        <button disabled={!isRun} onClick={() => {clearInterval(idTimer.current); idTimer.current = 0; setIsRun(!isRun)}}>Stop</button>
        <button onClick={() => setCount(0)}>Reaset</button>
    </div>
  )
}
