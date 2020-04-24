import React, { Component } from 'react';
import { List, Badge } from 'antd-mobile';

const Item = List.Item;

class ParkingLotList extends Component {
    render() {
        return (
            <div>
                <List className="parking-lot-list">
                    <Item
                        extra={<Badge size='large' text="20" style={{ marginLeft: 12, padding: '0 3px', backgroundColor: '#21b68a', borderRadius: 2 }} />}
                        onClick={() => { }}>
                        科學園3期停車場
                    </Item>
                    <Item
                        extra={<Badge size='large' text="20" style={{ marginLeft: 12, padding: '0 3px', backgroundColor: '#21b68a', borderRadius: 2 }} />}
                        onClick={() => { }}>
                        科學園2期停車場
                    </Item>
                    <Item
                        extra={<Badge size='large' text="0" style={{ marginLeft: 12, padding: '0 3px', backgroundColor: '#EC7063', borderRadius: 2 }} />}
                        onClick={() => { }}>
                        科學園3W停車場
                    </Item>
                </List>
            </div>
        );
    }
}

export default ParkingLotList;