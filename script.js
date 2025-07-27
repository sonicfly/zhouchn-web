// script.js
// You can add interactive JavaScript here if needed

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            if (this.hash) {
                e.preventDefault();
                const target = document.querySelector(this.hash);
                if (target) {
                    window.scrollTo({
                        top: target.offsetTop - 70, // Offset for fixed nav
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});
