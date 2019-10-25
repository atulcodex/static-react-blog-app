import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../Actions';

class Postlist extends React.Component{

    componentDidMount()
    {
        this.props.fetchPosts();
    };

    render(){
        return(
            <div>
                <h2>Postlist</h2>
            </div>
        );
    };
};

export default connect(null, {fetchPosts})(Postlist);