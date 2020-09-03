const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');
const overlay = document.querySelector('.overlay');

function createElements(attribute){
    const newImage = document.createElement('img');
    newImage.setAttribute('src', attribute);
    thumbBar.appendChild(newImage);
}
createElements('images/pic1.jpg');
createElements('images/pic2.jpg');
createElements('images/pic3.jpg');
createElements('images/pic4.jpg');
createElements('images/pic5.jpg');

const imgs = document.querySelectorAll('.thumb-bar img');
imgs.forEach(function(img){
    img.addEventListener('click',function(e){
        const clickedimg = e.target;
        const clickedAttribute = clickedimg.getAttribute('src');
        displayedImage.setAttribute('src',clickedAttribute);
    });
});



/* Wiring up the Darken/Lighten button */
