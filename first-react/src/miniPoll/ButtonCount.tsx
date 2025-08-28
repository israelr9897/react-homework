import React from 'react'

export default function ButtonCount({options, setOptions, type}: any) {
  return (
    <>
        <button className='btnCount' onClick={() =>
            setOptions({...options, [type]: options[type] + 1})
        }>+</button>
    </>
  )
}
