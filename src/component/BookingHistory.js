import React, { Component } from 'react'
import { withRouter } from "react-router-dom";
import '../css/ui.css';
import { Typography, Button, Space } from 'antd';
import ParkingLotApi from '../apis/ParkingLotApi';
const { Title, Text } = Typography;

class BookingHistory extends Component {

 constructor(props) {
     super(props)
 

     this.goBack = this.goBack.bind(this);
     this.goRatingPage = this.goRatingPage.bind(this);

     this.state = {
        isLoaded: false,
        booking: [],
        parkingLot: []
    
     }
 }


 
 goBack() {
    this.props.history.push('/');
}

goRatingPage() {
    this.props.history.push(`/rating/${this.state.parkingLot.id}`);
  }



  componentDidMount() {
    ParkingLotApi.getBookingById(1).then((response) => {
        let apiData = response.data;
        this.setState({
            isLoaded: true,
            booking: apiData,
            parkingLot: apiData.parkingLot

        },()=>{
        console.log(this.state.booking)}) 
    })

}



    render() {
        return (
            <div className='Info-content'>
                 <div className='Display-card'>
                 <Title level={3}>Booking History</Title>
                 <div class="Display-container">

                 <div class="Info-title"><Text>Booking ID: </Text></div>
                <div class="Info-item"><Text>{this.state.booking.id}</Text></div>
                <div class="Info-title"><Text>Parking-Lot Name: </Text></div>
                <div class="Info-item"><Text>{this.state.parkingLot.name}</Text></div>
                <div class="Info-title"><Text>Pakring-Lot Address: </Text></div>
                <div class="Info-item"><Text>{this.state.parkingLot.address}</Text></div>
                <div class="Info-title"><Text>Booking Status: </Text></div>
                <div class="Info-item"><Text>{this.state.booking.status}</Text></div>
                   
                    </div>
                 <div className='Info-button'>
                        <Space size='small'>
                            <Button type="primary" onClick={this.goBack}>Back</Button>
                            <Button onClick={this.goRatingPage}> Rate</Button>
                        </Space>
                    </div>
                 </div>
                 
            </div>
        )
    }
}

export default withRouter(BookingHistory);