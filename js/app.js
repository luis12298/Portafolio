
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import {
   getAuth,
   createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";



const firebaseConfig = {
   apiKey: "AIzaSyAiWzjnMDcmL-RJj2IPWp8ynp4SyL5fxxo",
   authDomain: "login-f8995.firebaseapp.com",
   projectId: "login-f8995",
   storageBucket: "login-f8995.appspot.com",
   messagingSenderId: "80187216840",
   appId: "1:80187216840:web:eabd21799049660b7e26fd",
   measurementId: "G-8YZLSFZHJJ"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

var email = document.getElementById("Usuario");
var password = document.getElementById("Contrasena");

document.getElementById("registro").addEventListener("submit", function (e) {
   e.preventDefault();
   var obj = {
      email: email.value,
      password: password.value,
   };
   if (email.value == '' && password.value == '') {
      alert("LLene los campos");
      return;
   } else {
      console.log(obj);
      createUserWithEmailAndPassword(auth, obj.email, obj.password)
         .then(function (success) {
            // window.location.replace('HTML/login.html');

            // console.log(success.user.uid)
            alert("Registro Exitoso");
            window.location = "index.html";
         })
         .catch(function (err) {
            alert("El correo ya existe " + err);
         });
      console.log();
      console.log(obj);
   }
});



