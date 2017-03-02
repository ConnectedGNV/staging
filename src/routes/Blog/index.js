import React, { Component } from 'react';
import css from './Blog.less'

import Post from './Post'
import Splash from './Splash'

class Blog extends Component {

    render() {

        const {posts} = this.props

        return <div className={css.container}>
            <Splash />
            <Post posts={posts}/>
        </div>
    }
}

export default Blog