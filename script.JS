
document.getElementById('changeTextButton').addEventListener('click', function() {
    this.textContent = 'You clicked me!';
    this.style.backgroundColor = 'lightgreen';
});

const galleryImages = document.querySelectorAll('.gallery-img');
galleryImages.forEach(img => {
    img.addEventListener('dblclick', () => {
        alert('Image double-clicked!');
    });
});

document.querySelectorAll('.tabButton').forEach(button => {
    button.addEventListener('click', function() {
        const contentId = this.getAttribute('data-content');
        document.querySelectorAll('.tabContent').forEach(content => {
            content.style.display = 'none';
        });
        document.getElementById(contentId).style.display = 'block';
    });
});

const form = document.getElementById('myForm');
form.addEventListener('input', function() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email.includes('@')) {
        feedback.textContent = 'Email format is correct';
    } else {
        feedback.textContent = 'Invalid email format';
    }
    
    if (password.length < 8) {
        feedback.textContent = 'Password must be at least 8 characters';
    }
});

form.addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Form submitted!');
});
