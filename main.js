// console.log(
//     document.querySelectorAll('a.ot-select-label.ot-dtp-picker-selector-link')
// );
$(window).on('load', function () {
    // Changes both time and party size text
    //$('a.ot-select-label.ot-dtp-picker-selector-link').text('test');

    //changes only the text of the selection box.
    // var selection = $('a.ot-select-label.ot-dtp-picker-selector-link');
    // selection[0].childNodes[0].nodeValue = '4:00 PM';
    //selection.text('hello');

    //changes text of time selection _only_, does not update actual value.
    //selection[0].childNodes[0].nodeValue = '4:00 PM';

    //Both of the below options work to select the correct time.
    //If the time has passed then selects default of 7pm
    $('select option[value="22:00"]').prop('selected', true).change();
    //$('select[name="Select_0"]').val('22:00').change();
});
