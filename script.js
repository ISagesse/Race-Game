$('#go').click(function () { 
    //get the width of the cars.
    let carWidth = $('.car').width();

    //get the width of the race track.
    let raceTrackWidth = $(window).width() - carWidth;

    //generate a random number between 1 and 5000.

    let raceTime = Math.floor(Math.random() * 5000) + 1;
    let raceTime2 = Math.floor(Math.random() * 5000) + 1;

    // set the finished flag to false.
    let isComplete = false;

    // set position to FIRST by default.
    let position = 'First';

    // animate car 1.
    $('#car1').animate({
        left: raceTrackWidth
    }, raceTime, function () {
        checkIfComplete();

        // inform the user who wins
        $('#raceInfo1 span').text('FInished in ' + position + ' place and completed the race in ' + raceTime + ' millisseconds');
    });

    // animate car 2.
    $('#car2').animate({
        left: raceTrackWidth
    }, raceTime2, function () {
        checkIfComplete();

        // inform the user who wins
        $('#raceInfo2 span').text('FInished in ' + position + ' place and completed the race in ' + raceTime2 + ' millisseconds');
    });

    function checkIfComplete() {
        if (isComplete == false) {
            isComplete = true;
        }else {
            position = 'Second';
        }
    }
});

$('#reset').click(function () { 
    $('.car').css('left', '0');
    $('.raceInfo span').text('');
});