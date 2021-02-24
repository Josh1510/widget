// console.log(
//     document.querySelectorAll('a.ot-select-label.ot-dtp-picker-selector-link')
// );
$(window).on('load', function () {
    // code here

    var selection = document.querySelectorAll(
        'a.ot-select-label.ot-dtp-picker-selector-link'
    );
    console.log(selection);
    selection = selection[0];
    //selection = selection[0].childNodes[0].nodeValue;

    //selection[0].childNodes[0].nodeValue = '12:00 PM';

    // var standardTime = selection.innerHTML;
    // selection.innerHTML = '2:00 PM';
    //selection.innerText = '2:00 PM';

    $('select>option[value="12:00"]').prop('selected', 'selected');

    // $(
    //     '.a.ot-select-label.ot-dtp-picker-selector-link > select option[value="15:30"]'
    // );

    // $(
    //     '.a.ot-select-label.ot-dtp-picker-selector-link option[value="14:00"]'
    // ).prop('selected', true);

    // $(
    //     '.a.ot-select-label.ot-dtp-picker-selector-link option[value="14:00"]'
    // ).attr('selected', 'selected');

    console.log(selection);
    //console.log(standardTime);
});
