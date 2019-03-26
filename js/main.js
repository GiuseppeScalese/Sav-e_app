//check whether or not namespace exist
var MyApp = MyApp || {};

//create my app namespace
var MyApp = (function(){

  //public method - handles the click events
  var initEventsListener = function () {
    //add active class to selected menu tab
    $('.calendar-list__month').click(function() {
      $(this).addClass('active').siblings().removeClass('active');
    });

    //load jQuery UI date picker 
    $("#datepicker").datepicker();
  };

  //public method - handles the overlay click event
  var overlayListener = function () {
    //show overlay
    $('#redeem, .snap-button').click(function() {
      $("#popup").fadeIn('fast');
      $("#fade").fadeIn('fast');
    });

    //close overlay
    $('.overlay__close-button').click(function() {
      $("#popup").fadeOut('fast');
      $("#fade").fadeOut('fast');
    });

    //close confirm overlay
    $('.overlay__confirm').click(function() {
      $("#popup-confirm").fadeIn('fast');
      $("#popup").fadeOut('fast');
    });
  };

  return {
      initEventsListener: initEventsListener,
      overlayListener: overlayListener
  };

})();

MyApp.initEventsListener();
MyApp.overlayListener();

