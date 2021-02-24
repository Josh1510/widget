// console.log(
//     document.querySelectorAll('a.ot-select-label.ot-dtp-picker-selector-link')
// );
$(window).on('load', function () {
    // Changes both time and party size text
    //$('a.ot-select-label.ot-dtp-picker-selector-link').text('test');

    //changes only the text of the selection box.
    var selection = $('a.ot-select-label.ot-dtp-picker-selector-link');
    selection[0].childNodes[0].nodeValue = '4:00 PM';
    //selection.text('hello');

    //changes text of time selection _only_, does not update actual value.
    //selection[0].childNodes[0].nodeValue = '4:00 PM';

    //Works to select/highlight the time but does not pass it on
    $('select option[value="16:00"]').prop('selected', true);

    console.log(selection);
    //console.log(standardTime);
});
