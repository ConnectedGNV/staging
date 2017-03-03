import React, { Component } from 'react';

import Post from './components/Post'
import MediumSplash from '../../components/MediumSplash'
import Socials from '../../components/Socials'

class Blog extends Component {

    render() {

        const {posts} = this.props

        return <div>
            <MediumSplash />
            <Post posts={posts}/>
            <Socials />
        </div>
    }
}

export default Blog