import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../Actions';

class Postlist extends React.Component{

    componentDidMount()
    {
        this.props.fetchPosts();
    };

    render(){
        console.log( this.props.posts );
        return(
            <div>
                <h2>Postlist</h2>
            </div>
        );
    };
};

const mapStateToProps = ( state ) => {
    return { posts: state.posts };
};

export default connect(mapStateToProps, {fetchPosts})(Postlist);