$(function(){
  $("[data-toggle=popover]").popover({
      html : true,
      content: function() {
        var content = $(this).attr("data-popover-content");
        return $(content).children(".popover-body").html();
      },
      title: function() {
        var title = $(this).attr("data-popover-content");
        return $(title).children(".popover-heading").html();
      }
  });
});

// With JQuery
$('#ex1').slider({
	formatter: function(value) {
		return 'Current value: ' + value;
	}
});

// Without JQuery
var slider = new Slider('#ex1', {
	formatter: function(value) {
		return 'Current value: ' + value;
	}
});


// With JQuery
$("#ex5").slider();

// Without JQuery
var slider = new Slider('#ex5');

$("#destroyEx5Slider").click(function() {

	// With JQuery
	$("#ex5").slider('destroy');

	// Without JQuery
	slider.destroy();
});