import React, { Component } from 'react'
import css from './Splash.less'
import Petition from './Petition'

class Splash extends Component {
    render() {
        return <div className={css.splash}>
            <div className={css['logo-container']}>
                <div className={css['logo-content']}>
                    <div className={css.logo}>
                        <div className={css['logo-inner']}>
                            <img src="/public/images/logo.white.png"/>
                        </div>
                    </div>
                </div>
                <div className={css['copy']}>
                    <div className={css['copy-container']}>
                        <div className={css['copy-1']}>Connected</div>
                        <div className={css['copy-2']}>Gainesville</div>
                    </div>
                </div>
            </div>
            <Petition />
        </div>
    }
}


export default Splash