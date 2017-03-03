import React, { Component } from 'react';

import Item from './Item'
import css from './Posts.less'

class Posts extends Component {
    render() {

        const { posts } = this.props


        return <div className={css.container}>
            <div className={css.inner}>
                {posts.map((post, i) => <Item key={i} post={post}/>)}
            </div>
        </div>
    }
}

export default Posts