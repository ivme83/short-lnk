import React            from 'react';
import { Accounts }     from 'meteor/accounts-base';
import { Meteor }       from 'meteor/meteor';

import browserHistory   from '../utils/History';

import { Links }        from '../api/links';
import LinksList        from './LinksList';


export default class LinkPage extends React.Component {
    onLogout() {
        Accounts.logout();
    }

    componentWillMount() {
        if (!Meteor.userId()) {
            browserHistory.replace('/');
        }
    }

    onSubmit(e) {
        const url = this.refs.url.value.trim();

        e.preventDefault();

        if (url) {
            Meteor.call('links.insert', url);
            this.refs.url.value = '';
        }
    }

    render() {
        return (
            <div>
                <h1>Your Links</h1>

                <button onClick={this.onLogout.bind(this)} >Logout</button>
                <LinksList />
                <p>Add Link</p>
                <form onSubmit={this.onSubmit.bind(this)} >
                    <input type="text" ref="url" placeholder="URL" />
                    <button>Add Link</button>
                </form>
            </div>
        );
    }
}