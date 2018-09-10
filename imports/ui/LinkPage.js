import React from 'react';
import browserHistory from '../utils/History';


export default class LinkPage extends React.Component {
    onLogout() {
        browserHistory.push('/');
    }

    render() {
        return (
            <div>
                <h1>Links</h1>

                <button onClick={this.onLogout.bind(this)} >Logout</button>
            </div>
        );
    }
}