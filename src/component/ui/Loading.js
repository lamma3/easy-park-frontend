import React, { Component } from 'react';
import { Spin } from 'antd';

class Loading extends Component {
    render() {
        return (
            <div className='Loading'>
                <Spin tip="Loading..." />
            </div>
        );
    }
}

export default Loading;