if (DEVICE.isSp) {
  var pagenation_num = $("#news--pn__center > a").length;
  var on_position;
  if (pagenation_num > 3) {
    $("#news--pn__center > a").each(function (index, element) {
      // element == this
      if ($(this).hasClass("on")) {
        on_position = index;
      }
    });
    console.log(on_position);
    if (on_position <= 1) {
      $("#news--pn__center > a:not(:nth-child(-n+3) )").hide();

    } else if (on_position >= pagenation_num - 2) {
      $("#news--pn__center > a:not(:nth-last-of-type(-n+3))").hide();

    } else {
      $("#news--pn__center > a:first-child()").hide();
      $("#news--pn__center > a:last-child()").hide();
    }
  }
}