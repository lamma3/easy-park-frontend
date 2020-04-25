import React, { Component } from 'react';
import { List } from 'antd-mobile';
import ParkingLotBadge from './ui/ParkingLotBadge';
import ParkingLotApi from '../apis/ParkingLotApi';
import Loading from './ui/Loading';
import { withRouter } from "react-router-dom";


const Item = List.Item;

class ParkingLotList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isLoaded: false,
            list: []
        }
    }

    componentDidMount() {
        ParkingLotApi.getAllParkingLotList().then((response) => {
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
                <List className="parking-lot-list">
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
