document.getElementById('contact-form').addEventListener('submit', function(event) {
    // You can replace the alert with your own logic to store the form data
    // or send it to a server via an API (e.g. using fetch or XMLHttpRequest).
    alert('Form submitted! Name: ' + event.target.name.value + ', Email: ' + event.target.email.value);

    // Redirect to the thank you page and then clear the form
    window.location.href = event.target._next.value;
    event.target.reset();
    event.preventDefault();
});

