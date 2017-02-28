import React, { Component } from 'react';

class Blogs extends Component {


    constructor(props) {
        super(props)


    }

    render() {

        const { posts, postIndex } = window


        return <div>
            {posts.map((post) => {
                return <div key={i}>{post.title}</div>
            })}
        </div>
    }
}

export default Blogs