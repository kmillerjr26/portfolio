var i = 0;
var images = [];
var text = [];
var time = 4000; 
var timer;

images[0] = "url('images/slider1.avif')";
images[1] = "url('images/slider2.avif')";
images[2] = "url('images/slider3.avif')";
images[3] = "url('images/slider4.avif')";
images[4] = "url('images/slider5.avif')";

text[0] = "Om Mobile App";
text[1] = "DOI Site Redesign";
text[2] = "EESI Site Redesign";
text[3] = "Cafehunt Mobile App";
text[4] = "Polyphony Mobile App";

function timeStart(){
    timer = setTimeout(changeImg, time);
}

function timeEnd(){
    clearTimeout(timer);
}

function changeImg(){
    document.getElementById("card-text").innerHTML = "";
    $(".card-image").css("background-image", images[i]);
    document.getElementById("card-text").append(text[i]);

    if (i < images.length-1){
        i++;
    }
    else{
        i=0;
    }

    timeStart();
    
}

$(".arrow-right").click(function(){
    timeEnd();
    document.getElementById("card-text").innerHTML = "";
    $(".card-image").css("background-image", images[i]);
    document.getElementById("card-text").append(text[i]);

    if (i < images.length-1){
        i++;
    }
    else{
        i=0;
    }
    
    timeStart();
     
});

$(".arrow-left").click(function(){
    timeEnd();
    document.getElementById("card-text").innerHTML = "";
    $(".card-image").css("background-image", images[i]);
    document.getElementById("card-text").append(text[i]);

    if (i > 0){
        i--;
    }
    else{
        i=images.length-1;
    }
    
    timeStart();
     
});

changeImg();