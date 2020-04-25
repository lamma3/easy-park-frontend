import React, { Component } from 'react';
import { Typography } from 'antd';
import PropTypes from 'prop-types';

const { Text } = Typography;

class FilterBox extends Component {
    render() {
        return (
            <div>
                <div>
                    <input className="Search-box" type="text" placeholder="Search" />
                </div>
                <div className="Filter-box">
                    <Text>Distance</Text><br />
                    <Text>Hourly Rate</Text><br />
                    <Text>Electric Car?</Text><br />
                    <Text>Rating</Text><br />
                </div>
            </div>
        );
    }
}

FilterBox.propTypes = {

};

export default FilterBox;