import React from 'react';
import './css/ui.css';
import { Route } from 'react-router-dom';
import AppTopNavBar from './component/ui/AppTopNavBar';
import ParkingLotList from './component/ParkingLotList';
import ParkingLotInfo from './component/ParkingLotInfo';

function App() {
  
  return (
    <div className="App">
        <AppTopNavBar />
        <div>
          <Route path="/search"  component={ParkingLotList} />
          <Route path="/infos/:id" component={ParkingLotInfo} />
        </div>
    </div>
  );
}

export default App;
