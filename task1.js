window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = '#444';  // Darker background on scroll
    } else {
        navbar.style.backgroundColor = '#333';  // Default background when at the top
    }
});
