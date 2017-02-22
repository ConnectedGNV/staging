import React, { Component } from 'react';
import css from './Citations.less'
import { citations } from '../assets'

class Citations extends Component {
    render() {
        return <div className={css.container}>
            <div className={css.inner}>
                <div className={css.header}>Citations</div>
                {citations.map(({ link, blurb }, i) => {
                    return <div key={i} className={css.citation}>
                        <div className={css.blurb}>
                            {`${i + 1}) ${blurb}`}
                            <a href={link} className={css.link}>{link}</a>
                        </div>
                    </div>
                })}

            </div>
        </div>
    }
}

export default Citations