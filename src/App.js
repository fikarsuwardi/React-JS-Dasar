import React from 'react';
import Header from './Header';
import Navbar from './Navbar';
import StateProps from './StateProps';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <h2>Hello World</h2>
      <StateProps />
    </div>
  );
}

export default App;
