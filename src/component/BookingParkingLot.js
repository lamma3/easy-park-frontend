import React, { Component } from 'react';
import '../css/ui.css';
import { CarFilled, ThunderboltFilled } from '@ant-design/icons';
import { Typography, Button, Space, Radio } from 'antd';
import ParkingLotApi from '../apis/ParkingLotApi';
import Loading from './ui/Loading';
import { withRouter } from "react-router-dom";

const { Title, Text } = Typography;

class BookingParkingLot extends Component {
    constructor(props, context) {
        super(props, context);

        this.goResult = this.goResult.bind(this);
        this.goBack = this.goBack.bind(this);
        this.state = {
            isLoaded: false,
            value:"normalCar"
        }
    }

    componentDidMount() {
        ParkingLotApi.getParkingLotById(this.props.match.params.id).then((response) => {
            let apiData = response.data;
            this.setState({
                isLoaded: true,
                list: apiData
            })
            
            console.log(this.state);
        })
    }

    goResult(){
        this.props.history.push(`/result/${this.props.match.params.id}`);
    }

    goBack() {
        this.props.history.push(`/`);
    }

    onChange = e => {
        console.log('radio checked', e.target.value);
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
                            <Button type="primary" onClick={this.goBack}>BACK</Button>
                            <Button type="primary" onClick={this.goResult}>BOOK NOW</Button>
                        </Space>
                    </div>

            </div>
            </div>
        );}
}

export default withRouter(BookingParkingLot);
