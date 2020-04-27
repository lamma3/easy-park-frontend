import React, { Component } from "react";
import "../css/ui.css";
import { Typography, Button, Space } from "antd";
import ParkingLotApi from '../apis/ParkingLotApi';
import Loading from "./ui/Loading";
import { withRouter } from "react-router-dom";
import { StarOutlined, StarFilled } from '@ant-design/icons';
import Rating from 'react-rating';

const { Title, Text } = Typography;

class RatingPage extends Component {
  constructor(props, context) {
    super(props, context);

    this.goBack = this.goBack.bind(this);
    this.onRatingChange = this.onRatingChange.bind(this);
    this.state = {
      isLoaded: false,
      random_boolean: false,
    };
  }

  componentDidMount() {
    ParkingLotApi.getParkingLotById(this.props.match.params.id).then((response) => {
      let apiData = response.data;
      this.setState({
          isLoaded: true,
          list: apiData,
          ratingResult: "",
          rating: 3,
      })
  })
  }

  goBack() {
    const parkingLotId = this.props.match.params.id;
    ParkingLotApi.postParkingRatingById(parkingLotId, this.state.rating).then((response) => {
      let apiResponse = response.data;
      if(apiResponse.status === 201) {
        this.setState({ ratingResult: "Success" })
      }else {
        this.setState({ ratingResult: "Failure"})
      }
    })

    if(this.state.ratingResult === "Success") {
      alert("Thanks for your rating!")
      this.props.history.push("/");
    } else if(this.state.ratingResult === "Failure") {
      alert("Something wrong with your network, please submit again");
    }
    
  }

  onRatingChange(rate) {
    alert(rate); //apply api here
    this.setState({ rating: rate });
  }

  render() {
    if (!this.state.isLoaded) {
      return <Loading />;
  } else if (!this.state.random_boolean) {
      return (
        <div className="Info-content">
          <Title level={2}>How do you think your experience</Title>
          <Title level={2}>in {this.state.list.name} ?</Title>

          <div className="Rating-stars">
              <Rating
                initialRating={3}
                emptySymbol={<StarOutlined style={{ fontSize: '50px', color: '#FFDF00', padding: '0 5px'}}/>}
                fullSymbol={<StarFilled style={{ fontSize: '50px', color: '#FFDF00', padding: '0 5px'}}/>}
                onChange={(rate) => this.onRatingChange(rate)}
              />
          </div>
          <div className="Info-button">
            <Space size="small">
              <Button type="primary" onClick={this.goBack}>Submit</Button>
            </Space>
          </div>
        </div>
      );
    }
  }
}

export default withRouter(RatingPage);
