import React, { Component } from 'react';
import css from './ArticleList.less'

class ArticleList extends Component {
    render() {
        const { items, heading, id } = this.props

        return <div id={id} className={css.container}>
            <div className={css.inner}>
                <div className={css.heading}>{heading}</div>
                {items.map(({ link, title }, i) => {
                    return <div key={i} className={css.item}>
                        <div className={css.title}>{title}</div>
                        <a href={link} className={css.link}>{link}</a>
                    </div>
                })}

            </div>
        </div>
    }
}

export default ArticleList