import React from 'react'

import { useState } from 'react'
import './App.css'
import Login from './Components/Login/Login'
import Register from './Components/Register/Register'

function App() {
  const [currentStep, setCurrentStep] = useState("login")
  
  return (
    <div className="App">

      {currentStep === "login" ? (
        <Login setCurrentStep={setCurrentStep} />
      ) : (
        <Register setCurrentStep={setCurrentStep} />
      )}
    </div>
  )
}

export default App
