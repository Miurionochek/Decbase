
document.getElementById("sign-up__button").addEventListener("click", function(elements){
    const name = document.getElementById("name").value
    const surname = document.getElementById("surname").value
    const email = document.getElementById("email").value
    const res1 = userNameValidation(name);
    const res2 = userSurnameValidation(surname);
    const res3 = userEmailValidation(email);
    if(name == "Sigma"&&res1&&res2&&res3){
        alert("You have 120% discount")
    }
    pushInLocal(name, surname, email);
})

function userNameValidation(str){
    const nameRegex = /^[A-Z][a-z]*$/;
    document.getElementById("name").style.border = "3px solid black";
    if (!nameRegex.test(str)){
        document.getElementById("name").style.border = "3px solid red";
        return false; 
    }
    return true;
}

function userSurnameValidation(str){
    const surnameRegex = /^[A-Z][a-z]*$/;
    document.getElementById("surname").style.border = "3px solid black";
    if (!surnameRegex.test(str)){
        document.getElementById("surname").style.border = "3px solid red"; 
        return false;
    }
    return true;
}

function userEmailValidation(email){
    const gmailRegex = /[^\s]+@+[^\s]+.((com)|(ua)|(edu))/g;
    document.getElementById("email").style.border = "3px solid black";
    if (!gmailRegex.test(email)){
        document.getElementById("email").style.border = "3px solid red"; 
        return false;
    }
    return true;

}

function pushInLocal(name, surname, email){
    let a = [];
    let res = {
        "name": name, 
        "surname": surname,
        "email": email
    }
    res = JSON.stringify(res);
    a.push(res)
    localStorage.setItem('session', a);
}
