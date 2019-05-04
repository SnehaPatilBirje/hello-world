import React from 'react';
import './App.css';
import Greet from './component/Greet.js';
import Welcome from './component/Welcome.js';
import Hello from './component/Hello.js';
import Message from './component/Message.js';
import Counter from './component/Counter.js';

function App() {
  return (
    <div className="App">
    <h1>Hello World!</h1>
     <Greet name="Asmi" surname="Birje">
     </Greet>
     <Greet name="Riya" surname="Sawant">
     </Greet>
     <Welcome name="Jai" surname="Sawant"/>
     <Hello/>
     <Message/>
     <Counter/>
    </div>
  );
}

export default App;
