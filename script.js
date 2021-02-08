// event ready on document
//$(document).ready(function() {
$(function() {

    $("#act1").click( function() {
        $("#p2,#p4").css("color","red");

    })
    $("#act2").click( function() {
        console.log( $("#p2,#p4").css("color"));

    })

})
