import React, { Component } from 'react';
import '../css/ui.css';
import PropTypes from 'prop-types';
import FilterBox from './FilterBox';
import ParkingLotList from './ParkingLotList';

class ParkingLotIndex extends Component {

    constructor(props) {
        super(props);

        this.onUpdate = this.onUpdate.bind(this);

        this.state = {
            distance: 0,
            minHourRate: 0,
            maxHourRate: 0,
            hasElectricCar: null,
            rate: null,
            isShowResult: false
        }

    }

    onUpdate(value) {
        this.setState(() => {
            return {
                distance: parseInt(value.distance),
                minHourRate: parseInt(value.minHourRate),
                maxHourRate: parseInt(value.maxHourRate),
                hasElectricCar: value.hasElectricCar,
                rate: value.rate,
                isShowResult: true
            }
        })
    }

    render() {
        return (
            <div>
                <FilterBox onUpdate={this.onUpdate} />
                {
                    this.state.isShowResult ?
                        <ParkingLotList distance={this.state.distance}
                            minHourRate={this.state.minHourRate}
                            maxHourRate={this.state.maxHourRate}
                            hasElectricCar={this.state.hasElectricCar}
                            rate={this.state.rate}
                        /> : <div></div>
                }
            </div>
        );
    }
}

ParkingLotIndex.propTypes = {

};

export default ParkingLotIndex;