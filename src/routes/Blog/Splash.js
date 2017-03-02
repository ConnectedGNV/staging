import React, { Component } from 'react';
import Logo from '../../components/Logo'
import Nav from '../../components/Nav'

import css from './Splash.less'

class Splash extends Component {
    render() {
        return <div className={css.splash}>
            <Logo mode="medium"/>
            <Nav />
        </div>
    }
}

export default Splash