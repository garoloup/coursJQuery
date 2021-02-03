// event ready on document
//$(document).ready(function() {
$(function() {
    $("#p1").mouseenter(function() {
        $('#p5').hide();
    })
    $("#p1").mouseleave(function() {
        $('#p5').show();
    })

})
