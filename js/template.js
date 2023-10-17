var width = $(document).width();
var hamburgerClicked = false;

$(".hamburger").click(function(){
    /*const element = document.querySelector('.list2')
    const style = getComputedStyle(element);*/
    if(width < 768){
        if(hamburgerClicked == false){
            $(".list2").css("opacity", "1");
            $(".list2").css("z-index", "1");
            hamburgerClicked = true;
        }
        else{
            $(".list2").css("opacity", "0");
            $(".list2").css("z-index", "-1");
            hamburgerClicked = false;
        }
    }
});

/*function resize(){
    if(width > 768 && hamburgerClicked == true){
       /* $(".list2").css("opacity", "0");
        $(".list2").css("z-index", "-1"); 
        hamburgerClicked = false;
        hamburgerAlreadyOpen = false;
    }
}

document.addEventListener("resize", resize); */
