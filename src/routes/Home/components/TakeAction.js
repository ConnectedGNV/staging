import React, { Component } from 'react';
import css from './TakeAction.less'

import { take_action } from '../assets'

class TakeAction extends Component {

    render() {
        const link = `mailto:${take_action.address}?bcc=${take_action.bcc}&subject=${encodeURI(take_action.subject)}&body=${encodeURI(take_action.body)}`

        return <div className={css.container}>
            <div className={css.copy}>Now that you know, take some action</div>
            <a
                id="take-action-link"
                className={css.button}
                href={link}
                target="_blank"
            >
                Take Action
            </a>
        </div>
    }
}

export default TakeAction