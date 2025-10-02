import Home from './pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Auth from './pages/Auth.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Wrapper from './pages/Wrapper.jsx'

function App() {

  return (
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/dashboard" element={ 
          <Wrapper>
             <Dashboard  /> 
          </Wrapper> } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
