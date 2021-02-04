// event ready on document
//$(document).ready(function() {
$(function() {
    $("#p1").click(function() {
            $("#p2").hide(1000, function() {
                $("#p3").hide(1000);
            });
        }
    )

})
