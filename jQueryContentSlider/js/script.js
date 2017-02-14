/**
 * Created by Beetu on 12/02/17.
 */

$(document).ready(function() {
    var speed = 500;        //fade speed
    var autoSwitch = true;  // auto slider option
    var autoSwitchSpeed = 4000; // auto slider speed

    //Add initial active class
    $('.slide').first().addClass('active');

    //Hide all slides
    $('.slide').hide();

    //Show first slide
    $('.active').show();

    //Next button click
    $('#next').on('click', nextSlide);

    //Prev button click
    $('#prev').on('click', prevSlide);

    //Auto slider handler
    if(autoSwitch == true) {
        setInterval(nextSlide , autoSwitchSpeed);
    }

    //Switch to next Slide
    function nextSlide() {
        $('.active').removeClass('active').addClass('oldActive');

        if($('.oldActive').is(':last-child')) {
            $('.slide').first().addClass('active');
        } else {
            $('.oldActive').next().addClass('active');
        }
        $('.oldActive').fadeOut(speed);
        $('.oldActive').removeClass('oldActive');
        $('.active').fadeIn(speed);
    }

    //Switch to prev slide
    function prevSlide() {
        $('.active').removeClass('active').addClass('oldActive');

        if($('.oldActive').is(':first-child')) {
            $('.slide').last().addClass('active');
        } else {
            $('.oldActive').prev().addClass('active');
        }
        $('.oldActive').fadeOut(speed);
        $('.oldActive').removeClass('oldActive');
        $('.active').fadeIn(speed);
    }

});
