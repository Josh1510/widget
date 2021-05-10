$(window).on('load', function () {
    //set the default time here 24hr format
    let restaurantStartingTime = '12:00';

    //set the maximum group size here
    let restaurantMaxGroup = 12;

    //This changes the default time to the value of the restaurantStartingTime variable as set above
    //If we are past the time entered then it will select the time at the top of the list instead
    let timeSelector = $('select[name="Select_0"]');

    if ($('select option[value="' + restaurantStartingTime + '"]').length) {
        timeSelector.val(restaurantStartingTime).change();
    } else {
        timeSelector.prop('selectedIndex', 0).change();
    }

    //remove options for groups of x+ based on the restaurantMaxGroup variable set above
    let i;
    for (i = 20; i > restaurantMaxGroup; i--) {
        $('.ot-dtp-picker-selector option[value=' + i + ']').remove();
    }
});
