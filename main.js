window.addEventListener('load', rendUnidentifiedPixeltexts)

async function rendUnidentifiedPixeltexts(event) {
    const listOfPixelatedElements = document.getElementsByClassName('pixelated')
    for (let element of listOfPixelatedElements) {
        if (element.id == '') {
            renderPixelArtByElement(element, 25) 
        }
    }
}

let specialCharacters = {
    ' ': 'space',
    '.': 'dot',
    ',': 'comma',
    '!': 'exclemation',
    '?': 'question',
    '0': 'zero',
    '1': 'one',
    '2': 'two',
    '3': 'three',
    '4': 'four',
    '5': 'five',
    '6': 'six',
    '7': 'seven',
    '8': 'eight',
    '9': 'nine',
    '\'': 'apostrove',
    '"': 'dapostrove',
    '-': 'dash',
}

function renderPixelArtById(elementId, speed, color="black") {
    const element = document.querySelector(`#${elementId}`)
    if (element != null) {
        renderPixelArtByElement(element, speed, color)
    } else {
        console.error(`Element with id '${elementId}' was not found!`)
    }
}

async function renderPixelArtByElement(element, speed, color="black") {
    color = element.getAttribute('data-color') != null ? element.getAttribute('data-color') : color

    const innerHTML = element.innerHTML
    element.innerHTML = '<span class="word">'

    for (let char of innerHTML) {
        char = specialCharacters[char] != null ? specialCharacters[char] : char
        let letter = `<div class="letter-container ${char.toLowerCase()}"><div class="${char.toLowerCase()}-${color} letter"></div></div>\n`
        element.querySelector('.word:last-child').innerHTML += letter
        if (char === specialCharacters[' ']) {
            element.innerHTML += '<span class="word">\n'
        }
        await sleep(speed)
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}