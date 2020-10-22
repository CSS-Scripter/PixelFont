window.addEventListener('load', rendPixelTest)

async function rendPixelTest(event) {
    const listOfPixelatedElements = document.getElementsByClassName('pixelated')
    for (let element of listOfPixelatedElements) {
        const innerHTML = element.innerHTML
        element.innerHTML = ''

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
            '\"': 'dapostrove',
        }

        for (let char of innerHTML) {
            char = specialCharacters[char] != null ? specialCharacters[char] : char
            element.innerHTML += `<div class="${char.toLowerCase()}"></div>\n`
            await sleep(25)
        }
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}