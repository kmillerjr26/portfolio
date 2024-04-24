var lastScrollTop = 0;

window.addEventListener("scroll", function(){
    var scrollTop = document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop){
        $(".navbar").css("top", "-80px");
        $(".dropdown-menu").css("opacity", "0");
    }
    else{
        $(".navbar").css("top", "0px");
        $(".navbar").css("background-color", "black");
    }
    lastScrollTop = scrollTop;
    if(scrollTop <= 0){
        $(".navbar").css("background-color", "black");
    }
});

$(".dropdown-toggle").click(function(){
    $(".dropdown-menu").css("opacity", "1");
});
