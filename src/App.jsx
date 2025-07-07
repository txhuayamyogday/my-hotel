import React, { Component, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import {Section_2, Section_5 } from "./components/About/About";
import { RoomMain } from "./components/Rooms/Rooms";
import { Blog_comp } from "./components/Blog/Blog";
import style from "./components/About/About.module.css"
import Resume from "./components/Resume/Resume";


export const  Section_1 = () => {
  return (
    <section className={style.about_container} id={style.about_bg}>
      <div>
        <h4>Home &gt; </h4>
      </div>
      <div>
        <h1>Home</h1>
      </div>
      <style jsx>
        {
          `
            h1{
            color: #f4f4f4; 
            }
          
          `
        }
      </style>
    </section>
  );
};

const App = () =>{
  return (
    <div>
      <header>
        <nav>
          <NavBar number_page={1}/>
        </nav>
      </header>
      <main>
        <Section_1/> 
        <Section_2/>
        <RoomMain/>
        <Blog_comp/>
        <Section_5/>
        <Resume/>
      </main>
    </div>
  )
}

export default App
