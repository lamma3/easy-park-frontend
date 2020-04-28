import React, { Component } from 'react';
import { NavBar } from 'antd-mobile';
import { withRouter } from "react-router-dom";
import { ScheduleTwoTone, HomeOutlined } from '@ant-design/icons';
import logo from '../../images/easyparkIcon.png';

class AppTopNavBar extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        return (
            <div className = "Nav-bar" >    
                <NavBar className = "Nav-bar-container"
                    mode="light"
                    icon={<HomeOutlined style={{ fontSize: '30px' }} onClick={() => {this.props.history.push('/')}} />}
                    rightContent={[
                        <ScheduleTwoTone key="1" type="ellipsis" style={{ fontSize: '30px' }} onClick = {()=>{this.props.history.push('/history')}}/>,
                    ]}>
                    <div id="nav-title">
                        <img src={logo} height="40px" />
                        EasyPark</div></NavBar>
               
            </div>
           
        );
    }
}

export default withRouter(AppTopNavBar);