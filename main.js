$(window).on('load', function () {
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
    } else if ($('select option[value="16:30"]').length) {
        selector.val('16:30').change();
    } else if ($('select option[value="17:00"]').length) {
        selector.val('17:00').change();
    } else if ($('select option[value="17:30"]').length) {
        selector.val('17:30').change();
    } else if ($('select option[value="18:00"]').length) {
        selector.val('18:00').change();
    } else if ($('select option[value="18:30"]').length) {
        selector.val('18:30').change();
    }

    //remove options of groups 13+

    $('.ot-dtp-picker-selector option[value="13"]').remove();
    $('.ot-dtp-picker-selector option[value="14"]').remove();
    $('.ot-dtp-picker-selector option[value="15"]').remove();
    $('.ot-dtp-picker-selector option[value="16"]').remove();
    $('.ot-dtp-picker-selector option[value="17"]').remove();
    $('.ot-dtp-picker-selector option[value="18"]').remove();
    $('.ot-dtp-picker-selector option[value="19"]').remove();
    $('.ot-dtp-picker-selector option[value="20"]').remove();
    $('.ot-dtp-picker-selector option[value="21"]').remove();
});
