import React, { Component } from 'react';
import { List } from 'antd-mobile';
import { DUMMY_PARKING_LOT_LIST } from '../constant/constants';
import ParkingLotBadge from './ui/ParkingLotBadge';
import ParkingLotApi from '../apis/ParkingLotApi';


const Item = List.Item;

class ParkingLotList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            list: []
        }
    }

    componentDidMount(){
        ParkingLotApi.getAllParkingLotList().then((response)=>{
            this.setState({
                list: response.data
            })
            console.log(this.state.list);
        })
    }

    render() {
        let parkingLotList = DUMMY_PARKING_LOT_LIST;
        return (
            <div>
                <List className="parking-lot-list">
                    {this.state.list.map((item, index) =>
                        <Item multipleLine key={index} onClick={() => { }}
                            >
                            {item.parkingLotName}
                            <ParkingLotBadge number={item.availableCapacity} />
                        </Item>
                    )}
                </List>
            </div >
        );
    }
}

export default ParkingLotList;