(function () {

    // var linebreakStr = '\r\n'
    var body = "Dear city commissioner,\r\n" +
        "\r\n" +
        "I am writing you today because I believe we must improve the internet service choices " +
        "in our community. Our broadband rates are the highest in the state of Florida and Alachua " +
        "County has double the state average for people without access to broadband internet. " +
        "This is hurting our city’s economic growth, frustrating our residents, and further " +
        "dividing our community between those who can afford to be connected and those who can’t.\r\n" +
        "\r\n" +
        "[Please write here why internet is important to you and why you think you should do better.]\r\n" +
        "\r\n" +
        "Our city deserves better. I am asking you to support a study being proposed on February 23 " +
        "to look at all options for our community to become a 21st century city. We cannot leave any " +
        "solution off the table if we are serious about solving this problem. This means considering " +
        "all options, from simplifying our permitting, public/private partnerships, to full municipal " +
        "broadband. \r\n"

    var mailto = {
        address: 'citycomm@cityofgainesville.org',
        cc: '',
        bcc: 'connectedgainesville@gmail.com',
        subject: 'We must improve our internet choices.',
        body: body,
    }

    var mailtolink = 'mailto:' + mailto.address + '?bcc=' + mailto.bcc + '&subject=' + encodeURI(mailto.subject) + '&body=' + encodeURI(mailto.body)

    var linkEl = document.getElementById('take-action-link')

    linkEl.href = mailtolink

}())