import React from 'react'
import { useState } from 'react'

const Home = () => {
  const [input, setInput] =useState('')
  return (
    <div id='home'>
        <input type="text" placeholder="Enter room ID" onChange={(e)=>setInput(e.target.value)} />
        <button>Join Room</button>
    </div>
  )
}

export default Home