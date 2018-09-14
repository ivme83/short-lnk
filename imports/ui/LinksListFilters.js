import React        from 'react';
import { Tracker }  from 'meteor/tracker';
import { Session }  from 'meteor/session'

export default class LinksListFilters extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showVisible: true
        };
    }

    componentDidMount() {
        this.visibilityTracker = Tracker.autorun(() => {
            this.setState({
                showVisible: Session.get('showVisible')
            });
        });
    }

    componentWillUnmount() {
        this.visibilityTracker.stop();
    }

    render() {
        return (
            <div>
                <label>
                    <input
                        type="checkbox"
                        checked={!this.state.showVisible}
                        onChange={(e) => {
                            Session.set('showVisible', !e.target.checked)
                        }}
                    />
                    show hidden links
                </label>
            </div>
        );
    }
}