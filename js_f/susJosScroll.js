window.addEventListener('scroll', function() {
    var scrolled = window.scrollY;
    var content = document.querySelector('.mainSite');
    var maxHeight = 300;

    if (scrolled <= maxHeight) {
        content.style.transform = 'translateY(-' + (scrolled * 2) + 'px)';
    } else {
        content.style.transform = 'translateY(-' + (maxHeight * 2) + 'px)';
    }
});