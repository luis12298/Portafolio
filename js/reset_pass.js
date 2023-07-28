import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getAuth, sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
const resetPassword = document.querySelector('#r-login');
const correo = document.querySelector("#correo");
const alerta = document.querySelector(".alert");

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
const resetPasswordFunction = () => {
   // var email = "luisguevarapineda4@gmail.com";
   sendPasswordResetEmail(auth, correo.value)
      .then(() => {
         alerta.textContent = "Enviado a su correo, el modo recuperar";
         alerta.style.color = "Blue";
         alerta.style.display = "block";
      })
      .catch((error) => {
         const errorCode = error.code;
         const errorMessage = error.message;
         console.log(errorCode + errorMessage);
      });
};



// resetPassword.addEventListener('click', resetPasswordFunction);

resetPassword.addEventListener("submit", function (e) {
   e.preventDefault();
   if (correo.value == "") {
      alerta.style.display = "block";
      return;
   } else {
      resetPasswordFunction();
   }
});

// Función para autocompletar con "@gmail.com" cuando el usuario escriba
correo.addEventListener("blur", function () {
   const valorUsuario = correo.value.trim();

   if (valorUsuario !== '' && !valorUsuario.includes('@gmail.com')) {

      correo.value = valorUsuario + '@gmail.com';
   }
});