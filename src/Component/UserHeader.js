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
        const user = this.props.fetchUser.find( user => user.id === this.props.id );

        if(!user)
        {
            return null;
        }
        
        return(
            <div>{user.name}</div>
        );
    };
};

const mapStateToProps = (state) => {
    return { user: state.user };
};

export default connect(mapStateToProps, {fetchUser})(UserHeader);