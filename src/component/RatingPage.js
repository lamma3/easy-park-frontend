import React, { Component } from "react";
import "../css/ui.css";
import { Typography, Button, Space, message } from "antd";
import ParkingLotApi from '../apis/ParkingLotApi';
import Loading from "./ui/Loading";
import { withRouter } from "react-router-dom";
import { StarOutlined, StarFilled } from '@ant-design/icons';
import Rating from 'react-rating';
import { HTTP_STATUS_CREATED, THANK_YOU_VOTING_MESSAGE, VOTING_ERROR_MESSAGE, INITIAL_VOTING_STAR_NUMBER} from '../constant/constants';
import Cookies from 'js-cookie';

const { Title } = Typography;

class RatingPage extends Component {
  constructor(props, context) {
    super(props, context);

    this.goBack = this.goBack.bind(this);
    this.onRatingChange = this.onRatingChange.bind(this);
    this.state = {
      isLoaded: false,
      random_boolean: false,
      rating: INITIAL_VOTING_STAR_NUMBER,
    };
  }

  componentDidMount() {
    ParkingLotApi.getParkingLotById(this.props.match.params.id, this.state.rating).then((response) => {
      let apiData = response.data;
      this.setState({
          isLoaded: true,
          list: apiData
      })
  })
  }

  goBack() {
    const parkingLotId = this.props.match.params.id;
    ParkingLotApi.postParkingRatingById(parkingLotId, this.state.rating).then((response) => {
      // console.log(response.status);
      if(response.status === HTTP_STATUS_CREATED) {
        message.success(THANK_YOU_VOTING_MESSAGE, 3);
        var bookingList = JSON.parse(Cookies.get("bookingList"));
         Cookies.set("bookingList",bookingList.filter((id)=>id !== this.props.location.state.bookingId));
        
        this.props.history.push("/");
      }else {
        message.error(VOTING_ERROR_MESSAGE, 3);
      }
    })
    
  }

  onRatingChange(rate) {
    this.setState(() => ({ rating: rate}));
  }

  componentDidUpdate(preProps, prevState) {
    if(prevState.rating !== this.state.rating) {
      this.setState({ rating: this.state.rating });
    }
  }

  render() {
    if (!this.state.isLoaded) {
      return <Loading />;
  } else if (!this.state.random_boolean) {
      return (
        <div className="Info-content">
          <Title level={4}>How do you think your experience</Title>
          <Title level={4}>in {this.state.list.name} ?</Title>

          <div className="Rating-stars">
              <Rating
                initialRating={this.state.rating}
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
