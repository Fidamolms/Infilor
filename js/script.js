$(document).ready(function() {
    // Background slideshow
    const backgrounds = $('.bg-slide');
    let currentBg = 0;
    
    function changeBackground() {
        backgrounds.removeClass('active');
        currentBg = (currentBg + 1) % backgrounds.length;
        $(backgrounds[currentBg]).addClass('active');
    }
    
    // Change background every 5 seconds
    setInterval(changeBackground, 5000);
    
    // Initialize first background
    $(backgrounds[0]).addClass('active');
    
    // Animate content items sequentially
    $('.content-item').each(function(i) {
        $(this).css({
            'opacity': 0,
            'transform': 'translateY(20px)'
        }).delay(i * 200).animate({
            'opacity': 1,
            'transform': 'translateY(0)'
        }, 600);
    });
    
    // Smooth scrolling for Explore button
    $('.btn-explore').click(function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $('.content-dropdown').offset().top
        }, 800);
    });
});

$(document).ready(function() {
    // Dropdown for Find Us Section
    $('.dropdown-btn').click(function() {
        $(this).next('.dropdown-content').slideToggle(200);
    });
});
