import React, { Component } from 'react';
import '../css/ui.css';
import { CarFilled, ThunderboltFilled } from '@ant-design/icons';
import { Typography, Button, Space, Radio } from 'antd';
import ParkingLotApi from '../apis/ParkingLotApi';
import Loading from './ui/Loading';
import { withRouter } from "react-router-dom";
import { HTTP_STATUS_CREATED } from '../constant/constants';
import Cookies from 'js-cookie';
const { Title, Text } = Typography;

class BookingParkingLot extends Component {
    constructor(props, context) {
        super(props, context);

        this.goResult = this.goResult.bind(this);
        this.goBack = this.goBack.bind(this);
        this.state = {
            isLoaded: false,
            value:"normalCar",
            isBookSuccessful: false,
            booking: [],
            bookingList:[]

        }
    }

    componentDidMount() {
        ParkingLotApi.getParkingLotById(this.props.match.params.id).then((response) => {
            let apiData = response.data;
            this.setState({
                isLoaded: true,
                list: apiData
            });
            // console.log(this.state);
        })
        Cookies.set("bookingPage","");

    }

    
    goResult(){
        const isElectricCar = this.state.value === "electricCar";
        const id = this.props.match.params.id;
        ParkingLotApi.postBookingById(id, isElectricCar).then((response) => {
            if(response.status === HTTP_STATUS_CREATED) {

                this.setState(() => {
                    return {
                        isBookSuccessful: true,
                        booking:response.data,
                        // bookingList: this.state.bookingList.push(response.data.id)


                    }
                }, () => this.props.history.push({
                    pathname: `/result/${this.props.match.params.id}`,
                    state: {isBookSuccessful: this.state.isBookSuccessful}
                })
                )
                // console.log("API201",this.state);
                Cookies.set("booking",this.state.booking.id);
                if(!Cookies.get("bookingList")){
                    Cookies.set("bookingList",[this.state.booking.id]);
                }
                else{
                   var bookingRecord = JSON.parse(Cookies.get("bookingList"));
                    bookingRecord.push(this.state.booking.id);
                    Cookies.set("bookingList",bookingRecord);
                }
               
                // console.log()
            } 
        }).catch((err) => {
            this.setState(() => {
                return {
                    isBookSuccessful: false,
                }
            }, ()=> this.props.history.push({
                pathname: `/result/${this.props.match.params.id}`,
                state: {isBookSuccessful: this.state.isBookSuccessful}
            })
            )
        })
    }

    goBack() {
        this.props.history.goBack();
    }

    onChange = e => {
        // console.log('radio checked', e.target.value);
        this.setState({
            value: e.target.value,
        });
    };

    render() {
        if (!this.state.isLoaded) {
            return <Loading />;
        } else return (
            <div className='Info-content'>
                <Title level={2}>{this.state.list.name}</Title>
            <div className='Display-card'>
                    <Text id='Booking-title'>Confirm Booking</Text><br />
                    <Text className='Booking-display'>Reserve a space of following type:</Text> <br />
                    <div className='radio-option'>
                    <Radio.Group onChange={this.onChange} value={this.state.value}>
                        <Radio value={"normalCar"}><CarFilled style={{ fontSize: '25px'}}/></Radio>
                        <Space>&nbsp;&nbsp;&nbsp;</Space>
                        <Radio value={"electricCar"}><ThunderboltFilled style={{ fontSize: '25px'}}/></Radio>
                    </Radio.Group>
                    </div>
                    <div className='Booking-info-button'>
                        <Space size='small'>
                            <Button type="primary" style={{ background: "grey", borderColor: "grey" }} onClick={this.goBack}>Back</Button>
                            <Button type="primary" onClick={this.goResult}>Book Now</Button>
                        </Space>
                    </div>

            </div>
            </div>
        );}
}

export default withRouter(BookingParkingLot);
