const picture = document.querySelector('.main-pic');
const selection = document.querySelector('.selection');
const single = document.querySelector('.single');
const deluxe_single = document.querySelector('.d-single');
const double = document.querySelector('.double');
const deluxe_double = document.querySelector('.d-double');
const twin = document.querySelector('.twin');
const deluxe_twin = document.querySelector('.d-twin');

single.addEventListener("mouseover", function( event ) {
    // highlight the mouseover target
    picture.innerHTML="<img src='https://github.com/Chaoci/Timer/blob/main/img_deluxesingle_002.png.png?raw=true'>";
});

deluxe_single.addEventListener("mouseover", function( event ) {
    // highlight the mouseover target
    picture.innerHTML="<img src='https://github.com/Chaoci/Timer/blob/main/img_deluxesingle_0123.png.png?raw=true'>";
});

double.addEventListener("mouseover", function( event ) {
    // highlight the mouseover target
    picture.innerHTML="<img src='https://github.com/Chaoci/Timer/blob/main/img_deluxesingle_0124.png.png?raw=true'>";
});

deluxe_double.addEventListener("mouseover", function( event ) {
    // highlight the mouseover target
    picture.innerHTML="<img src='https://github.com/Chaoci/Timer/blob/main/img_deluxesingle_0125.png.png?raw=true'>";
});

twin.addEventListener("mouseover", function( event ) {
    // highlight the mouseover target
    picture.innerHTML="<img src='https://github.com/Chaoci/Timer/blob/main/img_deluxesingle_0126.png.png?raw=true'>";
});

deluxe_twin.addEventListener("mouseover", function( event ) {
    // highlight the mouseover target
    picture.innerHTML="<img src='https://github.com/Chaoci/Timer/blob/main/img_deluxesingle_002.png.png?raw=true'>";
});