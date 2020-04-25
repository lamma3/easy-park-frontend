import React, { Component } from "react";
import "../css/ui.css";
import { Typography, Button, Space } from "antd";
import Loading from "./ui/Loading";
import { withRouter } from "react-router-dom";

const { Title, Text } = Typography;

class BookingResult extends Component {
  constructor(props, context) {
    super(props, context);

    this.goBack = this.goBack.bind(this);
    this.onRandomBookingResult = this.onRandomBookingResult.bind(this);
    this.state = {
      isLoaded: false,
      random_boolean: false,
    };
  }

  // Added random boolean for fake result
  componentDidMount() {
    window.addEventListener("load", this.onRandomBookingResult);
  }

  onRandomBookingResult() {
    this.setState({ random_boolean: Math.random() >= 0.5 });
    console.log(this.state.random_boolean);
  }

  goBack() {
    this.props.history.push("/");
  }

  render() {
    if (!this.state.random_boolean) {
      return (
        <div className="Info-content">
          <Title level={2}>Successfully Booked</Title>
          <Title level={3}>Parking Lot 1</Title>

          <div className="Info-button">
            <Space size="small">
              <Button type="primary" onClick={this.goBack}>
                OK
              </Button>
            </Space>
          </div>
        </div>
      );
    } else
      return (
        <div className="Info-content">
          <Title level={2}>Failed to Book</Title>
          <Title level={3}>Parking Lot 1</Title> <br />
          <Text className="Info-display-alert">Please try another parking lot</Text><br />
          
          <div className="Info-button">
            <Space size="small">
              <Button type="primary" onClick={this.goBack}>OK</Button>
            </Space>
          </div>
        </div>
      );
  }
}

export default withRouter(BookingResult);
