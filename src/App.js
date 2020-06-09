import React from 'react';
import './App.css';

function New(props) {
  return (
  <div className="text">
    <h3>My Name is {props.name}</h3>
    <h3>My Age is {props.age}</h3>
  </div>

  );
}


export default New;
