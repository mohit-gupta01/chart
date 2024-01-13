import React, { useState } from 'react';
import ChartComponent from './ChartComponent';
import { intervals, seriesesData } from './data';
import './App.css';

const App = (props) => {
  const [activeitem, setActiveItem] = useState('1D');

  const handleClick = (item) => {
    if (item === activeitem)
      return;
    setActiveItem(item);
    console.log(item);
  };

  return (
    <>
      <ChartComponent {...props} data={seriesesData[activeitem]} />
      {intervals.map((item, index) => {
        return <button key={index} className={`${(item === activeitem)?"switcher-active-item":''} switcher-item`} onClick={() => handleClick(item)}>{item}</button>
      })}
    </>
  )
}

export default App;