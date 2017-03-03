import React, { Component } from 'react';
import MediumSplash from '../../components/MediumSplash'
import Resources from './components/Resources'
import Press from './components/Press'
import LearnMore from '../../components/LearnMore'

import { container } from './components/LearnMore.less'
import { splash } from './components/Splash.less'

class Learn extends Component {
    render() {
        return <div>
            <MediumSplash className={splash}/>
            <LearnMore className={container}/>
            <Resources />
            <Press />
        </div>
    }
}

export default Learn