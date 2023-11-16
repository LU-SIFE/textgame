import React, { MouseEventHandler, useState } from 'react';
import logo from './logo.svg';
import './App.css';



export default function App() {

  const [health, setHealth] = useState(100);
  const [atk, setAtk] = useState(1);

function handleHealth(amount: number) {
  setHealth(health + amount);
}

  return (
    <div className='border'>

      <div className='left'>

        <Health health={health} handleHealth={handleHealth}></Health>
        <Attack atk={atk}></Attack>

      </div>
      
      <div className='right'>
        <span>
          A really cool enemy blocks your path:
        </span>
      </div>

    </div>
  );
}

function Health({health, handleHealth}: {health: number; handleHealth: Function;}) {
  return (

    <div className='health_con new_sect'>

      <span>HEALTH: {health}</span>

      <div className='health_box'>
        <div className='health' style={{width: health + "%"}}></div>
      </div>
      <MyButton health={health} onClick={() => handleHealth(-1)}></MyButton>
    </div>
  );
}

function MyButton({ health, onClick }: {health: number; onClick: MouseEventHandler;}) {
  return (
    <button onClick={onClick}>OMG HELP ME 
    </button>
  );
}

function Attack({atk}: {atk: number;}) {
  return (

    <div className='health_con new_sect'>

      <span>ATK POWER: {atk}</span>
    </div>
  );
}