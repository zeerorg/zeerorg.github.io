var name = "rishabh gupta";
var current_text = $(".myname").text();

function presskey(ch) {
    $(".key-"+ch).css("background-color", "#000000");
    $(".key-"+ch).css("color", "#ffffff");
    setTimeout(function(){
        $(".key-"+ch).css("background-color", "#ffffff");
        $(".key-"+ch).css("color", "#000000");
    }, 200);
}

function updatename() {
    current_text = $(".myname").text();
    if(current_text != name) {
        var character = name[current_text.length];
        presskey(character);
        current_text += character;
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
    setInterval(updatename, 500);
    setInterval(cursor, 300)
    console.log("Hello");
}
$(document).ready(main);