import React, { Component } from 'react';

import Item from './components/Item'

class Blogs extends Component {


    constructor(props) {
        super(props)


    }

    render() {

        const { postIndex } = window
        const { posts } = this.props


        return <div>
            {posts.map((post, i) => <Item key={i} post={post}/>)}
        </div>
    }
}

export default Blogs