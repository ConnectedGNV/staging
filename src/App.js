import React, { Component } from 'react';
import Home from './routes/Home'
import Learn from './routes/Learn'
import css from './general.less'

class App extends Component {
    render() {
        const path = window.location.pathname
        let Route

        switch (path) {
            case '/learn/':
                Route = Learn
            break;
            default:
                Route = Home    
        }


        return <Route />
    }
}

export default App