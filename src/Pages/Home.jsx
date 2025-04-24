import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  let navigate = useNavigate()
  const [input, setInput] = useState('')
  function handlejoin() {
    navigate(`/room/${input}`)
  }
  return (
    <div id='home'>
      <h1 className='talktime-logo'>TalkTime</h1>
      <p className="text-gray-600 mb-6">Enter a room ID to start video calling!</p>
      <input type="text" placeholder="Enter room ID" value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={handlejoin}>Join Room</button>
    </div>
  )
}

export default Home