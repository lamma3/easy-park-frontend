import React, { Component } from 'react';
import { Typography, InputNumber, Space } from 'antd';

const { Text } = Typography;

class FilterBox extends Component {
    render() {
        return (
            <div>
                <div>
                    <input className="Search-box" type="text" placeholder="Search" />
                </div>
                <div className="Filter-box">
                    <Space>
                        <Text>Distance</Text>
                        <label htmlFor="distance">Within</label>

                        <select id="distance">
                            <option value="30">30 meters</option>
                            <option value="50">50 meters</option>
                            <option value="100">100 meters</option>
                        </select>
                    </Space><br />
                    <Space>
                        <Text>Hourly Rate</Text>
                        <InputNumber
                            defaultValue={0}
                            formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                            parser={value => value.replace(/\$\s?|(,*)/g, '')}
                        />
                        <Text>to</Text>
                        <InputNumber
                            defaultValue={100}
                            formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                            parser={value => value.replace(/\$\s?|(,*)/g, '')}
                        />
                    </Space><br />
                    <Space>
                        <Text>Electric Car?</Text>
                        <input type="radio" id="yes" name="has-electric" value="yes"></input>
                        <label htmlFor="yes">Yes</label>
                        <input type="radio" id="no" name="has-electric" value="no"></input>
                        <label htmlFor="no">No</label>
                    </Space><br />
                    <Space>
                        <Text>Rating</Text>
                        <select id="rate">
                            <option value="desc">From High to Low</option>
                            <option value="acse">From Low to High</option>
                        </select>
                    </Space><br />
                </div>
            </div>
        );
    }
}

export default FilterBox;