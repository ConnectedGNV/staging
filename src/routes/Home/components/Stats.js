import React, { Component } from 'react';
import css from './Stats.less'
import { stats } from '../assets'

class Stats extends Component {
    render() {
        return <div className={css.container}>
            <div className={css.inner}>
                {stats.map(({ number, blurb }, i) => {
                    return <div key={i} className={css.stat}>
                        <div className={css.number}>{number}</div>
                        <div className={css.blurb}>
                            {blurb}
                            <a href="#citations" className={css.citation_link}>
                                {`(${i + 1})`}
                            </a>
                        </div>
                    </div>
                })}

            </div>
        </div>
    }
}

export default Stats