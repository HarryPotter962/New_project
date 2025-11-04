// Initialize AOS (Animate on Scroll)
AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        window.scrollTo({
            top: target.offsetTop - 80,
            behavior: 'smooth'
        });
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(0, 0, 0, 0.9)';
    } else {
        navbar.style.background = 'rgba(0, 0, 0, 0.8)';
    }
});

// Product cards hover effect
const productCards = document.querySelectorAll('.product-card');
productCards.forEach(card => {
    card.addEventListener('mouseover', () => {
        card.style.transform = 'translateY(-15px)';
    });
    
    card.addEventListener('mouseout', () => {
        card.style.transform = 'translateY(0)';
    });
});

// Buy button click animation
const buyButtons = document.querySelectorAll('.buy-button');
buyButtons.forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
            alert('Thank you for your interest! This is a demo website.');
        }, 150);
    });
});

// Form submission handling
const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(this);
    
    // Animate submit button
    const submitButton = this.querySelector('.submit-button');
    submitButton.style.transform = 'scale(0.95)';
    submitButton.innerHTML = 'Sending...';
    
    // Simulate form submission
    setTimeout(() => {
        submitButton.style.transform = 'scale(1)';
        submitButton.innerHTML = 'Message Sent!';
        this.reset();
        
        setTimeout(() => {
            submitButton.innerHTML = 'Send Message';
        }, 2000);
    }, 1500);
});