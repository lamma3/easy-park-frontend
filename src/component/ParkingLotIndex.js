import React, { Component } from 'react';
import { FilterOutlined, CloseOutlined } from '@ant-design/icons';
import '../css/ui.css';
import FilterBox from './FilterBox';
import ParkingLotList from './ParkingLotList';
import { FAKE_LOCATION } from '../constant/constants';

class ParkingLotIndex extends Component {

    constructor(props) {
        super(props);

        this.onUpdate = this.onUpdate.bind(this);
        this.onOpenChange = this.onOpenChange.bind(this);
        this.getLocation = this.getLocation.bind(this);


        this.state = {
            distance: 0,
            minHourRate: 0,
            maxHourRate: 0,
            hasElectricCar: null,
            rate: null,
            latitude: 0,
            longitude: 0,
            isShowResult: false,
            open: false
        }

    }

    componentDidMount() {
        this.getLocation();
        this.setState(() => {
            return {
                distance: 0,
                minHourRate: 0,
                maxHourRate: 0,
                hasElectricCar: false,
                rate: "",
                isShowResult: true
            }
        });
    }

    getLocation() {
        // if (navigator.geolocation) {
        //   navigator.geolocation.getCurrentPosition((position) => {
        //     this.setState(() => {
        //         return {
        //             latitude: position.coords.latitude,
        //             longitude: position.coords.longitude
        //         }
        //     })
        //   });
        // }
        this.setState(() => {
            return {
                latitude: FAKE_LOCATION.lat,
                longitude: FAKE_LOCATION.lng
            }
        })
    }

    onOpenChange() {
        this.setState((prevState) => { return { open: !prevState.open } });
    }

    onUpdate(value) {
        this.onOpenChange();
        this.getLocation();
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
                <div>
                    <div className="floating-btn" onClick={this.onOpenChange}>
                        {
                            this.state.open ?
                                <CloseOutlined /> : <FilterOutlined />
                        }

                    </div>
                </div>
                {
                    this.state.open ?
                        <div>
                            <div className="Filter-box-bg" onClick={this.onOpenChange}></div>
                            <FilterBox onUpdate={this.onUpdate} />
                        </div>
                        : <div></div>
                }

                {/* <FilterBox onUpdate={this.onUpdate} /> */}
                {
                    this.state.isShowResult ?
                        <ParkingLotList distance={this.state.distance}
                            latitude={this.state.latitude}
                            longitude={this.state.longitude}
                            minHourRate={this.state.minHourRate}
                            maxHourRate={this.state.maxHourRate}
                            hasElectricCar={this.state.hasElectricCar}
                            rate={this.state.rate}
                            isLoad={false}
                        /> : <div></div>
                }
            </div >
        );
    }
}

ParkingLotIndex.propTypes = {

};

export default ParkingLotIndex;