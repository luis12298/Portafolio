import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import {
   getAuth,
   signInWithEmailAndPassword,
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

var email = document.getElementById("UserName");
var password = document.getElementById("Password");
const alerta = document.querySelector('.alert');

document.getElementById("login").addEventListener("submit", function (e) {
   e.preventDefault();
   var obj = {
      email: email.value,
      password: password.value,
   };
   if (email.value == "") {
      alerta.style.display = "block";
      alerta.textContent = "Campos vacios";
      alerta.classList.remove('alert2');
      alerta.classList.add('alert');
      email.focus();
      return;
   } else if (password.value == "") {
      alerta.style.display = "block";
      alerta.textContent = "Campos vacios";
      alerta.classList.remove('alert2');
      alerta.classList.add('alert');
      password.focus();
      return;
   }
   signInWithEmailAndPassword(auth, obj.email, obj.password)
      .then(function (success) {
         alerta.textContent = "Credenciales correctas";
         alerta.classList.remove('alert');
         alerta.classList.add('alert2');
         alerta.style.display = 'block';
         check.style.display = 'block';
         setTimeout(espera, 3000);
         function espera() {
            var aaaa = (success.user.uid);
            localStorage.setItem("uid", "Prueba" + aaaa);
            window.location.replace('main.html');
            localStorage.setItem(success, user, uid);
         }
      })
      .catch(function (err) {
         console.log(err);
         if (err.code === "auth/user-not-found") {
            alerta.textContent = 'Credenciales incorrectas';
         }
         alerta.classList.remove('alert2');
         alerta.classList.add('alert');
         alerta.style.display = 'block';
         check.style.display = 'none';
      });


});