import React, { Component } from 'react';
import { List } from 'antd-mobile';
import ParkingLotBadge from './ui/ParkingLotBadge';
import ParkingLotApi from '../apis/ParkingLotApi';
import Loading from './ui/Loading';
import { withRouter } from "react-router-dom";
import GoogleMapReact from 'google-map-react';
import { GOOGLE_MAP_API_KEY } from '../constant/constants';

const Item = List.Item;

class ParkingLotList extends Component {

    constructor(props) {
        super(props);

        this.showResult = this.showResult.bind(this);

        this.state = {
            isLoaded: false,
            list: [],
            zoom: 15,
            center: {lat: 22.390411, lng: 114.204356},
            googleApiReference: null,
            markers: [],
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps !== this.props) {
            this.showResult();
        }
        if (prevState.googleApiReference !== this.state.googleApiReference ||
            prevState.list !== this.state.list ||
            prevState.center !== this.state.center) {
            this.updateMap();
        }
    }

    componentDidMount() {
        this.showResult();
    }

    showResult(){
        ParkingLotApi.getAllParkingLotList(this.props.distance,
            this.props.minHourRate, this.props.maxHourRate, 
            this.props.hasElectricCar, this.props.rate)
        .then((response) => {
            let apiData = response.data;
            this.setState({
                isLoaded: true,
                list: apiData
            })
        })
    }

    handleApiLoaded(map, maps) {
        this.setState(() => ({
            googleApiReference: {map, maps}
        }));
    }

    updateMap() {
        if (!this.state.googleApiReference) {
            return;
        }

        // reset markers
        let markers = [...this.state.markers];
        markers.map(marker => {
            marker.setMap(null);
            return marker;
        });

        // set markers
        const { map, maps } = this.state.googleApiReference;
        markers.push(new maps.Marker({
            position: {
                lat: this.state.center.lat,
                lng: this.state.center.lng,
            },
            map,
        }));
        this.state.list.forEach((place, index) => {
            markers.push(new maps.Marker({
                position: {
                    lat: place.latitude,
                    lng: place.longitude,
                },
                label: {color: "white", text: (index+1).toString()},
                map,
            }));
        });

        // update state
        this.setState(() => ({markers:markers}));
    }

    render() {
        const { center } = this.state;

        if (!this.state.isLoaded){
            return <Loading />; 
        }else return (
            <div>
                <div style={{ height: '50vh', width: '100%' }}>
                    <GoogleMapReact
                        bootstrapURLKeys={{ key: GOOGLE_MAP_API_KEY }}
                        defaultCenter={center}
                        defaultZoom={this.state.zoom}
                        yesIWantToUseGoogleMapApiInternals
                        onGoogleApiLoaded={({ map, maps }) => this.handleApiLoaded(map, maps)}
                    />
                </div>
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
