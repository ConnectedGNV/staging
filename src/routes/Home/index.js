import React, { Component } from 'react';
import Splash from './components/Splash'
import Stats from './components/Stats'

class Home extends Component {
    render() {
        return <div>
            <Splash/>
            <Stats/>
        </div>
    }
}

export default Home