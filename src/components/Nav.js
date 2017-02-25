import React, { Component } from 'react'
import css from './Nav.less'
import { nav } from '../assets'

class Nav extends Component {
    render() {

        return <div className={css.container}>
                {nav.map(({ link, label }, i) => {
                    return <div key={i} className={css.item}>
                        <a href={link} className={css.link}>{label}</a>
                    </div>
                })}
        </div>
    }
}


export default Nav