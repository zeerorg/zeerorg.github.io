var name = "developer";
var current_text = $(".myname").text();
var updateInterval;

function presskey(ch) {
    $(".key-"+ch).css("background-color", "#000000");
    $(".key-"+ch).css("color", "#ffffff");
    setTimeout(function(){
        $(".key-"+ch).css("background-color", "#ffffff");
        $(".key-"+ch).css("color", "#000000");
    }, 50);
}

function updatename() {
    current_text = $(".myname").text();
    if(current_text != name) {
        var character = name[current_text.length];
        presskey(character);
        current_text += character;
    } else {
        clearInterval(updateInterval)
        console.log("Cleared")
    }
    $(".myname").text(current_text);
}

function cursor() {
    var vis = $(".cursor").css("visibility");
    if(vis == 'hidden')
        $(".cursor").css("visibility", "visible");
    else
        $(".cursor").css("visibility", "hidden");
}

function main() {
    updateInterval = setInterval(updatename, 200);
    setInterval(cursor, 100);
    $(document).one('scroll', function(event) {
        console.log("triggered");
        var slideTime = $(document).scrollTop();
        console.log(slideTime)
        $('.keyboard').slideUp(100);
        //$('.su').slideUp();
    });
    // $(document).on('scroll', function(event) {
    //     $(".rounded-image").css("visibility", "");
    //     $(".rounded-image").css("animation-name", "circle");
    //     $(".rounded-image").css("animation-duration", "0.35s");
    //     setTimeout(function(){
    //         $(".rounded-image").css("visibility", "hidden");
    //         $(".rounded-image").css("animation-name", "");
    //         $(".rounded-image").css("animation-duration", "");
    //     }, 350);
    // });
}
$(document).ready(main);
$(document).ready(function(){
  $(".owl-carousel").owlCarousel();
});