import React, {Component, useState} from 'react';
import '../css/ui.css';
import { Typography, Button, Space } from 'antd';
import ParkingLotApi from '../apis/ParkingLotApi';
import { CarFilled , ThunderboltFilled } from '@ant-design/icons';
import Loading from './ui/Loading';
import { withRouter } from "react-router-dom";

const { Title, Text } = Typography;

class ParkingLotInfo extends Component {

    constructor(props, context) {
        super(props, context);

        this.goBack = this.goBack.bind(this);
        this.goBookingPage = this.goBookingPage.bind(this);
        this.isParkingLotFull = this.isParkingLotFull.bind(this);

        this.state = {
            isLoaded: false,
            isDisabledBooking: "",
            isOnClickDisabled: ""
        }
    }

    componentDidMount() {
        ParkingLotApi.getParkingLotById(this.props.match.params.id).then((response) => {
            let apiData = response.data;
            this.setState({
                isLoaded: true,
                list: apiData
            })
            this.isParkingLotFull();
        })

    }

    goBack() {
        this.props.history.goBack();
    }

    goBookingPage() {
        this.props.history.push(`/booking/${this.props.match.params.id}`);
    }
    
    isParkingLotFull(){
        const buttonType = this.state.list.availableCapacity === 0 ? 'primary disabled' : 'primary';
        const isOnClickDisabled = this.state.list.availableCapacity === 0 && this.state.list.availableChargeCapacity === 0 ? '' : this.goBookingPage;
        this.setState({
            isDisabledBooking: buttonType,
            isOnClickDisabled: isOnClickDisabled,
        });

    }



    render() {

        if (!this.state.isLoaded) {
            return <Loading />;
        } else return (
            <div className='Info-content'>
                <div className='Display-card'>
                    <Title level={3}>{this.state.list.name}</Title>
                    <div className="Display-container">
                        <div className="Info-title"><Text>Address: </Text></div>
                        <div className="Info-item"><Text>{this.state.list.address}</Text></div>
                        
                        <div className="Info-title"><Text>Hourly Rate: </Text></div>
                        <div className="Info-item"><Text>${this.state.list.hourRate}</Text></div>
                        
                        <div className="Info-title"><Text>Remaining Space: </Text></div>
                        <div className="Info-item">
                            <Text><CarFilled /> {this.state.list.availableCapacity}</Text><br/>
                            <Text><ThunderboltFilled /> {this.state.list.availableChargeCapacity}</Text>
                        </div> 
                        
                        <div className="Info-title"><Text>Rating: </Text></div>
                        <div className="Info-item"><Text>{this.state.list.rating.toFixed(1)} / 5.0</Text></div> 
                    </div>
                    <div className='Info-button'>
                        <Space size='large'>
                            <Button type="primary" style={{ background: "grey", borderColor: "grey" }} onClick={this.goBack}>Back</Button>
                            <Button type={this.state.isDisabledBooking} onClick={this.state.isOnClickDisabled}>Reserve a Space</Button>
                        </Space>
                    </div>
                </div>
                

            </div>
        );
    }
}

ParkingLotInfo.propTypes = {

};

export default withRouter(ParkingLotInfo);