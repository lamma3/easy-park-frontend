import React, { Component } from 'react';
import { List } from 'antd-mobile';
import ParkingLotBadge from './ui/ParkingLotBadge';
import ParkingLotApi from '../apis/ParkingLotApi';
import Loading from './ui/Loading';
import { withRouter } from "react-router-dom";
import Geolocation from 'react-native-geolocation-service';
import GpsLocation from './GeoLocation'; 

const Item = List.Item;

class ParkingLotList extends Component {
        initialState = {
        distance: 0,
        minHourRate: 0,
        maxHourRate: 0,
        hasElectricCar: null,
        rate: null
    }

    constructor(props) {
        super(props);

        this.showResult = this.showResult.bind(this);

        this.state = {
            isLoaded: false,
            list: []
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps !== this.props) {
            console.log("update! ");
            this.showResult();
        }
    }

    componentDidMount() {
        console.log(this.props);
        this.showResult();
    }

    showResult(){
        ParkingLotApi.getAllParkingLotList(this.props.distance, this.props.minHourRate, this.props.maxHourRate, this.props.hasElectricCar, this.props.rate)
        .then((response) => {
            let apiData = response.data;
            this.setState({
                isLoaded: true,
                list: apiData
            })
        })
    }


    render() {
        if (!this.state.isLoaded){
            return <Loading />; 
        }else return (
            <div>
                {/* <GpsLocation /> */}
                <List className="Parking-lot-list">
                    {this.state.list.map((item, index) =>
                        <Item multipleLine key={index} onClick={() => {this.props.history.push(`/infos/${item.id}`);}}>
                            {item.name}
                            <ParkingLotBadge number={item.availableCapacity} />
                        </Item>
                    )}
                </List>
            </div >
        );
    }
}
export default withRouter(ParkingLotList);
