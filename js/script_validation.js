function validateForm() {
    // Get the form inputs
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;

    // Define the regular expressions for validation
    var nameRegex = /^[a-zA-Z\s]+$/;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var phoneRegex = /^\d{10}$/;

    // Perform the validation
    if (!nameRegex.test(name)||name==null) {
        alert('Please enter a valid name');
        return false;
    }

    if (!emailRegex.test(email)||email==null) {
        alert('Please enter a valid email address');
        return false;
    }

    if (!phoneRegex.test(phone)||phone==null) {
        alert('Please enter a valid phone number');
        return false;
    }


    // If all validations pass, submit the form
    alert('Form submitted successfully');
    return true;
}