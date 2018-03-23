var two = document.getElementsByClassName("slider_big-one")[1];
var one = document.getElementsByClassName("slider_big-one")[0];
var three = document.getElementsByClassName("slider_big-one")[2];
var four = document.getElementsByClassName("slider_big-one")[3];

document.getElementById('two').addEventListener('click', showTwo);
document.getElementById('one').addEventListener('click', showOne);
document.getElementById('three').addEventListener('click', showThree);
document.getElementById('four').addEventListener('click', showFour);
function showTwo(){
    two.classList.remove('none');
    two.classList.add('block');
    one.classList.remove('block');
    one.classList.add('none');
    three.classList.remove('block');
    three.classList.add('none');
    four.classList.add('none');
    four.classList.remove('block');
}
function showOne(){
    two.classList.add('none');
    two.classList.remove('block');
    one.classList.add('block');
    one.classList.remove('none');
    three.classList.add('none');
    three.classList.remove('block');
    four.classList.add('none');
    four.classList.remove('block');

}
function showThree(){
    two.classList.add('none');
    two.classList.remove('block');
    three.classList.add('block');
    one.classList.add('none');
    one.classList.remove('block');
    three.classList.remove('none');
    four.classList.add('none');
    four.classList.remove('block');
}
function showFour(){
    two.classList.remove('block');
    two.classList.add('none');
    four.classList.add('block');
    one.classList.add('none');
    one.classList.remove('block');
    three.classList.add('none');
    three.classList.remove('block');
    four.classList.remove('none');
}






window.onload = function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 20,
        responsiveClass:true,
        autoplay: true,
        autoplayTimeout: 8000,
        responsive:{
            0:{
                autoplay: false,
                items:2,
                nav:false
            },
            768:{
                items:3,
                nav:true
            },
            970:{
                items:4,
                nav:true
            }
        }
    });


    for (var i = 1; i < 4; i++) {
        document.getElementsByClassName("slider_big-one")[i].classList.add('none');
    }
}





