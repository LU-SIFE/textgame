import React, { MouseEventHandler, useState } from 'react';
import logo from './logo.svg';
import './App.css';

export default function App() {

  var [var1, setvar1] = useState(Math.floor(Math.random() * window.innerHeight));
  var [var2, setvar2] = useState(Math.floor(Math.random() * window.innerWidth));
  var [final, setFinal] = useState(0);

  const max = Math.hypot(window.innerWidth, window.innerHeight);
  var hypot = 100; //random value so crap doesn't go wrong ig
  var mousex = 0;
  var mousey = 0;


document.onmousemove = function(event) {
  console.log(var1, var2);
  mousex = event.clientX;
  mousey = event.clientY;
  hypot = Math.hypot(Math.abs(var2-mousey), Math.abs(var1-mousex));
  setFinal(Math.abs(hypot/max * 100 - 100));
  if (hypot <= 60) {
    alert("you win!");
    setvar1(var1  = Math.floor(Math.random() * window.innerHeight));
    setvar1(var2  = Math.floor(Math.random() * window.innerWidth));
  }
};


  return (
  <div className='box1'><h1>TREASURE HUNT</h1>
    <div className='main_bar'>
      <div className='indicator' style={{width: (final + 2.5) + "%"}}></div>
    </div>
    <h2>Move your cursor around to find the hidden treasure, the bar will fill up the closer you are.</h2>
    </div>
  );
}