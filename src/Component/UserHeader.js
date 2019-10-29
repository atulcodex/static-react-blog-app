import React from 'react';
import { fetchUser } from '../Actions';
import { connect } from 'react-redux';

class UserHeader extends React.Component{

    componentDidMount()
    {
        this.props.fetchUser(this.props.userId);
    }

    render()
    {
        return(
            <div>
                User Name
            </div>
        );
    };
};

export default connect(null, {fetchUser})(UserHeader);