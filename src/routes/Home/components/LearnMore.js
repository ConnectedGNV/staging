import React, { Component } from 'react';
import css from './LearnMore.less'
import { learn_more } from '../assets'

class LearnMore extends Component {
    render() {
        return <div className={css.container}>
            <div className={css.inner}>
                <h2 className={css.header}>Learn More</h2>
                {learn_more.map(({ link, blurb, label }, i) => {
                    return <div key={i} className={css.item}>
                        <div className={css.heading}>{label}</div>
                        <div className={css.blurb}>
                            {blurb}
                        </div>
                        <a href={link} className={css.link}>{label}</a>
                    </div>
                })}

            </div>
        </div>
    }
}

export default LearnMore