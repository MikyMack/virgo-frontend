// Sale Banner Slider
document.addEventListener('DOMContentLoaded', function() {
    // Initialize Swiper for the sale banner
    const saleBannerSwiper = new Swiper('.sale-banner-slider', {
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        speed: 800,
        slidesPerView: 1,
        spaceBetween: 0,
        allowTouchMove: false,
        // Ensure proper alignment
        centeredSlides: true,
        // Prevent content from jumping during transitions
        preventClicks: false,
        preventClicksPropagation: false
    });
});
