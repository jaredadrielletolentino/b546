var typed = new Typed(".multiple-text", {
    strings: ["Front End Developer", "Back End Developer", "Full Stack Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})

// Show/hide the arrow based on scroll position
window.addEventListener('scroll', function() {
    const topButton = document.querySelector('.top');
    if (window.scrollY > 300) {
        topButton.classList.add('active');
    } else {
        topButton.classList.remove('active');
    }
});

// Scroll to top when clicked

