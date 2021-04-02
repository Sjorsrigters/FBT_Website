$('.showSingle').click(function () {
    if ($(this).hasClass("button-active")) {
      $('.targetDiv').hide();
      $('.showSingle').removeClass('button-active');
      $('#div1, #div5').show();
    } else {
      $('.targetDiv').hide();
      $('.showSingle').removeClass('button-active');
      $(this).addClass("button-active")
      $('#div' + $(this).attr('target')).show();
    }
});

$(document).ready(function() {
			var colors = ["#aa5aff", "#fc5217"];
			var rand = Math.floor(Math.random() * colors.length);
			$('body').css("background-color", colors[rand]);
});

// $(document).ready(function() {
// 			var colors = ["#aa5aff", "#75fa4c"];
// 			var rand = Math.floor(Math.random() * colors.length);
// 			$('header').css("background-color", colors[rand]);
//       $('footer').css("background-color", colors[rand]);
// });

var scale = Math.min(
  availableWidth / contentWidth,
  availableHeight / contentHeight
);
