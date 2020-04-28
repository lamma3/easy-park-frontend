import React, { Component } from "react";
import { Button } from "antd-mobile";

export default class GpsLocation extends Component {
  constructor(props) {
    super(props);

    this.getLocation = this.getLocation.bind(this);
  }

  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        // console.log(position.coords.latitude);
        // console.log(position.coords.longitude);
      });
    }
  }

  render() {
    return (
      <div>
        <Button onClick={this.getLocation}>GPS LOCATION</Button>
      </div>
    );
  }
}
