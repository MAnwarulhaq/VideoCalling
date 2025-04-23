import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  let navigate=useNavigate()
  const [input, setInput] =useState('')
  function handlejoin(){
    navigate(`/room/${input}`)
  }
  return (
    <div id='home'>
        <input type="text" placeholder="Enter room ID" value={input} onChange={(e)=>setInput(e.target.value)} />
        <button onClick={handlejoin}>Join Room</button>
    </div>
  )
}

export default Home