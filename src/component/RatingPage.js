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
          list: apiData
      })
  })
  }

  goBack() {
    this.props.history.push("/");
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
                onChange={(rate) => alert(rate)}
              />
          </div>
          <div className="Info-button">
            <Space size="small">
              <Button type="primary" onClick={this.goBack}>OK</Button>
            </Space>
          </div>
        </div>
      );
    }
  }
}

export default withRouter(RatingPage);
