
const $modal = $('#modal')
const $loading = $('#state-loading')
const $success = $('#state-success')
const $error = $('#state-error')

const button = document.getElementById('alt-cta-button')
const form = document.getElementById('mailing')
const email = document.getElementById('alt-cta-email')
const fname = document.getElementById('alt-cta-first-name')
const lname = document.getElementById('alt-cta-last-name')

const validateInput = function () {
    if (validateEmail(email.value) && fname.value && lname.value) {
        button.disabled = false;
    } else {
        button.disabled = true;
    }
}

email.oninput = validateInput
email.onchange = validateInput
fname.oninput = validateInput
fname.onchange = validateInput
lname.oninput = validateInput
lname.onchange = validateInput

const hideModal = (time) => {
    setTimeout(function() {
        $modal.hide()
    }, time)
}

form.onsubmit = (ev) => {
    ev.preventDefault()

    $modal.show()
    $loading.show()

    const $form = $(form)

    $.ajax({
        type: 'GET',
        url: $form.attr('action'),
        data: $form.serialize(),
        cache       : false,
        dataType: "jsonp",
        jsonp: "c", // trigger MailChimp to return a JSONP response
        contentType: "application/json; charset=utf-8",
        error       : function(err) {
            $error.show()
            hideModal(4000)
        },
        success: function(data) {
            if (data.result !== "success") {
                console.log('error: ', data.msg)

                $loading.hide()
                $error.show()
                hideModal(4000)
            } else {
                console.log('success')

                email.value = ''

                $loading.hide()
                $success.show()
                hideModal(6000)
            }
        }
    });
}

function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}