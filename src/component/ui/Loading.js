import React, { Component } from 'react';

class Loading extends Component {
    render() {
        return (
                <div class="spinner">
                    <div class="spinner-cube1"></div>
                    <div class="spinner-cube2"></div>
                    <div class="loading-text">Loading...</div>
                </div>

        );
    }
}

export default Loading;