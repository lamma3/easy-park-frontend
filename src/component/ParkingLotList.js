import React, { Component } from 'react';
import { List, Badge } from 'antd-mobile';
import { DUMMY_PARKING_LOT_LIST } from '../constant/constants';
import ParkingLotBadge from './ui/ParkingLotBadge';


const Item = List.Item;

class ParkingLotList extends Component {
    render() {
        let parkingLotList = DUMMY_PARKING_LOT_LIST;
        return (
            <div>
                <List className="parking-lot-list">
                {parkingLotList.map((item, index) =>
                    <Item key={index} onClick={() => { }}
                    extra={<ParkingLotBadge number={item.avaliableSpace}/>}>
                        {item.parkingLotName}
                    </Item>
                )}
                </List>
            </div >
        );
    }
}

export default ParkingLotList;