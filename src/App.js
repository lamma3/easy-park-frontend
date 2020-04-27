import React from 'react';
import './css/ui.css';
import { Route } from 'react-router-dom';
import AppTopNavBar from './component/ui/AppTopNavBar';
import ParkingLotList from './component/ParkingLotList';
import ParkingLotInfo from './component/ParkingLotInfo';
import FilterBox from './component/FilterBox';
import BookingParkingLot from './component/BookingParkingLot';
import BookingResult from './component/BookingResult';
import RatingPage from './component/RatingPage';
import ParkingLotIndex from './component/ParkingLotIndex';
import BookingHistory from './component/BookingHistory';
import { Button } from 'antd-mobile';

function App() {

  
  return (
    <div className="App">
      <AppTopNavBar />
      <div> 
        <Route exact path="/" component={ParkingLotIndex}></Route>
        {/* <Route path="/search" component={ParkingLotList} /> */}
        <Route path="/infos/:id" component={ParkingLotInfo} />
        <Route path="/history" component={BookingHistory} />
        <Route path="/filter" component={FilterBox} />
        <Route path="/booking/:id" component={BookingParkingLot} />
        <Route path="/result/:id" component={BookingResult} />
        <Route path="/rating/:id" component={RatingPage} />
        <Route path="/index" component={ParkingLotIndex} />
      </div>
    </div>
  );
}

export default App;
