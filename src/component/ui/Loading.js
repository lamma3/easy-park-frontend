import React, { Component } from 'react';

class Loading extends Component {
    render() {
        return (
                <div className="spinner">
                    <div className="spinner-cube1"></div>
                    <div className="spinner-cube2"></div>
                    <div className="loading-text">Loading...</div>
                </div>

        );
    }
}

export default Loading;