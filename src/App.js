import React from 'react';
import './App.css';
import Home from './Screens/Home';
import Services from './Screens/Services';
import News from './Screens/News';
import Future from './Screens/Future';
import Contact from './Screens/Contact';
import Policies from './Screens/Policies';

const App = () => {
  return (
    <div className="App">
      <Home />
      <Services />
      <News />
      <Future />
      <Contact />
      <Policies />
    </div>
  );
}

export default App;
