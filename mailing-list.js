
// var $modal = $('#modal')
// var $loading = $('#state-loading')
// var $success = $('#state-success')
// var $error = $('#state-error')

var button = document.getElementById('alt-cta-button')
var form = document.getElementById('mailing')
var email = document.getElementById('alt-cta-email')
var fname = document.getElementById('alt-cta-first-name')
var lname = document.getElementById('alt-cta-last-name')

var validateInput = function () {
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

form.onsubmit = function(ev) {
    ev.preventDefault()

    var mailingListURl = 'http://connectgnv.us14.list-manage1.com/subscribe?u=6e9bd095d4e4fbd9ebb1d63da&id=611307f043'

    var fieldString = params({
        'MERGE0': email.value,
        'MERGE1': fname.value,
        'MERGE2': lname.value
    })

    var url = mailingListURl + '&' + fieldString

    window.open(url)

}

// form.onsubmit = (ev) => {
//     ev.preventDefault()
//
//     $modal.show()
//     $loading.show()
//
//
//     $.ajax({
//         type: 'GET',
//         url: $form.attr('action'),
//         data: $form.serialize(),
//         cache       : false,
//         dataType: "jsonp",
//         jsonp: "c", // trigger MailChimp to return a JSONP response
//         contentType: "application/json; charset=utf-8",
//         error       : function(err) {
//             $error.show()
//             hideModal(4000)
//         },
//         success: function(data) {
//             if (data.result !== "success") {
//                 console.log('error: ', data.msg)
//
//                 $loading.hide()
//                 $error.show()
//                 hideModal(4000)
//             } else {
//                 console.log('success')
//
//                 email.value = ''
//                 fname.value = ''
//                 lname.value = ''
//
//                 $loading.hide()
//                 $success.show()
//                 hideModal(6000)
//             }
//         }
//     });
// }

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