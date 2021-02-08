// event ready on document
//$(document).ready(function() {
$(function() {

    $("#act2").click( function() {
        console.log($("#act1").width());

    })
    $("#act1").click( function() {
        $("#act2").width(100).height(200);

    })

})
