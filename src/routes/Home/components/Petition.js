import React, { Component } from 'react'
import css from './Petition.less'

class Petition extends Component {

    onSubmit = (ev) => {
        ev.preventDefault()

        const { fname, lname, email, form, button } = this.refs
        const mailingListURl = 'http://connectedgnv.us14.list-manage1.com/subscribe?u=6e9bd095d4e4fbd9ebb1d63da&id=611307f043'
        const fieldString = params({
            'MERGE0': email.value,
            'MERGE1': fname.value,
            'MERGE2': lname.value
        })
        const url = mailingListURl + '&' + fieldString

        window.open(url)

        form.reset()
        button.disabled = true

    }

    validateInput = () => {
        const { fname, lname, email, button } = this.refs

        if (validateEmail(email.value) && fname.value && lname.value) {
            button.disabled = false;
        } else {
            button.disabled = true;
        }
    }

    componentDidMount() {
        const { fname, lname, email } = this.refs
        const { validateInput } = this

        email.oninput = validateInput
        email.onchange = validateInput
        fname.oninput = validateInput
        fname.onchange = validateInput
        lname.oninput = validateInput
        lname.onchange = validateInput
    }

    render() {
        return <div id="take-action" className={css.main}>
            <div className={css.container}>
                <h2 className={css.header}>Petition</h2>
                <div className={`${css.copy} ${css.tagline}`}>Join the fight for better rates and more reliable internet and cable in your area. Sign the petition below</div>
                <div className={css.copy__container}>
                    <div className={`${css.copy} ${css.petition}`}>In the 21st century affordable broadband internet access is a necessity, not a luxury. Our community is falling behind the rest of the country in accessing affordable broadband internet. As a citizen of the greater Gainesville area I petition that our local representatives find solutions that will expand consumer choices, improve accessibility and affordability, and allow our small businesses to thrive.</div>

                    <form
                        ref="form"
                        id="mailing"
                        className={css.form}
                        onSubmit={this.onSubmit}
                    >
                        <div className={css.form__inner}>
                            <input ref="fname" id="petition-first-name" name="first_name" className={css.input} type="text" placeholder="First name.."/>
                            <input ref="lname" id="petition-last-name" name="last_name" className={css.input} type="text" placeholder="Last name.."/>
                            <input ref="email" id="petition-email" name="email" className={css.input} type="email" placeholder="email.."/>
                            <input ref="button" id="petition-button" name="sign" type="submit" className={css.button} value="Sign"disabled/>
                        </div>
                    </form>

                    <div className={css.disclaimer}>(Opens in Mailchimp)</div>

                </div>
            </div>
        </div>
    }
}

function params(obj) {
    var str = [];
    for(var p in obj)
        if (obj.hasOwnProperty(p)) {
            str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
        }
    return str.join("&");
}

function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

export default Petition