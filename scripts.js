document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        if (name === '' || email === '' || message === '') {
            alert('Please fill in all fields.');
        } else {
            alert('Thank you for your message, ' + name + '!');
        }
    });


const resultDiv = document.getElementById('result');
resultDiv.innerHTML = `
    <h3>Pesan Diterima</h3>
    <p><strong>Nama:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Pesan:</strong> ${message}</p>
`;
});