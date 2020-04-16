$(document).ready(function() {
  
    var scrollLink = $('.scroll');

    // Smooth scrolling
    scrollLink.click(function(event) {
        event.preventDefault();
        $('body,html').animate({
        scrollTop: $(this.hash).offset().top
        }, 1000);
    });

    // Active link switching
    $(window).scroll(function() {
        var scrollbarLocation = $(this).scrollTop();
        
        scrollLink.each(function() {

            console.log("offset" + $(this.hash).offset().top);
            console.log("navheight" + $(".navbar").outerHeight());
        
        var sectionOffset = $(this.hash).offset().top - $(".navbar").outerHeight();
        
        if ( sectionOffset <= scrollbarLocation ) {
            $(this).parent().addClass('active');
            $(this).parent().siblings().removeClass('active');
        }
        });
        
    });

});