import React, { Component } from 'react';
import { Typography, Space, Button, Form, message } from 'antd';
import { Slider } from 'react-rangeslider';
import '../css/ui.css';
import 'react-rangeslider/lib/index.css'
import { GET_ALL_BY_SEARCH, FITLER_INPUT_ERROR_MESSAGE } from '../constant/constants';

const { Text } = Typography;

class FilterBox extends Component {

    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.handleRangeChange = this.handleRangeChange.bind(this);

        this.state = GET_ALL_BY_SEARCH;

    }

    componentDidMount() {
        // document.getElementById("inputMinHourRate").value = 0;
        // document.getElementById("inputMaxHourRate").value = 0;
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit() {
        if (parseInt(this.state.minHourRate) > parseInt(this.state.maxHourRate)) {
            message.error(FITLER_INPUT_ERROR_MESSAGE, 3);
            this.resetBorderColor('error');

        } else {
            this.props.onUpdate(this.state);
            this.resetBorderColor();
        }
    }

    handleReset() {
        document.getElementById("select_distance").selectedIndex = 0;
        document.getElementById("hasElectricCar_yes").checked = false;
        document.getElementById("hasElectricCar_no").checked = false;
        document.getElementById("select_rate").selectedIndex = 0;
        this.resetBorderColor();

        this.setState(() => GET_ALL_BY_SEARCH);
    }

    handleRangeChange() {
        this.setState((prevState) => { return { range: !prevState.range } });
    }

    resetBorderColor(value) {
        if (document.getElementById('inputMinHourRate') && document.getElementById('inputMaxHourRate')) {
            if (value === 'error') {
                document.getElementById("inputMinHourRate").style.borderColor = "red";
                document.getElementById("inputMaxHourRate").style.borderColor = "red";
            } else {
                document.getElementById("inputMinHourRate").style.borderColor = "#aaaaaa";
                document.getElementById("inputMaxHourRate").style.borderColor = "#aaaaaa";
            }
        }

    }

    render() {
        return (
            <div>
                <div className="Filter-box">
                    <Form
                        layout="horizontal"
                        initialValues="small"
                        size="small"
                        onReset={this.handleReset}>
                        <Form.Item label="Distance" style={{ fontWeight: 'bold' }}>
                            <div style={{ fontWeight: 'normal' }}>
                                <Space>Within
                                <select name="distance" id="select_distance" value={this.state.distance} onChange={this.handleChange}>
                                        <option value="0">No preference</option>
                                        <option value="400">400 m</option>
                                        <option value="600">600 m</option>
                                        <option value="800">800 m</option>
                                    </select>
                                </Space>
                            </div>
                        </Form.Item>
                        <Form.Item label="Hourly Rate" style={{ fontWeight: 'bold' }}>
                            <Space>
                                <div style={{ fontWeight: 'normal' }}>
                                    <select id="select_range" value={this.state.range} onChange={this.handleRangeChange}>
                                        <option value="false">No preference</option>
                                        <option value="true">Has preference</option>
                                    </select>
                                </div>

                                {this.state.range ?
                                    <div style={{ fontWeight: 'normal' }}>
                                        <Space>
                                            $ < input type="number" id="inputMinHourRate" name="minHourRate" min="0" max="999" onChange={this.handleChange} />
                                            <Text>to</Text>
                                            $ <input type="number" id="inputMaxHourRate" name="maxHourRate" min="0" max="999" onChange={this.handleChange} />
                                        </Space>
                                    </div>
                                    : <div></div>
                                }

                            </Space>
                        </Form.Item>
                        <Form.Item label="Electric Car?" style={{ fontWeight: 'bold' }}>
                            <div style={{ fontWeight: 'normal' }}>
                                <Space>
                                    <input type="radio" id="hasElectricCar_yes" name="hasElectricCar" value="true" onChange={this.handleChange}></input>
                                    <label htmlFor="yes" >Yes</label>
                                    <input type="radio" id="hasElectricCar_no" name="hasElectricCar" value="false" onChange={this.handleChange}></input>
                                    <label htmlFor="no">No</label>
                                </Space>
                            </div>
                        </Form.Item>
                        <Form.Item label="Rating" style={{ fontWeight: 'bold' }}>
                            <div style={{ fontWeight: 'normal' }}>
                                <select name="rate" id="select_rate" onChange={this.handleChange}>
                                    <option value="">No preference</option>
                                    <option value="desc">From High to Low</option>
                                    <option value="asc">From Low to High</option>
                                </select>
                            </div>
                        </Form.Item>
                        <Form.Item style={{ textAlign: 'center' }}>
                            <Space size="large">
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