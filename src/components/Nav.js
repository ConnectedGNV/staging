import React, { Component } from 'react'
import css from './Nav.less'
import { nav } from '../assets'

class Nav extends Component {

    render() {

        const { pathname } = window.location
        const isBlogPage = pathname.indexOf('/blog/') >= 0


        return <div className={css.container}>
                {nav.map(({ link, label }, i) => {

                    const isActiveBlogPage = isBlogPage && link === '/blog/'
                    const isActive = link === window.location.pathname || isActiveBlogPage

                    return <div key={i} className={isActive ? css.active : css.item}>
                        <a href={link} className={css.link}>{label}</a>
                    </div>
                })}
        </div>
    }
}


export default Nav