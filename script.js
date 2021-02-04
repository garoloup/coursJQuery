// event ready on document
//$(document).ready(function() {
$(function() {
    $("button").click(function()
                     {
        $("div").animate({left:'600px'}, 2000, function() {
            $("div").hide();
        });
    })

})
