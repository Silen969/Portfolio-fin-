$(document).ready(function () {
    const speed = 500;

    var pictW,imgW,n,pict,img,currentM,end=true;
    pict = $("#slider .pict");
    img = $("#slider .images");
    pictW = parseInt(pict.width());
    n = pict.length;
    imgW=(n+1)*pictW;
    img.width(imgW);
    $('#slider .pict:last').prependTo('.images');
    currentM = -pictW;

    img.css('marginLeft',currentM);

    $('#slider .left').click(function(event){
        if(end) {
            end=false;
            currentM = currentM + pictW;
            img.animate({
                marginLeft: currentM
            }, speed,  function () {
                end = true;
                $('.pict:last').prependTo('.images');
                currentM = currentM - pictW;
                img.css('marginLeft',currentM);
            });
        }
    });

    $('#slider .right').click(function(event){
        if(end) {
            end=false;
            currentM = currentM - pictW;
            img.animate({
                marginLeft: currentM
            }, speed,  function () {
                end = true;
                $('#slider .pict:first').appendTo('.images');
                currentM = currentM + pictW;
                img.css('marginLeft',currentM);
            });
        }
    });
});

function create() {
    var number;
    var result;
    number = Math.floor(Math.random()*100);

    if (number % 2 == 0) {
        result = 2;
    }

    else  {
        result = 1;
    }
    var newdiv = document.createElement("div");
    newdiv.classList.add('pict');
    newdiv.innerHTML = '<img src="img/'+result+'.png">';

    document.getElementById("parentId").appendChild(newdiv);
    return false;
}