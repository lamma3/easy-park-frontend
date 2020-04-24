import React from 'react';
import AppTopNavBar from './component/AppTopNavBar';
import ParkingLotList from './component/ParkingLotList';
import dotenv from 'dotenv';

if (process.env.NODE_ENV !== 'production') dotenv.config();

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AppTopNavBar />
        <ParkingLotList />
      </header>
    </div>
  );
}

export default App;
