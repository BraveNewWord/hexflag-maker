import React, { useState } from 'react'
import NameForm from './NameForm.js'
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>HEXFLAG MAKER</h1>
      <p>Type in a word and get the hexflag of it (click submit to get an image)</p>
      <NameForm />
    </div>
  );
}

export default App;
