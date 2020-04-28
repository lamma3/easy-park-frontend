import React, { Component } from 'react'
import { withRouter } from "react-router-dom";
import '../css/ui.css';
import { Typography, Button, Space } from 'antd';
import ParkingLotApi from '../apis/ParkingLotApi';
import Cookies from 'js-cookie';
import Loading from './ui/Loading';
 
const { Title, Text } = Typography;

class BookingHistory extends Component {

 constructor(props) {
     super(props)
 

     this.goBack = this.goBack.bind(this);
     this.goRatingPage = this.goRatingPage.bind(this);

     this.state = {
        isLoaded: false,
        booking: [],
        parkingLot: [],
        updateBookingInfoList: []
    
     }
 }


 
 goBack() {
    this.props.history.push('/');
}

goRatingPage(id) {
    this.props.history.push(`/rating/${id}`);
  }



  componentDidMount() {
     var bookingArray = JSON.parse( Cookies.get("bookingList"))
     var bookingInfoList = [];
     console.log("before api");
     Promise.all(bookingArray.map((booking)=>( ParkingLotApi.getBookingById(booking)).then((response) => {
        bookingInfoList.push(response.data);
    })));
    this.setState({
        isLoaded: true,
        updateBookingInfoList: bookingInfoList
    },()=>{
    console.log(this.state.updateBookingInfoList)}) 
     console.log("testing by updatebookinfolist"); 
    // ParkingLotApi.getBookingById(Cookies.get("booking")).then((response) => {
    //     let apiData = response.data;
    //     this.setState({
    //         isLoaded: true,
    //         booking: apiData,
    //         parkingLot: apiData.parkingLot

    //     },()=>{
    //     console.log(this.state.booking)}) 
    // })
    console.log("after api");

}



    render() {
        if (!this.state.isLoaded) {
            return <Loading />;
        } else{
        return (
            <div className='Info-content'>
            <div className= 'History-list-content'>
         
            {this.state.updateBookingInfoList.map( (booking) =>(

         <div className='Display-card' style={{marginBottom:"15px"}}>
                 <Title level={3}>Booking History</Title>
                 <div class="Display-container">
                 <div class="Info-title"><Text>Booking ID: </Text></div>
                <div class="Info-item"><Text>{booking.id}</Text></div>
                <div class="Info-title"><Text>Name: </Text></div>
                <div class="Info-item"><Text>{booking.parkingLot.name}</Text></div>
                <div class="Info-title"><Text>Address: </Text></div>
                <div class="Info-item"><Text>{booking.parkingLot.address}</Text></div>
                <div class="Info-title"><Text>Booking Status: </Text></div>
                <div class="Info-item"><Text>{booking.status}</Text></div>
                </div>
                 <div className='Info-button'>
                        <Space size='small'>
                            <Button type="primary" onClick={this.goBack}>Back</Button>
                            <Button onClick={() => this.goRatingPage(booking.id)}> Rate</Button>
                        </Space>
                    </div>
                 </div>    
           )
           )}
            </div>

                 
            </div>
        )
            }
    }
}

export default withRouter(BookingHistory);