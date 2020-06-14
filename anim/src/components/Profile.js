import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Profile extends Component {
    render() {
        return (
            <div>
                <h3>Profile</h3>
            </div>
        )
    }
}

Profile.propTypes = {
    name: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    age: PropTypes.number
}

export default Profile;