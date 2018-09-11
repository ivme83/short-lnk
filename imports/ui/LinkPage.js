import React            from 'react';
import { Accounts }     from 'meteor/accounts-base';
import { Meteor }       from 'meteor/meteor';

import browserHistory   from '../utils/History';


export default class LinkPage extends React.Component {
    onLogout() {
        Accounts.logout();
    }

    componentWillMount() {
        if (!Meteor.userId()) {
            browserHistory.replace('/');
        }
    }

    render() {
        return (
            <div>
                <h1>Your Links</h1>

                <button onClick={this.onLogout.bind(this)} >Logout</button>
            </div>
        );
    }
}