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
    // if ($('select option[value="12:00"]').length) {
    //     $('select option[value="12:00"]').prop('selected', true).change();
    // } else {
    //     console.log('not here');
    //     $('select option[value="12:00"]').append('Some appended text.');
    // }

    //$('select[name="Select_0"]').val('22:00').change();
    let selector = $('select[name="Select_0"]');
    if ($('select option[value="12:00"]').length) {
        selector.val('12:00').change();
    } else if ($('select option[value="12:30"]').length) {
        selector.val('12:30').change();
    } else if ($('select option[value="13:00"]').length) {
        selector.val('13:00').change();
    } else if ($('select option[value="13:30"]').length) {
        selector.val('13:30').change();
    } else if ($('select option[value="14:00"]').length) {
        selector.val('14:00').change();
    } else if ($('select option[value="14:30"]').length) {
        selector.val('14:30').change();
    } else if ($('select option[value="15:00"]').length) {
        selector.val('15:00').change();
    } else if ($('select option[value="15:30"]').length) {
        selector.val('15:30').change();
    } else if ($('select option[value="16:00"]').length) {
        selector.val('16:00').change();
    } else if ($('select option[value="17:30"]').length) {
        selector.val('17:30').change();
    } else if ($('select option[value="18:00"]').length) {
        selector.val('18:00').change();
    } else if ($('select option[value="18:30"]').length) {
        selector.val('18:30').change();
    }
});
