import React, { Component } from 'react';
import '../css/ui.css';
import { Typography, Button, Space } from 'antd';
import ParkingLotApi from '../apis/ParkingLotApi';
import Loading from './ui/Loading';
import { withRouter } from "react-router-dom";

const { Title, Text } = Typography;

class BookingParkingLot extends Component {
    constructor(props, context) {
        super(props, context);

        this.goResult = this.goResult.bind(this);
        this.state = {
            isLoaded: false,
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
    render() {
        if (!this.state.isLoaded) {
            return <Loading />;
        } else return (
            <div className='Info-content'>
                    <Title level={2}>{this.state.list.name}</Title>
                    <Text className='Info-display-alert'>Remaining Space:</Text><br />
                    <Text className='Info-display-alert'>{this.state.list.availableCapacity}</Text> <br />

                    <div className='Info-button'>
                        <Space size='small'>
                            <Button type="primary" onClick={this.goResult}>Book Now!</Button>
                        </Space>
                    </div>

            </div>
        );}
}

export default withRouter(BookingParkingLot);
