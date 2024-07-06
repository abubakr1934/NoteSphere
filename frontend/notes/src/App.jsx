import React from 'react'
import Home from './Pages/Home/Home'
import Login from './Pages/Login/Login'
import SignUp from './Pages/SignUp/SignUp'
import './index.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Modal from "react-modal";


const routes=(
  <Router>
    <Routes>
      <Route path='/dashboard' exact element={<Home></Home>}/>
      <Route path='/login' exact element={<Login></Login>}/>
      <Route path='/signup' exact element={<SignUp></SignUp>}/>
    </Routes>
  </Router>

)
const App = () => {
  Modal.setAppElement("#root"); // Adjust the selector to your app's root element
  return (
    <div>
      {routes}
    </div>
  )
}

export default App
