import React, { Component } from 'react';
import { Typography, Space, Button, Form } from 'antd';
import '../css/ui.css';
import {GET_ALL_BY_SEARCH} from '../constant/constants';

const { Text } = Typography;

class FilterBox extends Component {

    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleReset = this.handleReset.bind(this);

        this.state = GET_ALL_BY_SEARCH;

    }

    componentDidMount() {
        document.getElementById("inputMinHourRate").value = 0;
        document.getElementById("inputMaxHourRate").value = 0;
        document.getElementById("hasElectricCar_yes").disabled = true;
        document.getElementById("hasElectricCar_no").checked = true;
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit() {
        console.log(this.state.distance, this.state.minHourRate, this.state.maxHourRate, this.state.hasElectricCar, this.state.rate);
        this.props.onUpdate(this.state)
    }

    handleReset() {
        console.log(document.getElementById("inputMinHourRate").defaultValue);
        document.getElementById("select_distance").selectedIndex = 0;
        document.getElementById("inputMinHourRate").value = 0;
        document.getElementById("inputMaxHourRate").value = 0;
        // document.getElementById("hasElectricCar_yes").checked = false;
        document.getElementById("hasElectricCar_yes").disabled = true;
        document.getElementById("hasElectricCar_no").checked = true;
        document.getElementById("select_rate").selectedIndex = 0;

        this.setState(() => GET_ALL_BY_SEARCH);
        console.log(this.state.distance, this.state.minHourRate, this.state.maxHourRate, this.state.hasElectricCar, this.state.rate);

    }

    render() {
        return (
            <div>
                <div>
                    <input className="Search-box" type="text" placeholder="Search" />
                </div>
                <div className="Filter-box">
                    <Form
                        layout="horizontal"
                        initialValues="small"
                        size="small"
                        onReset={this.handleReset}>
                        <Form.Item label="Distance">
                            <select name="distance" id="select_distance" value={this.state.distance} onChange={this.handleChange}>
                                <option value="0">No preference</option>
                                <option value="100">100 meters</option>
                                <option value="150">150 meters</option>
                                <option value="300">300 meters</option>
                            </select>
                        </Form.Item>
                        <Form.Item label="Hourly Rate">
                            <Space>
                                $ <input type="number" id="inputMinHourRate" name="minHourRate" min="0" max="999" onChange={this.handleChange} />
                                <Text>to</Text>
                                $ <input type="number" id="inputMaxHourRate" name="maxHourRate" min="0" max="999" onChange={this.handleChange} />
                            </Space>
                        </Form.Item>
                        <Form.Item label="Electric Car?">
                            <Space>
                                <input type="radio" id="hasElectricCar_yes" name="hasElectricCar" value="true" onChange={this.handleChange}></input>
                                <label htmlFor="yes" >Yes</label>
                                <input type="radio" id="hasElectricCar_no" name="hasElectricCar" value="false" onChange={this.handleChange}></input>
                                <label htmlFor="no">No</label>
                            </Space>
                        </Form.Item>
                        <Form.Item label="Rating">
                            <select name="rate" id="select_rate" onChange={this.handleChange}>
                                <option value="">No preference</option>
                                <option value="desc">From High to Low</option>
                                <option value="asc">From Low to High</option>
                            </select>
                        </Form.Item>
                        <Form.Item>
                            <Space>
                                <Button type="primary" danger onClick={this.handleReset}>
                                    Reset
                                </Button>
                                <Button type="primary" onClick={() => { this.handleSubmit(); }}>
                                    Search
                                </Button>
                            </Space>
                        </Form.Item>
                    </Form>
                </div>

            </div>
        );
    }
}

export default FilterBox;