import React, { Component } from 'react'
import css from './Splash.less'
import Petition from './Petition'
import Logo from '../../../components/Logo'
import Nav from '../../../components/Nav'

class Splash extends Component {
    render() {
        return <div className={css.splash}>

            <Logo />
            <Nav />
            <Petition />
        </div>
    }
}


export default Splash