import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import {
   getAuth,
   signInWithEmailAndPassword, onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
var correo = document.querySelector("#correo");

const firebaseConfig = {
   apiKey: "AIzaSyAiWzjnMDcmL-RJj2IPWp8ynp4SyL5fxxo",
   authDomain: "login-f8995.firebaseapp.com",
   projectId: "login-f8995",
   storageBucket: "login-f8995.appspot.com",
   messagingSenderId: "80187216840",
   appId: "1:80187216840:web:eabd21799049660b7e26fd",
   measurementId: "G-8YZLSFZHJJ"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();


function checkAuthentication() {

   onAuthStateChanged(auth, function (user) {
      if (user) {

         user.getIdTokenResult().then((idTokenResult) => {
            const isAdmin = !!idTokenResult.claims.admin;
            console.log("Es administrador:", isAdmin);

            if (isAdmin) {
               // Mostrar la interfaz de administrador
               window.location.href = "registrar.html";
            } else {
               alert("Solo Admin pueden ingresar");
               window.location.href = "index.html";
            }
         }).catch((error) => {
            console.log(error);
         });
      } else {


      }
   });
}

// Referencia al formulario y el input
const myForm = document.querySelector('#r-login');
var correo = document.querySelector('#correo');
var contra = document.querySelector('#password');
myForm.addEventListener("submit", (e) => {
   e.preventDefault();
   if (correo.value == "" && contra.value == "") {
      alert("LLene todo los campos");
      return;
   }
   var obj = {
      email: correo.value,
      password: contra.value,
   };
   signInWithEmailAndPassword(auth, obj.email, obj.password)

      .then(function (success) {
         checkAuthentication();
      })
      .catch(function (err) {
         console.log(err);
         if (err.code === "auth/user-not-found") {
            alert('Credenciales incorrectas');
         }

      });
});



