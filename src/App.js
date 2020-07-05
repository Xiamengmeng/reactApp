import React from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './Welcome'
import Namecard from './components/Namecard'
import Clock from './components/Clock'
import Eventmont from './components/Eventmont'
import Greeting from './components/Greeting'


const tags=['亲切','友好','善良','大方']
function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        > */}
          HELLO WORLD
          <Namecard name='voli' number={12345678960} kind tags={tags}/>
          <Namecard name='moli' number={236568778960} tags={tags}/>
          <Clock></Clock>
          <Eventmont/>
          {/* <Greeting/> isLogin 默认为false */}
          <Greeting  isLogin={true}/>
        {/* </a> */}
        {/* <Welcome/> */}
      </header>
    </div>
  );
}

export default App;
