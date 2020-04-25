import React, { Component } from 'react';
import { NavBar, Icon } from 'antd-mobile';

class AppTopNavBar extends Component {
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
            </div>
        );
    }
}

export default AppTopNavBar;