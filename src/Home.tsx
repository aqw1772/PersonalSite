import React from 'react';
import './App.css';
import Navigation from "./Navigation";



function Home() {
  return (
    <div>
      <Navigation/>
       <div style={{backgroundSize:'cover',backgroundPosition: 'center',filter: 'blur(8px)',height:'100vh', backgroundImage: `url(${require('./background.jpg')})` }}  ></div>
        <img alt="profile" src={ require('./squareProf.JPG')} className="circleProf"></img>  
        <div className="homeText">
          <h1>Hi, I'm Alex</h1>
          <h4 style={{textAlign:'center'}}>Welcome to my webpage!</h4>
        </div>
    </div>
    
  );
}

export default Home;
