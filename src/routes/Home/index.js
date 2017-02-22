import React, { Component } from 'react';
import Splash from './components/Splash'
import Stats from './components/Stats'
import TakeAction from './components/TakeAction'
import Florida from './components/Florida'

class Home extends Component {
    render() {
        return <div>
            <Splash/>
            <Stats/>
            <TakeAction/>
            <Florida/>
        </div>
    }
}

export default Home