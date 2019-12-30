import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './components/header/Header';
import { List } from './components/list/List';
import { Tile } from './components/Tile/Tile';



const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <List />
      <Tile />
    </div>

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
