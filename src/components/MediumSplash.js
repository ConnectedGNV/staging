import React, { Component } from 'react';
import Logo from './Logo'
import Nav from './Nav'

import css from './MediumSplash.less'

class Splash extends Component {

    static defaultProps = {
        className: css.splash
    }

    render() {
        return <div className={this.props.className}>
            <Logo mode="medium"/>
            <Nav />
        </div>
    }
}

export default Splash