import React, { Component } from 'react';
import '../css/ParkingLotInfo.css';
import { Typography, Button, Space } from 'antd';
import ParkingLotApi from '../apis/ParkingLotApi';
import { CarFilled } from '@ant-design/icons';
import Loading from './ui/Loading';
import { withRouter } from "react-router-dom";

const { Title, Text } = Typography;

class ParkingLotInfo extends Component {

    constructor(props, context) {
        super(props, context);

        this.goBack = this.goBack.bind(this);

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
        })
    }

    goBack() {
        this.props.history.goBack();
    }

    render() {
        if (!this.state.isLoaded) {
            return <Loading />;
        } else return (
            <div className='Info-content'>
                <div className='Info-display'>
                    <Title level={3}>{this.state.list.name}</Title>
                    <Text className='detail'>Address: {this.state.list.address}</Text><br />
                    <Text className='detail'>Hourly Rate: ${this.state.list.hourlyRate}</Text><br />
                    <Text className='detail'>Remaining Space:</Text> <CarFilled /> {this.state.list.remainCapacity}<br />
                    <Text className='detail'>Rating: {this.state.list.rate}/5</Text><br />

                    <div className='Info-button'>
                        <Space size='small'>
                            <Button type="primary" onClick={this.goBack}>Back</Button>
                            <Button type="primary">Reserve a Space</Button>
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