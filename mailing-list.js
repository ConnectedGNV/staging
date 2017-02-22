
// var $modal = $('#modal')
// var $loading = $('#state-loading')
// var $success = $('#state-success')
// var $error = $('#state-error')







// form.onsubmit = function(ev) {
//
// }

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
//
//                 $loading.hide()
//                 $success.show()
//                 hideModal(6000)
//             }
//         }
//     });
// }

