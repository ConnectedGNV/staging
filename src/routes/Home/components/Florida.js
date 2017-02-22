import React, { Component } from 'react';
import statsCSS from './Stats.less'
import css from './Florida.less'
import { florida } from '../assets'

class Florida extends Component {
    render() {
        return <div className={css.container}>
            <div className={css.inner}>
                <h2 className={statsCSS.header}>How Gainesville compares to the rest of Florida</h2>
                {florida.map(({ number, blurb, heading }, i) => {
                    return <div key={i} className={statsCSS.stat}>
                        <div className={css.heading}>{heading}</div>
                        <div className={css.number}>{number}</div>
                        <div className={statsCSS.blurb}>{blurb}</div>
                    </div>
                })}
            </div>
        </div>
    }
}

export default Florida