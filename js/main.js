var name = "developer";
var current_text = $(".myname").text();
var updateInterval;
var slider = 0;

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

function addTransform(element, scale, origin=0.5) {

    var calcOrigin = 100 - 100*origin;
    element.css({
        "transform-origin": calcOrigin+"%"
    })

    element.css({
        "-webkit-transform": "scaleX(" + scale + ")",
        "-ms-transform": "scaleX(" + scale + ")",
        "-moz-transform": "scaleX(" + scale + ")",
        "-o-transform": "scaleX(" + scale + ")",
        "transform": "scaleX(" + scale + ")",
    })
}

function setSlide(num) {
    console.log("setting block " + num)
    if(num == slider){
        return;
    }
    var origin = num - slider;
    addTransform($(".container-" + slider), 0, (origin >>> 31)^1)
    addTransform($(".nav-" + slider).children(".line"), 0)
    addTransform($(".nav-" + num).children(".line"), 1)
    addTransform($(".container-" + num), 1, (origin >>> 31))
    slider = num;
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

    $(".nav-1").on("click", function() {setSlide(1)} )
    $(".nav-2").on("click", function() {setSlide(2)} )
    $(".nav-3").on("click", function() {setSlide(3)} )
    $(".nav-4").on("click", function() {setSlide(4)} )
    setSlide(1)
}
$(document).ready(main);