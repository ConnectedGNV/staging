import React, { Component } from 'react';
import { resources } from '../assets'
import ArticleList from '../../../components/ArticleList'
import { container } from './Resources.less'

class Resources extends Component {
    render() {
        return <ArticleList
            items={resources}
            id="resources"
            heading="Resources"
            className={container}
        />
    }
}

export default Resources