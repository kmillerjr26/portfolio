var lastScrollTop = 0;

window.addEventListener("scroll", function(){
    var scrollTop = document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop){
        $(".navbar").css("top", "-80px");
    }
    else{
        $(".navbar").css("top", "0px");
        $(".navbar").css("background-color", "black");
    }
    lastScrollTop = scrollTop;
    if(scrollTop == 0){
        $(".navbar").css("background-color", "transparent");
    }
});

