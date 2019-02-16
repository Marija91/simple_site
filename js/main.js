$(document).ready(function() {
    $("a").click(function(e) {
          e.preventDefault();
          $('.container-content section').fadeOut('slow');
          $('.' + $(this).data('rel')).fadeIn('slow');
    });
});