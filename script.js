// event ready on document
//$(document).ready(function() {
$(function() {

    $("#act1").click( function() {
        $("#p2,#p4").css({
            "color":"red",
            "font-weight":"bold",
            "background":"blue"
        });

    })
    $("#act2").click( function() {
        console.log( $("#p2,#p4").css("color"));

    })

})
