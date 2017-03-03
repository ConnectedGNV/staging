import React, { Component } from 'react';
import css from './Post.less'

class Blog extends Component {

    render() {

        const { postIndex } = window
        const { posts } = this.props
        const post = posts.find((post, i) => postIndex === i)
        const { url, title, username, date, content } = post

        const html = {
            __html: content
        }

        return <div className={css.container}>
            <div className={css.inner}>
                <h2 className={css.heading}>
                    <a className={css.link} href={url}>{title}</a>
                </h2>
                <div className={css.meta}>
                    By <span className={css.author}>{username}</span>,
                    <span className={css.date}>{date}</span>
                </div>
                <div className={css.content} dangerouslySetInnerHTML={html}></div>
            </div>
        </div>
    }
}

export default Blog