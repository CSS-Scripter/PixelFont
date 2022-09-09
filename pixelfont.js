window.addEventListener('load', rendUnidentifiedPixeltexts)

async function rendUnidentifiedPixeltexts(event) {
    const listOfPixelatedElements = document.getElementsByClassName('pixelated')
    for (let element of listOfPixelatedElements) {
        renderPixelArtByElement(element, 25)
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
    ':': 'collon',
}

function renderPixelArtById(elementId, speed = 0) {
    const element = document.getElementById(elementId)
    console.log(element)
    if (element != null) {
        element.style.color = 'transparent';
        element.style.userSelect = 'none';
        element.style.display = 'flex';
        element.style.flexDirection = 'row';
        element.style.justifyContent = 'flex-start';
        element.style.flexWrap = 'wrap';
        renderPixelArtByElement(element, speed)
    } else {
        console.error(`Element with id '${elementId}' was not found!`)
    }
}

async function renderPixelArtByElement(element, speed = 0) {
    const innerHTML = element.innerHTML
    element.innerHTML = '<span class="word">'
    let i = 0;

    for (let char of innerHTML.trim()) {
        let delay = speed * ++i;
        setTimeout(() => {
            char = specialCharacters[char] != null ? specialCharacters[char] : char;
            let letter = `<div class="letter-container ${char.toLowerCase()}"><div class="${char.toLowerCase()} letter"></div></div>\n`;
            element.querySelector('.word:last-child').innerHTML += letter;
            if (char === specialCharacters[' ']) {
                element.innerHTML += '<span class="word">\n';
            }
        }, delay);
    }

    const letters = element.getElementsByClassName("letter");
    for (let letter of letters) {
        letter.style.display = "block";
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}