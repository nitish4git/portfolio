        // NAME VALIDATION

function nameValidate(){
    let name = document.getElementById("name-input").value;
    let nameError = document.getElementById("name-error");
    if(name.length == 0){
        nameError.innerHTML = 'Invalid Name'
        return false;
    }else if(!name.match(/^[A-Zz-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = 'Write Full Name'
        return false;
    }
    nameError.innerHTML = '<i class="fa-solid fa-circle-check"style="color:#0033ff"></i>'
    return true;
}

        // PHONE VALIDATION

function phoneValidate(){
    let phone = document.getElementById("phone-input").value;
    let phoneError = document.getElementById("phone-error");
    if(phone.length == 0){
        phoneError.innerHTML = " Enter Valid Phone Number"
        return false;
    }else if(phone.length < 10){
        let remaining = (10-phone.length);
        phoneError.innerHTML = (`Enter ${remaining} more digit`) ;
        // phoneError.innerHTML = ("Enter"+ " " +remaining +" " +"More digits") ; ----:> Another way of writing strings.
        return false;

    }
    else if(phone.length == 10){
        phoneError.innerHTML = '<i class="fa-solid fa-circle-check"style="color:#0033ff"></i>'
        return true;
    }
}

// EMAIL VALIDATION

function emailValidate(){
    let email = document.getElementById("email-input").value;
    let emailError = document.getElementById("email-error");
    if(email.length == 0){
        emailError.innerHTML = 'Enter Valid Email'
        return false;  
    }
}