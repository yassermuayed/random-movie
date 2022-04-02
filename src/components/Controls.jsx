import React from 'react'
import '../App.css'
export default function Controls({fm}) {
  return (
    <div className='controls'>
      <button onClick={fm}>Next</button>
      <button>share</button>
    </div>
  )
}
