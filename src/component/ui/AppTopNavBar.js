import React, { Component } from 'react';
import { NavBar, Icon } from 'antd-mobile';
import {  Button } from 'antd';
import { withRouter } from "react-router-dom";

class AppTopNavBar extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        return (
            <div className = "Nav-bar" >    
                <NavBar
                    mode="light"
                    icon={<Icon type="left" />}
                    onLeftClick={() => console.log('onLeftClick')}
                    rightContent={[
                        <Icon key="1" type="ellipsis" />,
                    ]}>
                    EasyPark</NavBar>
                    <Button onClick = {()=>{this.props.history.push('/history')}}>View Booking History</Button>
            </div>
           
        );
    }
}

export default withRouter(AppTopNavBar);