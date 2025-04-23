import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import VideoRoom from './Pages/VideoRoom'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/room/:roomID" element={<VideoRoom />} />
      </Routes>
    </div>
  )
}

export default App