import React, { Component } from 'react'
import css from './Splash.less'
import Petition from './Petition'
import Logo from '../../../components/Logo'

class Splash extends Component {
    render() {
        return <div className={css.splash}>

            <Logo />
            <Petition />
        </div>
    }
}


export default Splash