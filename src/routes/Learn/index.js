import React, { Component } from 'react';
import Splash from '../Blog/Splash'
import Resources from './components/Resources'
import Press from './components/Press'
import LearnMore from '../../components/LearnMore'

import { container } from './components/LearnMore.less'

class Learn extends Component {
    render() {
        return <div>
            <Splash />
            <LearnMore className={container}/>
            <Resources />
            <Press />
        </div>
    }
}

export default Learn