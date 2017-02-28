import React, { Component } from 'react';
import Blog from './routes/Blog'
import Blogs from './routes/Blogs'
import Home from './routes/Home'
import Learn from './routes/Learn'
import css from './general.less'

class App extends Component {
    render() {
        const { postIndex, location } = window
        const path = location.pathname
        let Route

        switch (path) {
            case '/blog/':
                Route = Blogs
            break;
            case '/learn/':
                Route = Learn
            break;
            default:
                Route = Home    
        }

        if (postIndex || postIndex === 0) {
            Route = Blog
        }


        return <Route />
    }
}

export default App