
const $modal = $('#modal')
const $loading = $('#state-loading')
const $success = $('#state-success')
const $error = $('#state-error')

const form = document.getElementById('mailing')

const hideModal = () => {
    setTimeout(function() {
        $modal.hide()
    }, 4000)
}


form.onsubmit = (ev) => {
    ev.preventDefault()

    $modal.show()
    $loading.show()

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

            $error.show()
            hideModal()
        },
        success: function(data) {
            if (data.result !== "success") {
                console.log('error: ', data.msg)

                $loading.hide()
                $error.show()
                hideModal()
            } else {
                console.log('success')

                $loading.hide()
                $success.show()
                hideModal()
            }
        }
    });
}

