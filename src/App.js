import React from 'react';
import './css/ui.css';
import { Route } from 'react-router-dom';
import AppTopNavBar from './component/ui/AppTopNavBar';
import ParkingLotList from './component/ParkingLotList';
import ParkingLotInfo from './component/ParkingLotInfo';
import FilterBox from './component/FilterBox';

function App() {

  return (
    <div className="App">
      <AppTopNavBar />
      <div>
        <Route exact path="/" component={ParkingLotList}></Route>
        {/* <Route path="/search" component={ParkingLotList} /> */}
        <Route path="/infos/:id" component={ParkingLotInfo} />
        <Route path="/filter" component={FilterBox} />
      </div>
    </div>
  );
}

export default App;
