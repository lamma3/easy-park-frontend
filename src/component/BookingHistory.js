import React, { Component } from 'react'
import { withRouter } from "react-router-dom";
import '../css/ui.css';
import { Typography, Button, Space } from 'antd';
const { Title, Text } = Typography;
class BookingHistory extends Component {

 constructor(props) {
     super(props)
 

     this.goBack = this.goBack.bind(this);
     this.goRatingPage = this.goRatingPage.bind(this);

     this.state = {
        isLoaded: false
     }
 }

 componentDidMount(){}
 
 goBack() {
    this.props.history.push('/');
}

goRatingPage() {
    this.props.history.push(`/rating/${this.props.match.params.id}`);
  }


    render() {
        return (
            <div className='Info-content'>
                 <div className='Display-card'>
                 <Title level={3}>Booking History</Title>
                 <div class="Display-container">
                        <div class="Info-title"><Text>Booking ID: </Text></div>
                        <div class="Info-item"><Text>1</Text></div>

                        <div class="Info-title"><Text>Parking-lot Name: </Text></div>
                        <div class="Info-item"><Text>A</Text></div>

                        <div class="Info-title"><Text>Parking-lot Address: </Text></div>
                        <div class="Info-item"><Text>AddressA</Text></div>

                        <div class="Info-title"><Text>Booking Status: </Text></div>
                        <div class="Info-item"><Text>Reserved</Text></div>

                        
                   
                    </div>
                 <div className='Info-button'>
                        <Space size='small'>
                            <Button type="primary" onClick={this.goBack}>Back</Button>
                            <Button onClick={this.goRatingPage}> Rate</Button>
                        </Space>
                    </div>
                 </div>
                 
            </div>
        )
    }
}

export default withRouter(BookingHistory);