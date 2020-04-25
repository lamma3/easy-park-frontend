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
        ParkingLotApi.getParkingLotById(1).then((response) => {
            let apiData = response.data;
            this.setState({
                isLoaded: true,
                list: apiData
            })
        })
    }

    goResult(){
        this.props.history.push(`/result/${this.props.match.params.id}`);
    }
    render() {
        return(
            <div className='Info-content'>
                    <Title level={2}>Parking Lot 1</Title>
                    <Text className='Info-display-alert'>Remaining Space:</Text><br />
                    <Text className='Info-display-alert'>30</Text> <br />

                    <div className='Info-button'>
                        <Space size='small'>
                            <Button type="primary" onClick={this.goResult}>Book Now!</Button>
                        </Space>
                    </div>

            </div>
        )}
}

export default withRouter(BookingParkingLot);
