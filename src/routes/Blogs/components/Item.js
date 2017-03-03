import React, { Component } from 'react';

import css from './Item.less'

class Item extends Component {

    render() {

        const { post } = this.props
        const { url, title, username, date, excerpt } = post

        const html = {
            __html: excerpt
        }

        return <div className={css.container}>
            <h2 className={css.heading}>
                <a className={css.link} href={url}>{title}</a>
            </h2>
            <div className={css.meta}>
                By <span className={css.author}>{username}</span>,
                <span className={css.date}>{date}</span>
            </div>
            <div className={css.excerpt} dangerouslySetInnerHTML={html}></div>
            <span>...</span>

            <div className={css.divider}>
                <div className={css.shape}></div>
            </div>
        </div>
    }
}

export default Item