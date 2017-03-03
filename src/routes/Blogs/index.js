import React, { Component } from 'react';

import Item from './components/Item'
import Posts from './components/Posts'
import Splash from './components/Splash'
import Socials from '../../components/Socials'

class Blogs extends Component {

    render() {
        const { posts } = this.props

        return <div>
            <Splash />
            <Posts posts={posts}/>
            <Socials />
        </div>
    }
}

export default Blogs