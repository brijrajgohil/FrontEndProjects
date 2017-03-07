// Accordian

var action = "click";
var speed = "500";

$(document).ready(function() {
    //Get next element
    $('li.q').on(action, function() {
        $(this).next()
            .slideToggle(speed)
            .siblings('li.a').slideUp();

    //Get image for active question
    var img = $(this).children('img');

    //Remove rotate class for all images except the active
    $('img').not(img).removeClass('rotate');

    //Toggle rotate class
    img.toggleClass('rotate');
    });
});
