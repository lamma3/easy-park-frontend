import React, { Component } from 'react';
import '../css/ParkingLotInfo.css';
import { Typography, Button, Space } from 'antd';
import PropTypes from 'prop-types';
import { CarFilled } from '@ant-design/icons';

const { Title, Text } = Typography;

class ParkingLotInfo extends Component {
    render() {
        return (
            <div className='Info-content'>
                <div>
                    <Title>Name</Title>
                    <Text className='detail'>Address:</Text><br />
                    <Text className='detail'>Hourly Rate:</Text><br />
                    <Text className='detail'>Remaining Space</Text><CarFilled />100<br />
                </div>
                <div className='Info-button'>
                    <Space size='small'>
                        <Button type="primary">Back</Button>
                        <Button type="primary">Reserve a Space</Button>
                    </Space>
                </div>
            </div>
        );
    }
}

ParkingLotInfo.propTypes = {

};

export default ParkingLotInfo;