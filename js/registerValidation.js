// Validate everything in our registration form.
function validate() {
    
    // Get all the elements from our registration form for later use
    var fname = document.getElementById("fname");
    var lname = document.getElementById("lname");
    var address = document.getElementById("address");
    var city = document.getElementById("city");
    var state = document.getElementById("state");
    var zip = document.getElementById("zip");
    var phoneNumber = document.getElementById("phoneNumber");
    var personal = document.getElementById("personal");
    var business = document.getElementById("business");
    
    // Deals with the first name
    if (fname.value.length == 0)
    {
        fname.focus();
        alert("First name cannont be empty!");

        return false;
    }

    // Deals with the last name
    if (lname.value.length == 0)
    {
        lname.focus();
        alert("Last name cannont be empty!");

        return false;
    }

    // Deals with the address
    if (address.value.length == 0)
    {
        address.focus();
        alert("Address cannont be empty!");

        return false;
    }

    // Deals with the city
    if (city.value.length == 0)
    {
        city.focus();
        alert("City cannont be empty!");

        return false;
    }

    // Deals with the state
    if (state.value.length == 0)
    {
        state.focus();
        alert("State must be selected!");

        return false;
    }

    // Deals with the zip code
    if (zip.value.length != 5 || isNaN(zip.value))
    {
        zip.focus();
        alert("Zip code must be in format #####");

        return false;
    }

    // Deals with the phone number
    if (phoneNumber.value.length != 10 || isNaN(phoneNumber.value))
    {
        phoneNumber.focus();
        alert("Phone number must be 10 digits long!");

        return false;
    }

    // Deals with the radio buttons for phone number type
    if (!personal.checked && !business.checked)
    {
        personal.focus();
        alert("Must select phone type (Personal or Business)!");

        return false;
    }

    // Our last step, so we can return whatever this function returns
    return validateEmail();
}

// Validates the entered email is in proper form
function validateEmail()
{
    var email = document.getElementById("email");

    // Gets the position of the "@" and "."
    atpos = email.value.indexOf("@");
    dotpos = email.value.lastIndexOf(".");

    // Makes sure email is in format of "x@x.x", where x is any string
    if (atpos < 1 || ( dotpos - atpos < 2 ) || dotpos == email.value.length) 
    {
        email.focus();
        alert("Please enter a valid email!")
        
        return false;
    }

    return(true);
}