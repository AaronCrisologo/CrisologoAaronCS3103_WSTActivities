document.addEventListener('DOMContentLoaded', () => {
    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Form Validation and Submission
    const contactForm = document.querySelector('.contact-form');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const nameInput = this.querySelector('input[type="text"]');
        const emailInput = this.querySelector('input[type="email"]');
        const messageInput = this.querySelector('textarea');
        
        // Basic validation
        if (!nameInput.value.trim()) {
            alert('Please enter your name');
            return;
        }
        
        if (!emailInput.value.trim() || !isValidEmail(emailInput.value)) {
            alert('Please enter a valid email address');
            return;
        }
        
        if (!messageInput.value.trim()) {
            alert('Please enter a message');
            return;
        }
        
        // Simulate form submission (replace with actual form submission logic)
        alert('Message sent successfully!');
    });

    // Email validation function
    function isValidEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    const textElement = document.getElementById("typewriter-text");
    const phrases = ["Computer Science Student", "Web Developer", "Lifelong Learner"];
    let currentPhraseIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;

    function type() {
        const currentPhrase = phrases[currentPhraseIndex];
        if (isDeleting) {
            textElement.textContent = currentPhrase.substring(0, currentCharIndex--);
        } else {
            textElement.textContent = currentPhrase.substring(0, currentCharIndex++);
        }

        if (!isDeleting && currentCharIndex === currentPhrase.length) {
            setTimeout(() => (isDeleting = true), 1000); // Pause before deleting
        } else if (isDeleting && currentCharIndex === 0) {
            isDeleting = false;
            currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
        }

        setTimeout(type, isDeleting ? 50 : 100); // Adjust typing speed
    }

    type();
});