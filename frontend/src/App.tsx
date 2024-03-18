import React from 'react';
import './App.css';
import Header from './Header';
import BowlerList from './Bowling/BowlerList';

function App() {
  return (
    <div className="App">
      <Header title="Bowling League Database" />
      <BowlerList />
    </div>
  );
}

export default App;
