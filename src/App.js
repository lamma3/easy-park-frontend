import React from 'react';
import AppTopNavBar from './component/AppTopNavBar';
import ParkingLotList from './component/ParkingLotList';


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
