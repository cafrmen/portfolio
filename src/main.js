const outsidePortrait = document.querySelector('body');
const insidePortrait = document.querySelector('.portrait');
const boxes = document.querySelectorAll('article');

const bio = document.getElementById('bio');
const artist = document.getElementById('artist');
const granular = document.getElementById('granular');
const nasa = document.getElementById('nasa');
const cipher = document.getElementById('cipher');
const calculator = document.getElementById('calculator');

const textBio = document.querySelectorAll('.bioText');
const textArtist = document.querySelectorAll('.artistText');
const textGranular = document.querySelectorAll('.granularText');
const textNasa = document.querySelectorAll('.nasaText');
const textCipher = document.querySelectorAll('.cipherText');
const textCalculator = document.querySelectorAll('.calculatorText');

const svgArtist = document.querySelector('.imageArtist');
const svgGranular = document.querySelector('.imageGranular');
const svgNasa = document.querySelector('.imageNasa');
const svgCipher = document.querySelector('.imageCipher');
const svgCalculator = document.querySelector('.imageCalculator');


const hideAllTextGroups = () => {
    [textBio, textArtist, textGranular, textNasa, textCipher, textCalculator].forEach(textSet => {
        textSet.forEach(displayText => displayText.classList.add('hidden'));
    });
}

const hideAllSvg = () => {
    [svgArtist, svgGranular, svgNasa, svgCipher, svgCalculator].forEach(svg => {
        svg.classList.add('hidden');
    });
}

const biography = (e) => {
    outsidePortrait.style.setProperty('background-color', '#425F57');
    outsidePortrait.style.setProperty('color', '#425F57');
    insidePortrait.style.setProperty('border-radius', '3px');

    boxes.forEach(box => {
        box.style.setProperty('background-image', 'url("../media/perfil.jpg")');
        box.style.setProperty('background-size', '144%');
        box.style.setProperty('border', 'none');
        box.style.setProperty('border-radius', '3px');
    });

    hideAllTextGroups();
    textBio.forEach(text => text.classList.remove('hidden'));

    hideAllSvg();
}
bio.addEventListener('pointerdown', biography);

const soundArtist = (e) => {
    outsidePortrait.style.setProperty('background-color', '#4C0033');
    outsidePortrait.style.setProperty('color', '#4C0033');
    insidePortrait.style.setProperty('border-radius', '5px');

    boxes.forEach(box => {
        box.style.setProperty('background-image', 'url("../media/artist.png")');
        box.style.setProperty('background-size', '233%');
        box.style.setProperty('border', '5px solid #4C0033');
        box.style.setProperty('border-radius', '5%');
    });

    hideAllTextGroups();
    textArtist.forEach(text => text.classList.remove('hidden'));

    hideAllSvg();
    svgArtist.classList.remove('hidden');
}
artist.addEventListener('pointerdown', soundArtist);

const granulator = (e) => {
    outsidePortrait.style.setProperty('background-color', 'black');
    outsidePortrait.style.setProperty('color', 'black');
    insidePortrait.style.setProperty('border-radius', '8px');

    boxes.forEach(box => {
        box.style.setProperty('background-image', 'url("../media/granular.png")');
        box.style.setProperty('background-size', '233%');
        box.style.setProperty('border', '8px solid black');
        box.style.setProperty('border-radius', '8px');
    });

    hideAllTextGroups();
    textGranular.forEach(text => text.classList.remove('hidden'));

    hideAllSvg();
    svgGranular.classList.remove('hidden');
}
granular.addEventListener('pointerdown', granulator);

const nasaPost = (e) => {
    outsidePortrait.style.setProperty('background-color', '#FF4545');
    outsidePortrait.style.setProperty('color', '#FF4545');
    insidePortrait.style.setProperty('border-radius', '5px');

    boxes.forEach(box => {
        box.style.setProperty('background-image', 'url("../media/nasa.png")');
        box.style.setProperty('background-size', '233%');
        box.style.setProperty('border', '5px solid #FF4545');
        box.style.setProperty('border-radius', '5px');
    });

    hideAllTextGroups();
    textNasa.forEach(text => text.classList.remove('hidden'));

    hideAllSvg();
    svgNasa.classList.remove('hidden');
}
nasa.addEventListener('pointerdown', nasaPost);

const rotCipher = (e) => {
    outsidePortrait.style.setProperty('background-color', '#ACC572');
    outsidePortrait.style.setProperty('color', '#ACC572');
    insidePortrait.style.setProperty('border-radius', '8px');

    boxes.forEach(box => {
        box.style.setProperty('background-image', 'url("../media/cipher.png")');
        box.style.setProperty('background-size', '233%');
        box.style.setProperty('border', '8px solid #ACC572');
        box.style.setProperty('border-radius', '8px');
    });

    hideAllTextGroups();
    textCipher.forEach(text => text.classList.remove('hidden'));

    hideAllSvg();
    svgCipher.classList.remove('hidden');
}
cipher.addEventListener('pointerdown', rotCipher);

const jsCalculator = (e) => {
    outsidePortrait.style.setProperty('background-color', '#1D5C63');
    outsidePortrait.style.setProperty('color', '#1D5C63');
    insidePortrait.style.setProperty('border-radius', '13px');

    boxes.forEach(box => {
        box.style.setProperty('background-image', 'url("../media/calculator.png")');
        box.style.setProperty('background-size', '233%');
        box.style.setProperty('border', '13px solid #1D5C63');
        box.style.setProperty('border-radius', '13%');
    });

    hideAllTextGroups();
    textCalculator.forEach(text => text.classList.remove('hidden'));

    hideAllSvg();
    svgCalculator.classList.remove('hidden');
}
calculator.addEventListener('pointerdown', jsCalculator);