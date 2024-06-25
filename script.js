document.addEventListener('DOMContentLoaded', function() {
    // Your profile details
    const profile = {
        name: "Jhovin Santos",
        welcomeMessage: "Welcome to my personal webpage!",
        aboutText: "Hello! I'm Jhovin Santos 21 year's old, and I believe in the power of dreams and the strength of persistence. With unwavering faith and relentless determination, I can overcome any obstacle and achieve the extraordinary. Believing in myself is the first step towards turning the impossible into reality.",
        email: "jhovinsantos12@gmail.com",
        phone: "09502832465",
        linkedin: "https://www.linkedin.com/in/jhovin",
        imageUrl: "profile.jpg"  // Ensure this matches your image file name
    };

    // Update the webpage with your details
    document.getElementById('name').textContent = profile.name;
    document.getElementById('welcome-message').textContent = profile.welcomeMessage;
    document.getElementById('about-text').textContent = profile.aboutText;
    document.getElementById('email').textContent = profile.email;
    document.getElementById('phone').textContent = profile.phone;
    document.getElementById('linkedin').href = profile.linkedin;
    document.getElementById('linkedin').textContent = profile.linkedin.replace('https://', '');
    document.getElementById('year').textContent = new Date().getFullYear();
    document.getElementById('footer-name').textContent = profile.name;
    document.getElementById('profile-image').src = profile.imageUrl;
});
