
const image = document.querySelector('#image');

function changeImage() {
    // image.setAttribute('src', 'https://www.w3schools.com/js/pic_bulbon.gif');
    const url = prompt('Enter a new image URL:');
    const borderColor = prompt('Enter a border color:');
    const width = prompt('Enter a border width (in pixels):');
    const hight = prompt('Enter a border height (in pixels):');
    const borderRadius = prompt('Enter a border radius (in pixels):');
    image.setAttribute('src', url);
    image.style.borderColor = borderColor;
    image.style.border=`${width}px solid ${borderColor}`;
    image.style.width = `${width}px`;
    image.style.height = `${hight}px`;
    image.style.borderRadius = `${borderRadius}px`;

}

//Use prompt to ask the user for a new image URL.

