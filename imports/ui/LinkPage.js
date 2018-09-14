import React            from 'react';
import { Meteor }       from 'meteor/meteor';

import browserHistory   from '../utils/History';

import LinksList        from './LinksList';
import PrivateHeader    from './PrivateHeader';
import AddLink          from './AddLink';
import LinksListFilters from './LinksListFilters';

export default class LinkPage extends React.Component {

    componentWillMount() {
        if (!Meteor.userId()) {
            browserHistory.replace('/');
        }
    }

    render() {
        return (
            <div>
                <PrivateHeader title="Your Links" />
                <LinksListFilters />
                <AddLink />
                <LinksList />
            </div>
        );
    }
}