(function () {
    // Initialize EmailJS with your user ID
    emailjs.init("3c0PheHfBlmlEbxhA");

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
        const serviceID = 'service_hwpdp4b';
        const templateID = 'template_2guuvtt';

        // Check if EmailJS is defined (it should be if the script is loaded in HTML)
        if (typeof emailjs !== 'undefined') {
            emailjs.send(serviceID, templateID, templateParams)
                .then(function () {
                    alert('Message sent successfully!');
                    document.getElementById('contact-form').reset();
                    btn.innerText = originalBtnText;
                    btn.disabled = false;
                }, function (error) {
                    console.error('FAILED...', error);
                    // For demo purposes, if keys are missing, we might still want to show a success message or a specific error
                    if (error.text && error.text.includes("The user_id is invalid")) {
                        alert('Message simulated (EmailJS keys missing). Check console for details.');
                    } else {
                        alert('Failed to send message. Please try again later.');
                    }
                    btn.innerText = originalBtnText;
                    btn.disabled = false;
                });
        } else {
            console.error('EmailJS library not loaded.');
            alert('Email system is currently unavailable.');
            btn.innerText = originalBtnText;
            btn.disabled = false;
        }
    });
})();
