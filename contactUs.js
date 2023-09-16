
    function validateForm() {
        // Fetching values from all input fields and storing them in variables.
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var message = document.getElementById("message").value;

        // Initializing error variables with a value of empty string.
        var nameError = emailError = messageError = "";

        // Regular expression pattern for email validation.
        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // Validate name field
        if (name == "") {
            nameError = "Name is required";
        }

        // Validate email field
        if (email == "") {
            emailError = "Email is required";
        } else if (!emailPattern.test(email)) {
            emailError = "Invalid email address";
        }

        // Validate message field
        if (message == "") {
            messageError = "Message is required";
        }

        // Displaying error messages
        document.getElementById("nameError").innerHTML = nameError;
        document.getElementById("emailError").innerHTML = emailError;
        document.getElementById("messageError").innerHTML = messageError;

        // Prevent form submission if there are any errors
       // if (nameError  emailError  messageError) {
            //return false;
        //}
    }

    
    document.getElementById("email-link").addEventListener("click", function(event) {
      event.preventDefault(); // يمنع السلوك الافتراضي للضغطة على الرابط
      
      window.location.href = "https://mail.google.com"; // ينقل المستخدم إلى صفحة البريد
      
      // يمكن استبدال "https://mail.google.com" بعنوان URL لصفحة البريد المطلوبة
    });

