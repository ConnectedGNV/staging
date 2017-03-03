import React, { Component } from 'react';

import Item from './components/Item'
import Posts from './components/Posts'
import MediumSplash from '../../components/MediumSplash'
import Socials from '../../components/Socials'

class Blogs extends Component {

    render() {
        const { posts } = this.props

        return <div>
            <MediumSplash />
            <Posts posts={posts}/>
            <Socials />
        </div>
    }
}

export default Blogs