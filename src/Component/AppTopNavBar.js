import React, { Component } from 'react';
import { NavBar, Icon } from 'antd-mobile';

class AppTopNavBar extends Component {
    render() {
        return (
            <div className = "Nav-bar" style={{position: 'absolute', top: 0, flex: 1, alignSelf: 'stretch', right: 0, left: 0}}>
                <NavBar
                    mode="light"
                    icon={<Icon type="left" />}
                    onLeftClick={() => console.log('onLeftClick')}
                    rightContent={[
                        <Icon key="1" type="ellipsis" />,
                    ]}
                >EsayPark</NavBar>
            </div>
        );
    }
}

export default AppTopNavBar;