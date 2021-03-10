//Function defaults to 5pm, after the time passes 5pm the next available time is selected

$(window).on("load", function () {
  let selector = $('select[name="Select_0"]');
  if ($('select option[value="17:00"]').length) {
    selector.val("17:00").change();
  } else if ($('select option[value="17:30"]').length) {
    selector.val("17:30").change();
  } else if ($('select option[value="18:00"]').length) {
    selector.val("18:00").change();
  } else if ($('select option[value="18:30"]').length) {
    selector.val("18:30").change();
  }
});
