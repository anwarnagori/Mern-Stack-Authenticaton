import { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import SignUp from "./SignUp"
import LogIn from "./LogIn"
import Home from "./Home"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  )
}

export default App;
