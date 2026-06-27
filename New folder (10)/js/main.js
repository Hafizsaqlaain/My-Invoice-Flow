document.addEventListener('DOMContentLoaded', () => {
    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(13, 15, 18, 0.95)';
            navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.5)';
        } else {
            navbar.style.background = 'rgba(13, 15, 18, 0.8)';
            navbar.style.boxShadow = 'none';
        }
    });

    // Simple horizontal scroll helper for screenshots (optional enhance)
    const scrollContainer = document.querySelector('.screenshots-scroll');
    if (scrollContainer) {
        scrollContainer.addEventListener('wheel', (evt) => {
            if (evt.deltaY != 0) {
                // evt.preventDefault(); // Un-comment to convert vertical scroll to horizontal
                // scrollContainer.scrollLeft += evt.deltaY;
            }
        });
    }
});
