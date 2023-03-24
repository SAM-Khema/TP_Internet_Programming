 //initialize the acc
 var email = "gic@gmail.com";
 var pwd = "Gic123";

 function getCookie(cookiename){//function use to get cookie by name
     let name = cookiename + "=";
     let dCookie = decodeURIComponent(document.cookie);
     let k = dCookie.split(';');
     for(let i=0; i<k.length; i++){
         let ka = k[i];
         while(ka.charAt(0) == ' '){
             ka = ka.substring(1);
         }
         if(ka.indexOf(name) == 0){
             return ka.substring(name.length, ka.length);
         }
     }return "";
 }

 function login(){//set cookies to expires and get the user info to check with the acc
     var date = new Date();
     date.setTime(date.getTime()+(30*1000));
     document.cookie="email=gic@gmail.com;expires="+date.toUTCString();

     let email = document.getElementById('email').value;
     let pwd = document.getElementById('pwd').value;

     if(this.email === email && this.pwd === pwd && document.cookie === "email=gic@gmail.com"){
         location.href="./homepage.html";
     }
 }

 function logout(){ //used to log out and back to log in page
     location.href = "./LoginForm.html";
 }

 function cookieExpired(){//it will call back to the login page when it's is over the time log in
     var Valuecookie = getCookie("email");
     if(Valuecookie != "gic@gmail.com"){
         location.href ="./LoginForm.html";
     }
 }