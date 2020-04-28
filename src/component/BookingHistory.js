import React, { Component } from 'react'
import { withRouter } from "react-router-dom";
import '../css/ui.css';
import { Typography, Button, Space } from 'antd';
import ParkingLotApi from '../apis/ParkingLotApi';
import Cookies from 'js-cookie';
import Loading from './ui/Loading';
import { List } from 'antd-mobile';

const { Title, Text } = Typography;

class BookingHistory extends Component {
    constructor(props) {
        super(props)

        this.goBack = this.goBack.bind(this);
        this.goRatingPage = this.goRatingPage.bind(this);
        this.timeStamp2String = this.timeStamp2String.bind(this);
        this.state = {
        isLoaded: false,
        bookings: [],
        parkingLot: [],
        }
    }

    goBack() {
        this.props.history.push('/');
    }

    timeStamp2String (time){
        if(!time){
            // console.log("Empty time value");
        }
        // console.log(time);
                var datetime = new Date(time);
        // console.log(datetime);
                 var year = datetime.getFullYear();
                 var month = datetime.getMonth() + 1;
                 var date = datetime.getDate();
                 var hour = datetime.getHours();
                 var minute = datetime.getMinutes();
        const bookingTime = year + "-" + month + "-" + date + " " + hour + ":" + minute;
        // console.log(bookingTime);
                 return bookingTime;
        };
     

    goRatingPage(id) {
        this.props.history.push(`/rating/${id}`);
    }

    componentDidMount() {
        let bookingIds = Cookies.get("bookingList") ? JSON.parse(Cookies.get("bookingList")).reverse() : [];
        Promise.all(bookingIds.map(id => ParkingLotApi.getBookingById(id).then(response => response.data)))
        .then(bookings => {
            // console.log(bookings)
            this.setState({
                isLoaded: true,
                bookings: bookings,
            });
    })
    .catch(
        // error => console.log(error)
    );
    }

    render() {
        if (!this.state.isLoaded) {
            return <Loading />;
        } else {
        return (
                <div className='Booking-content'>
                    <div className= 'History-list-content'>
                    
                    {this.state.bookings.length <= 0 ?
                        <List.Item>No booking history</List.Item> :
                        this.state.bookings.map( (booking) =>(
                            <div key={booking.id} className='Display-card' style={{marginBottom:"15px"}}>
                                <Title level={3}>Booking History</Title>
                                <div className="Display-container">
                                    <div className="Info-title" ><Text>Booking Date: </Text></div>
                                    <div className="Info-item"><Text>{this.timeStamp2String(booking.utilTimestamp)}</Text></div>
                                    <div className="Info-title"><Text>Booking ID: </Text></div>
                                    <div className="Info-item"><Text>{booking.id}</Text></div>
                                    <div className="Info-title"><Text>Name: </Text></div>
                                    <div className="Info-item"><Text>{booking.parkingLot.name}</Text></div>
                                    <div className="Info-title"><Text>Address: </Text></div>
                                    <div className="Info-item"><Text>{booking.parkingLot.address}</Text></div>
                                    <div className="Info-title"><Text>Booking Type: </Text></div>
                                    <div className="Info-item"><Text>{booking.isElectricCar===true?"Electric":"Normal"}</Text></div>

                                    <div className="Info-title"><Text>Booking Status: </Text></div>
                                    <div className="Info-item" style={{color:"red"}}><b>{booking.status}</b></div>

                                </div>
                                <div className='Info-button'>
                                    <Space size='small'>
                                       
                                        <Button type="primary"  onClick={() => this.goRatingPage(booking.parkingLot.id)}> Rate</Button>
                                    </Space>
                                </div>
                            </div>    
                        ))
                    }
                    </div>   
                    <Button type="primary" style={{ background: "grey", borderColor: "grey",marginTop:"40px" }} onClick = {this.goBack}> Back </Button>     
                </div>
            )
        }
    }
}

export default withRouter(BookingHistory);