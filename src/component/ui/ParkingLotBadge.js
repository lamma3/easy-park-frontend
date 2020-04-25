import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ParkingLotBadge extends Component {

    render() {
        const avaliableNumber = this.props.number;
        if (avaliableNumber === 0) {
            return (
                <div className='Parking-lot-badge' style={{ backgroundColor: '#EC7063' }}>
                    {this.props.number}
                </div>
            );
        } else return (
            <div className='Parking-lot-badge' style={{ backgroundColor: '#21b68a' }}>
                {this.props.number}
            </div>
        );
    }
}

ParkingLotBadge.propTypes = {
    number: PropTypes.number
};

export default ParkingLotBadge;