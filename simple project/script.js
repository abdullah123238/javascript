document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
    
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    

    const users = [
        { email: "dollypee@gmail.com", password: "secure123" },
        { email: "abdullah@gmail.com", password: "secure124" },
        { email: "damilare@gmail.com", password: "secure125" },
        { email: "lateefah@gmail.com", password: "secure126" },
        { email: "idris@gmail.com", password: "secure127" },
        { email: "muiz@gmail.com", password: "secure128" },
        { email: "feranmi@gmail.com", password: "secure129" },
        { email: "kabir@gmail.com", password: "secure131" },
        { email: "ridwan@gmail.com", password: "secure132" }
    ]
     

    
    const errorMessageElement = document.getElementById("error-message");
    

    errorMessageElement.style.display = "none";
    errorMessageElement.innerHTML = "";

    
    if (!email || !password) {
        errorMessageElement.style.display = "block";
        errorMessageElement.innerHTML = "Both fields are required.";
        return; 
    }


    if (password.length < 6) {
        errorMessageElement.style.display = "block";
        errorMessageElement.innerHTML = "Password must be at least 6 characters.";
        return; 
    }

    
    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
        alert(`Hi ${email}! You are now logged in`);
        // Optionally, redirect the user or perform other actions here
    } else {
        errorMessageElement.style.display = "block";
        errorMessageElement.innerHTML = "Invalid email or password.";
    }
});

