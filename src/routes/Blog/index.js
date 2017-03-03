import React, { Component } from 'react';

import Post from './components/Post'
import Splash from './components/Splash'
import Socials from '../../components/Socials'

class Blog extends Component {

    render() {

        const {posts} = this.props

        return <div>
            <Splash />
            <Post posts={posts}/>
            <Socials />
        </div>
    }
}

export default Blog