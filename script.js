function on() {
    const bulbImgElement = document.getElementById('bulb');
    bulbImgElement.src = 'bulb-on.png';

    const bodyElement = document.getElementById('body');
    bodyElement.style.backgroundColor = '#ffd11a';

    const containerElement = document.getElementById('container');
    containerElement.style.backgroundColor = '#fff';

    const headingElement = document.getElementById('heading');
    headingElement.style.color = 'black';
}   

function off(){
    const bulbImgElement = document.getElementById('bulb');
    bulbImgElement.src = 'bulb-off.png';

    const bodyElement = document.getElementById('body');
    bodyElement.style.backgroundColor = '#29293d';

    const containerElement = document.getElementById('container');
    containerElement.style.backgroundColor = '#8585ad';

    const headingElement = document.getElementById('heading');
    headingElement.style.color = '#fff';

}