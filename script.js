document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Shukriya! Aap ka paigham hum tak pohanch gaya hai. Hum jaldi aap se rabta karengy.');
            contactForm.reset();
        });
    }
});


