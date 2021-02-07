// event ready on document
//$(document).ready(function() {
$(function() {

    $("#start").click( function() {
        var mylog = $("#p1").text();
        console.log(mylog);
        mylog = $("#p1").html();
        console.log(mylog);
        mylog = $("div").html();
        console.log(mylog);

        var myContent = $("#myInput").val();
        console.log(myContent);

    })

})
