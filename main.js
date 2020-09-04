const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');
const overlay = document.querySelector('.overlay');

// Creating image elements and putting them on the ThumbBar.
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

// Showing the big Image when clicking on the small Image.
const imgs = document.querySelectorAll('.thumb-bar img');
imgs.forEach(function(img){
    img.addEventListener('click',function(e){
        const clickedimg = e.target;
        const clickedAttribute = clickedimg.getAttribute('src');
        displayedImage.setAttribute('src',clickedAttribute);
    });
});

// Setting a event listener for image scale when clicking. 
const fullImg = document.querySelector('.full-img');
fullImg.addEventListener('click',function(){
    fullImg.classList.toggle('scale');
});
