import React, { Component } from 'react';
import { Drawer } from 'antd-mobile';
import { Button } from 'antd';
import { FilterOutlined } from '@ant-design/icons';
import '../css/ui.css';
import PropTypes from 'prop-types';
import FilterBox from './FilterBox';
import ParkingLotList from './ParkingLotList';

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

    getLocation() {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition((position) => {
            this.setState(() => {
                return {
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude
                }
            })
          });
        }
      }

    onOpenChange() {
        this.setState((prevState) => { return { open: !prevState.open } });
    }

    onUpdate(value) {
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
        const sidebar = (<FilterBox onUpdate={this.onUpdate} />);
        return (
            <div>
                <div>
                    <input className="Search-box" type="text" placeholder="Search" />
                    <Button onClick={this.onOpenChange}><FilterOutlined /></Button>
                </div>
                {
                    this.state.open ?
                        <Drawer
                            className="my-drawer"
                            style={{ minHeight: document.documentElement.clientHeight }}
                            enableDragHandle
                            position="right"
                            contentStyle={{ textAlign: 'center' }}
                            sidebar={sidebar}
                            open={this.state.open}
                            onOpenChange={this.onOpenChange}
                        ></Drawer> : <div></div>
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
                        /> : <div></div>
                }
            </div>
        );
    }
}

ParkingLotIndex.propTypes = {

};

export default ParkingLotIndex;