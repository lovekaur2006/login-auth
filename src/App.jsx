import { useState } from 'react'
import Dashboard from './components/Dashboard/Dashboard'
import Preference from './components/Preference/Preference'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css';
import Login from './components/Login/Login';
import useToken from './useToken';

function App() {
const { token, setToken } = useToken();
if(!token){
  return <Login setToken={setToken}/>
}
  return (
    <div className='wrapper'>
      <h1>Application</h1>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/preference" element={<Preference/>} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
