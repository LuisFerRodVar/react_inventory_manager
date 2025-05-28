import './App.css'
import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Recovery from './pages/Recovery'
import Register from './pages/Register'


function App() {

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/recovery" element={<Recovery />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  )
}

export default App
