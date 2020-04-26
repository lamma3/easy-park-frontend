import React, { Component } from 'react';
import { Typography, InputNumber, Space, Button, Form } from 'antd';

const { Text } = Typography;

class FilterBox extends Component {
    formRef = React.createRef();

    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.handleMinHourRateChange = this.handleMinHourRateChange.bind(this);
        this.handleMaxHourRateChange = this.handleMaxHourRateChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleReset = this.handleReset.bind(this);

        this.state = {
            distance: 30,
            minHourRate: 0,
            maxHourRate: 100,
            hasElectricCar: null,
            rate: "desc"
        }
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
        console.log(event.target.name);
        event.preventDefault();
    }

    handleMinHourRateChange(value) {
        this.setState({ minHourRate: value });
    }

    handleMaxHourRateChange(value) {
        this.setState({ maxHourRate: value });
    }

    handleSubmit() {
        console.log(this.state.distance, this.state.minHourRate, this.state.maxHourRate, this.state.hasElectricCar, this.state.rate);
    }

    handleReset() {
        // document.getElementById("select_distance").selectedIndex = 0;
        // document.getElementById("inputMinHourRate").value = `$ 0`;
        // document.getElementById("inputMaxHourRate").value = `$ 100`;
        // document.getElementById("hasElectricCar_yes").checked = false;
        // document.getElementById("hasElectricCar_no").checked = false;
        // document.getElementById("select_rate").selectedIndex = 0;
        // this.setState = {
        //     distance: 30,
        //     minHourRate: 0,
        //     maxHourRate: 100,
        //     hasElectricCar: null,
        //     rate: "desc"
        // }
    }

    render() {
        return (
            <div>
                <div>
                    <input className="Search-box" type="text" placeholder="Search" />
                </div>
                <div className="Filter-box">
                    <Form
                        ref={this.formRef}
                        layout="horizontal"
                        initialValues="small"
                        size="small"
                        onReset={this.handleReset}>
                        <Form.Item label="Distance">
                            <select name="distance" id="select_distance" value={this.state.distance} onChange={this.handleChange}>
                                <option value="30">30 meters</option>
                                <option value="50">50 meters</option>
                                <option value="100">100 meters</option>
                            </select>
                        </Form.Item>
                        <Form.Item label="Hourly Rate">
                            <Space>
                                <InputNumber
                                    id="inputMinHourRate"
                                    defaultValue={0}
                                    formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                                    parser={value => value.replace(/\$\s?|(,*)/g, '')}
                                    onChange={this.handleMinHourRateChange}
                                />
                                <Text>to</Text>
                                <InputNumber
                                    id="inputMaxHourRate"
                                    defaultValue={100}
                                    formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                                    parser={value => value.replace(/\$\s?|(,*)/g, '')}
                                    onChange={this.handleMaxHourRateChange}
                                />
                            </Space>
                        </Form.Item>
                        <Form.Item label="Electric Car?">
                            <Space>
                                <input type="radio" id="hasElectricCar_yes" name="hasElectricCar" value="true" onChange={this.handleChange}></input>
                                <label htmlFor="yes">Yes</label>
                                <input type="radio" id="hasElectricCar_no" name="hasElectricCar" value="false" onChange={this.handleChange}></input>
                                <label htmlFor="no">No</label>
                            </Space>
                        </Form.Item>
                        <Form.Item label="Rating">
                            <select name="rate" id="select_rate" onChange={this.handleChange}>
                                <option value="desc">From High to Low</option>
                                <option value="acse">From Low to High</option>
                            </select>
                        </Form.Item>
                        <Form.Item>
                            <Space>
                                <Button type="primary" danger onClick={this.handleReset}>
                                    Reset
                                </Button>
                                <Button type="primary" onClick={this.handleSubmit}>
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