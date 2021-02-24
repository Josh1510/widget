// console.log(
//     document.querySelectorAll('a.ot-select-label.ot-dtp-picker-selector-link')
// );
$(window).on('load', function () {
    var selection = document.querySelectorAll(
        'a.ot-select-label.ot-dtp-picker-selector-link'
    );
    console.log(selection);

    //changes text of time selection _only_, does not update actual value.
    //selection[0].childNodes[0].nodeValue = '3:00 PM';

    //Works to select/highlight the time but does not pass it on
    $('select>option[value="15:00"]').prop('selected', 'selected');

    // console.log(selection);
    //console.log(standardTime);
});
