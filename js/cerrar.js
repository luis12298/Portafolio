import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import {
   getAuth,
   signOut,
   onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";

const btnSalir = document.querySelector("#Cerrar");
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

btnSalir.addEventListener("click", function (e) {
   e.preventDefault();
   document.querySelector("#Mensaje").style.display = "block";
   setTimeout(() => {

      signOut(auth)
         .then(function () {
            window.location.href = "index.html";
         })
         .catch(function (err) {
            console.log(err);
         });
   }, 2000);
});
function checkAuthentication() {
   onAuthStateChanged(auth, function (user) {
      var usuario = document.querySelector(".infor");
      var correo = document.querySelector("#correo");
      const photo = document.querySelector("#foto-perfil");


      if (user) {

         user.getIdTokenResult().then((idTokenResult) => {
            const isAdmin = !!idTokenResult.claims.admin;
            console.log("Es administrador:", isAdmin);

            if (isAdmin) {
               // Mostrar la interfaz de administrador
               console.log(isAdmin);
            } else {
               console.log(isAdmin);
            }
         }).catch((error) => {
            console.log(error);
         });
         const uid = user.email;
         photo.src = user.photoURL;
         usuario.textContent = "Informacion de cuenta de: " + uid;
         correo.textContent = "Perfil: " + uid;
         // ...
      } else {

         window.location.href = "index.html";
      }
   });
}

checkAuthentication();