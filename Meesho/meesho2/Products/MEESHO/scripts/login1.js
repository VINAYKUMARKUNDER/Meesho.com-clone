var users = JSON.parse(localStorage.getItem("signupList"));
document.querySelector("#form").addEventListener("submit", formSubmit)
var form = document.querySelector("#form");

function formSubmit(event)   {
    event.preventDefault();

    var email1 = form.email.value;

    var pass1 = form.pass.value;

    var flag = false;
    for(var i = 0; i < users.length; i++){
        if(users[i].email == email1 && users[i].pass == pass1){
            flag = true;
        }
    }

    if(flag == true){
        alert("Login Successful");
        location.href = "/index.html";  //enter yor landing page (name).html
    }
    else {
        alert("Enter valid email and password");
    }
}