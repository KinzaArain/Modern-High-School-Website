document.addEventListener('DOMContentLoaded', () => {
    
    // Smooth scrolling for anchor navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId !== '#') {
                e.preventDefault();
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Interactive "Watch Video" button handler
    const watchVideoBtn = document.getElementById('watchVideoBtn');
    if (watchVideoBtn) {
        watchVideoBtn.addEventListener('click', function(e) {
            e.preventDefault();
            alert('Opening School Virtual Tour Video...');
        });
    }

    // Newsletter Form Submission
    const newsletterForm = document.getElementById('newsletterForm');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for subscribing to our newsletter!');
            this.reset();
        });
    }
});