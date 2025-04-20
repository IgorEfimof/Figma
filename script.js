// Sticky Header Shadow Effect
window.addEventListener('scroll', function() {
    const header = document.querySelector('.sticky-header');
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
    } else {
        header.style.boxShadow = 'none';
    }
});

// Simple Form Validation
document.querySelector('form').addEventListener('submit', function(e) {
    const name = document.querySelector('#name').value.trim();
    const email = document.querySelector('#email').value.trim();
    const privacy = document.querySelector('#privacy').checked;

    if (!name || !email || !privacy) {
        e.preventDefault();
        alert('Please complete all fields and accept the privacy policy.');
    }
});
