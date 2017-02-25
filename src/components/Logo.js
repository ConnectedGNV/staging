import React, { Component, PropTypes } from 'react'
import css from './Logo.less'

class Logo extends Component {

    static defaultProps = {
        mode: 'large'
    }

    render() {
        const { mode } = this.props

        return <div className={css[`mode_${mode}`]}>
            <div className={css.content}>
                <div className={css.logo}>
                    <div className={css.inner}>
                        <img src="/public/images/logo.white.png"/>
                    </div>
                </div>
            </div>
            <div className={css.copy}>
                <div className={css.copy_container}>
                    <div className={css.copy_1}>Connected</div>
                    <div className={css.copy_2}>Gainesville</div>
                </div>
            </div>
        </div>
    }
}


export default Logo