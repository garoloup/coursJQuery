// event ready on document
//$(document).ready(function() {
$(function() {

    $("#act1").click( function() {
        $("#p2,#p4").addClass("red ");

    })
    $("#act2").click( function() {
        $("#p2,#p4").removeClass("red");

    })

})
