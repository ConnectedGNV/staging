import React, { Component } from 'react';
import Splash from './components/Splash'
import Resources from './components/Resources'
import Press from './components/Press'

class Learn extends Component {
    render() {
        return <div>
            <Splash />
            <Resources />
            <Press />
        </div>
    }
}

export default Learn