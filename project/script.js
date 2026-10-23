

const contactForm = document.getElementById('contact-form');

contactForm.onsubmit = function(event) {
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const username = document.getElementById('username').value;

    
    if (username === "" || email === "" || password === "") {
        alert("All fields are required!");
        event.preventDefault(); 
        return false;
    }

    

    if (!email.endsWith("@azhar.edu.eg")) {
        alert("Error: Email must end with @azhar.adu.eg to get the Bonus!");
        event.preventDefault();
        return false;
    }


    if (password.length < 8) {
        alert("Error: Password must be at least 8 characters long.");
        event.preventDefault(); 
        return false;
    }

    
    alert("Form validation successful! Submitting...");
    return true;
};