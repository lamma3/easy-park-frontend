import React from 'react';
import './css/ui.css';
import { Route } from 'react-router-dom';
import AppTopNavBar from './component/ui/AppTopNavBar';
import ParkingLotList from './component/ParkingLotList';
import ParkingLotInfo from './component/ParkingLotInfo';
import FilterBox from './component/FilterBox';
import BookingParkingLot from './component/BookingParkingLot';
import BookingResult from './component/BookingResult';

function App() {

  return (
    <div className="App">
      <AppTopNavBar />
      <div>
        <Route exact path="/" component={ParkingLotList}></Route>
        {/* <Route path="/search" component={ParkingLotList} /> */}
        <Route path="/infos/:id" component={ParkingLotInfo} />
        <Route path="/filter" component={FilterBox} />
        <Route path="/booking/:id" component={BookingParkingLot} />
        <Route path="/result/:id" component={BookingResult} />
      </div>
    </div>
  );
}

export default App;
