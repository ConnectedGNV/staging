const form = document.getElementById('mailing')

form.onsubmit = (ev) => {
    ev.preventDefault()

    const input = document.getElementById('alt-cta-input')

    const listID = '611307f043'
    const u = '6e9bd095d4e4fbd9ebb1d63da'
    const url = `//connectgnv.us14.list-manage.com/subscribe/post-json?u=${u}&id=${listID}&c=?`
    const email = input.value
//
    const payload = {
        'EMAIL': email,
        'b_6e9bd095d4e4fbd9ebb1d63da_611307f043': true,
    }

    //only reason we need jquery
    $.ajax({
        type: 'POST',
        url: url,
        data: payload,
        cache: false,
        dataType: 'json',
        contentType: 'application/json; charset=utf-8',
        error: function(err) {
            console.log("Could not connect to the registration server. Please try again later.")
        },
        success: function(data) {
            if (data.result !== "success") {
                console.log('error: ', data.msg)
            } else {
                console.log('success')
            }
        }
    });
}

