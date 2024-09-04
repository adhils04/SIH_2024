function search() {
    let query = document.getElementById('searchBar').value;
    alert('You searched for: ' + query);
}

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way
    alert('Thank you for your message! We will get back to you shortly.');
});
document.getElementById('phone').placeholder = '📞 Phone Number';
document.getElementById('email').placeholder = '✉️ E-mail';
