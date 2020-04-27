import React, { Component } from 'react';
import { NavBar, Icon } from 'antd-mobile';
import {  Button } from 'antd';
import { withRouter } from "react-router-dom";
import { ScheduleTwoTone } from '@ant-design/icons';

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
                        <ScheduleTwoTone key="1" type="ellipsis" onClick = {()=>{this.props.history.push('/history')}}/>,
                    ]}>
                    EasyPark</NavBar>
               
            </div>
           
        );
    }
}

export default withRouter(AppTopNavBar);