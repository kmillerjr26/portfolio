var i = 0;
var images = [];
var text = [];
var time = 4000;

images[0] = "images/slider1.avif";
images[1] = "images/slider2.avif";
images[2] = "images/slider3.avif";
images[3] = "images/slider4.avif";
images[4] = "images/slider5.avif";

text[0] = "Om Mobile App";
text[1] = "DOI Site Redesign";
text[2] = "EESI Site Redesign";
text[3] = "Cafehunt Mobile App";
text[4] = "Polyphony Mobile App";

function changeImg(){
    document.getElementById("card-text").innerHTML = "";
    document.getElementById("slide-img").src = images[i];
    document.getElementById("card-text").append(text[i]);

    if (i < images.length-1){
        i++;
    }
    else{
        i=0;
    }

    setTimeout(changeImg, time); 
}
changeImg();
$(".arrow-right").click(function(){
    document.getElementById("card-text").innerHTML = "";
    document.getElementById("slide-img").src = images[i];
    document.getElementById("card-text").append(text[i]);

    if (i < images.length-1){
        i++;
    }
    else{
        i=0;
    }
});

/*$(".arrow-left").click(function(){
    document.getElementById("card-text").innerHTML = "";
    document.getElementById("slide-img").src = images[i];
    document.getElementById("card-text").append(text[i]);

    if (i >= 0){
        i--;
    }
    else{
        i=4;
    }
}); */ 