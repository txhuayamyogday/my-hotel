import React, { Component, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";



const App = () =>{
  return (
    <div>
      <header>
        <nav>
          <NavBar number_page={1}/>
        </nav>
      </header>
    </div>
  )
}

export default App
