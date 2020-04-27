import React, { Component } from "react";
import "../css/ui.css";
import { Typography, Button, Space } from "antd";
import ParkingLotApi from '../apis/ParkingLotApi';
import Loading from "./ui/Loading";
import { withRouter } from "react-router-dom";

const { Title, Text } = Typography;

class BookingResult extends Component {
  constructor(props, context) {
    super(props, context);

    this.goBack = this.goBack.bind(this);
    this.goRatingPage = this.goRatingPage.bind(this);
    this.onRandomBookingResult = this.onRandomBookingResult.bind(this);
    this.state = {
      isLoaded: false,
      random_boolean: false,
    };
  }

  // Added random boolean for fake result
  componentDidMount() {
    window.addEventListener("load", this.onRandomBookingResult);

    ParkingLotApi.getParkingLotById(this.props.match.params.id).then((response) => {
      let apiData = response.data;
      this.setState({
          isLoaded: true,
          list: apiData
      })
  })
  }

  onRandomBookingResult() {
    this.setState({ random_boolean: Math.random() >= 0.5 });
    console.log(this.state.random_boolean);
  }

  goBack() {
    this.props.history.push("/");
  }

  goRatingPage() {
    this.props.history.push(`/rating/${this.props.match.params.id}`);
  }

  render() {
    if (!this.state.isLoaded) {
      return <Loading />;
  } else if (!this.state.random_boolean) {
      return (
        
        <div className="Info-content">
          <Title level={3}>{this.state.list.name}</Title>
        <div className='Display-card '>
          <Text id='Booking-title'>Successfully Booked</Text>

          <div className="Info-button">
            <Space size="small">
              {/* <Button type="primary" onClick={this.goBack}>OK</Button> */}
              {/* Mock to rating page after book successfully */}
              <Button type="primary" onClick={this.goRatingPage}>OK</Button> 
            </Space>
          </div>
        </div>
        </div>
      );
    } else
      return (
        
        <div className="Info-content">
          <Title level={3}>{this.state.list.name}</Title> 
        <div className='Display-card'>
          <Text id='Booking-title'>Failed to Book</Text><br />
          <Text className="Info-display-alert">Please try another parking lot</Text><br />
          
          <div className="Info-button">
            <Space size="small">
              <Button type="primary" onClick={this.goBack}>OK</Button>
            </Space>
          </div>
        </div>
        </div>
      );
  }
}

export default withRouter(BookingResult);
