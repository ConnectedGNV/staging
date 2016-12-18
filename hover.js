//hover

const districtIDs = [
    {
        id: 'g4160',
        number: 1,
        colorDefault: '#ffd37f',
        colorHover: '#ffe787',
    },
    {
        id: 'g4168',
        number: 2,
        colorDefault: '#ffa77f',
        colorHover: '#ff9582',
    },
    {
        id: 'g4176',
        number: 3,
        colorDefault: '#73b2ff',
        colorHover: '#75a5ff',
    },
    {
        id: 'g4184',
        number: 4,
        colorDefault: '#ffbee8',
        colorHover: '#eabfff',
    },
]

const email = `
Hey Commissioner \n
\n
I really want better internet.\n
\n
Thanks yo\n
Me
`


for (let i = 0; i < districtIDs.length; i++) {
    const district = districtIDs[i]
    const {id, number, colorDefault, colorHover} = district

    let el = document.querySelector(`[id=${id}]`)

    el.onmouseover = function() {
        el.getElementsByTagName('path')[0].style.fill = colorHover
    }

    el.onmouseout = function() {
        el.getElementsByTagName('path')[0].style.fill = colorDefault
    }

    el.onclick = function() {
        console.log(`district ${number} clicked`)

        const link = "mailto:x@y.com?body=" + encodeURIComponent(email)

        window.location.href = link
    }

}

