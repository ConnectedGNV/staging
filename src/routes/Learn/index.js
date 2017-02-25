import React, { Component } from 'react';
import Logo from '../../components/Logo'

import css from './components/Splash.less'

class Learn extends Component {
    render() {
        return <div className={css.splash}>
            <Logo mode="medium"/>
        </div>
    }
}

export default Learn