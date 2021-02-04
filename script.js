// event ready on document
//$(document).ready(function() {
$(function() {
    $("#start").click(function()
                     {
        $("div").animate({left:'600px',}, 2000 );
        $("div").animate({opacity:'0.2',}, 2000 );
        $("div").animate({width:'200px',}, 2000 );
        $("div").animate({height:'200px',}, 2000 );
    });

    $("#stop").click(function() {
        $("div").stop(true,true);  // stop all animations

    });


})
