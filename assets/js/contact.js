(function () {
    // Initialize EmailJS with your user ID
    // TODO: Replace 'YOUR_PUBLIC_KEY' with your actual EmailJS public key
    emailjs.init("YOUR_PUBLIC_KEY");

    document.getElementById('contact-form').addEventListener('submit', function (event) {
        event.preventDefault();

        // Show loading state
        const btn = this.querySelector('button[type="submit"]');
        const originalBtnText = btn.innerText;
        btn.innerText = 'Sending...';
        btn.disabled = true;

        // Get form values
        const templateParams = {
            from_name: document.getElementById('name').value,
            from_email: document.getElementById('email').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value
        };

        // Send email
        // TODO: Replace 'YOUR_SERVICE_ID' and 'YOUR_TEMPLATE_ID' with your actual IDs
        emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
            .then(function () {
                alert('Message sent successfully!');
                document.getElementById('contact-form').reset();
                btn.innerText = originalBtnText;
                btn.disabled = false;
            }, function (error) {
                console.error('FAILED...', error);
                alert('Failed to send message: ' + JSON.stringify(error));
                btn.innerText = originalBtnText;
                btn.disabled = false;
            });
    });
})();
