import React, { Component } from 'react';
import css from './Press.less'
import { press } from '../assets'
import ArticleList from '../../../components/ArticleList'

class Resources extends Component {
    render() {
        return <div>
            <div className={css.splash}>
                <div className={css.inner}>
                    <h2 className={css.header}>Press</h2>
                </div>
            </div>
            {press.map((list, i) => <ArticleList
                key={i}
                {...list}
            />)}
        </div>
    }
}

export default Resources