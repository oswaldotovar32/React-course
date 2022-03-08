import React from 'react';
import './App.css';

function HelloWord(props) {
  return (
    <div>Hello {props.name}!</div>
  );
}

function App() {
  return (
    <div>Mi component: <HelloWord name="Oswaldo" /> <HelloWord name="Tovar" /> </div>
  );
}

export default App;
