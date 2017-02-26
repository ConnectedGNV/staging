import React, { Component } from 'react';
import css from './ArticleList.less'

class ArticleList extends Component {

    static defaultProps = {
        className: css.container
    }

    render() {
        const { items, heading, id, className } = this.props

        return <div id={id} className={className}>
            <div className={css.inner}>
                <div className={css.heading}>
                    {heading}
                    <a className={css.chain} href={`#${id}`}>
                        <i className='ion-link' />
                    </a>
                </div>
                {items.map(({ link, title, subtitle }, i) => {
                    return <div key={i} className={css.item}>
                        <h3 className={css.title}>{title}</h3>
                        {subtitle && <div className={css.subtitle}>{subtitle}</div>}
                        <div>
                            <a href={link} className={css.link}>{link}</a>
                        </div>
                    </div>
                })}

            </div>
        </div>
    }
}

export default ArticleList