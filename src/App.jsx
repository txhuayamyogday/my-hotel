import React, { Component, useEffect } from "react";
import NavBar from "./components/NavBar/NavBar";
import { useNavigate } from "react-router-dom";

const App = () =>{
  const navigate = useNavigate()
  useEffect(() => {
    navigate('/home')
  }, [navigate])

  return (
    <div>
      <nav>
        <NavBar/>
      </nav>
    </div>
  )
}

export default App
