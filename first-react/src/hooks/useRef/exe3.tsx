import React, { useRef, useState } from 'react'

export default function CounterHistory() {
    const [count, setCount] = useState(0)
    const previous = useRef<number>(0)
  return (
    <div>
        <p>exe 3: </p>
        <p>{count}, ( previous: {previous.current} )</p>
        <button onClick={() => {setCount(count+1); previous.current = count}}>+1</button>
        <button onClick={() => {setCount(count-1); previous.current = count}}>-1</button>
    </div>
  )
}
