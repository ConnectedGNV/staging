import React, { Component } from 'react';
import css from './Socials.less'

class Socials extends Component {
    render() {
        return <div className={css.container}>
            <div className={css.copy}>Get connected</div>
            <div className={css.icons}>
                <a className={css.anchor} href="https://facebook.com/ConnectedGainesville">
                    <div className={`${css.icon} ${css.facebook}`}>
                        <i className={`${css.i} ion-social-facebook`}/>
                    </div>
                </a>
                <a className={css.anchor} href="mailto:connectedgainesville@gmail.com">
                    <div className={`${css.icon} ${css.email}`}>
                        <i className={`${css.i} ion-email`}/>
                    </div>
                </a>
                <a className={css.anchor} href="https://github.com/ConnectedGNV">
                    <div className={`${css.icon} ${css.github}`}>
                        <i className={`${css.i} ion-social-github`}/>
                    </div>
                </a>
            </div>
        </div>
    }
}

export default Socials