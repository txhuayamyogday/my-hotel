import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import style from "./About.module.css";
import "../style/style.css";
const  Section_1 = () => {
  return (
    <section className={style.about_container} id={style.about_bg}>
      <div>
        <h4>Home &gt; </h4>
        <h4>About &gt; </h4>
      </div>
      <div>
        <h1>About us</h1>
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
export const Section_2 = () => {
  const picture_info = [
    {
      pic: "https://preview.colorlib.com/theme/unwind/images/f-services.jpg.webp",
      text_h1: "Cozy Room",
      text: "Far away, behind the word mountains",
    },
    {
      pic: "https://preview.colorlib.com/theme/unwind/images/f-services-2.jpg.webp",
      text_h1: "Special Offers",
      text: "Far far away, behind the word mountains, far from the countries Vokalia.",
    },
  ];
  return (
    <section className={style.about_container} id={style.section2_about}>
      <div className={style.section2_container}>
        <div className={style.box_container}>
          <div className={style.box}>
              {picture_info.map((e, index) => (
                <div>
                  <h1>{e.text_h1}</h1>
                  <p>{e.text}</p>
                  <img src={`${e.pic}`}alt="" />
                </div>
              ))}
          </div>
        </div>
        <div className={style.box_container}>

            <h5>ABOUT US</h5>
            <h1>Unwind A Hotel Booking Agency</h1>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated they
              live in Bookmarksgrove right at the coast of the Semantics, a large
              language ocean.
            </p>

        </div>
      </div>
    </section>
  );
};
const Section_3 = () => {
  return (
  <section className={style.about_container} id={style.section3_container}>
    <div>
      <p>FINE BEST HOTEL FOR LIVING -&gt; <button className={style.book}>BOOK NOW!</button></p>
      <h1>Fine the Best Hotel in Your Next Vacation</h1>
    </div>
  </section>
  )
};
const Section_4 = () => {
  const profile = [
    {
      name: "Roger Scott",
      role: "MARKETING",
      text: 'I am sooo happy to book the hotel',
    },
    {
      name: "Peter Parker",
      role: "Spider",
      text: 'I am superhero, and this hotel is stunning',
    },
    {
      name: "Harry Poter",
      role: "Wizard",
      text: 'Avakedabra',
    },
  ]
  return (
  <section className={style.about_container} id={style.section4_container}>
      <div >
        <h1>HAPPY GUESTS</h1>
      </div>
      <div>
        {profile.map((e, index) => (
          <div className={style.sec4_xo}>
            <h2>{e.name}</h2>
            <h4>{e.role}</h4>
            <p>{e.text}</p>
          </div>
        ))}
      </div>
  </section>

  )
};
export const Section_5 = () => {
  return (
    <div>
      <div id={style.section5_container}>
       <h1>Have a Question?</h1> 
        <p>What's app: 20-xx-xxx-xxx</p>
        <p>Facebook: Bill Gate, Enof, Kaja, Yok</p>
      </div>
    </div>
  )
}
function About() {
  return (
    <div className={style.main_about}>
      <header>
        <nav>
          <NavBar number_page={2} />
        </nav>
      </header>
      <main>
        <Section_1 />
        <Section_2 />
        <Section_3 />
        <Section_4 />
        <Section_5/>
      </main>
    </div>
  );
}

export default About;
