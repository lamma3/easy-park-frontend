import React from 'react';
import AppTopNavBar from './component/AppTopNavBar';
import ParkingLotList from './component/ParkingLotList';
import ParkingLotInfo from './component/ParkingLotInfo';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AppTopNavBar />
        {/* <ParkingLotList /> */}
        <ParkingLotInfo />
      </header>
    </div>
  );
}

export default App;
