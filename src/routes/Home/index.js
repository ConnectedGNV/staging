import React, { Component } from 'react';
import Splash from './components/Splash'
import Stats from './components/Stats'
import TakeAction from './components/TakeAction'
import Florida from './components/Florida'
import Socials from './components/Socials'
import Citations from './components/Citations'

class Home extends Component {
    render() {
        return <div>
            <Splash/>
            <Stats/>
            <TakeAction/>
            <Florida/>
            <Socials/>
            <Citations/>
        </div>
    }
}

export default Home