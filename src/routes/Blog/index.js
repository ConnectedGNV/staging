import React, { Component } from 'react';

class Blog extends Component {


    constructor(props) {
        super(props)


    }

    render() {

        const { posts, postIndex } = window


        return <div>
            {posts.map((post, i) => {
                if (postIndex === i) {
                    return <div key={i}>{post.date}</div>
                }
            })}
        </div>
    }
}

export default Blog