import React, { Component } from 'react';
// import css from './Resources.less'
import { resources } from '../assets'
import ArticleList from '../../../components/ArticleList'

class Resources extends Component {
    render() {
        return <ArticleList
            items={resources}
            heading="Resources"
        />
    }
}

export default Resources