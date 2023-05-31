import React from 'react';
import './App.css'
import Sidebar from './componets/pages/Sidebar/Sidebar';
import MainDash from './componets/pages/MainDash/MainDash';
import RightSide from './componets/pages/RightSide/RightSide';

const App = () => {
  return (
    <div className="App">
    <div className="AppGlass">
      <Sidebar></Sidebar>
      <MainDash></MainDash>
      <RightSide></RightSide>
    </div>
  </div>
  );
};

export default App;