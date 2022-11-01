var signupArr = JSON.parse(localStorage.getItem("signupList")) || [];
    
    function submitFun(){
       
        // var form = document.querySelector("#signupForm");

         var signupObj={
             email: document.querySelector("#email").value,
             phone: document.querySelector("#phone").value,
             pass: document.querySelector("#pass").value
         };

         
         signupArr.push(signupObj);
         localStorage.setItem("signupList", JSON.stringify(signupArr));
         location.href = "login1.html";
       
    }

